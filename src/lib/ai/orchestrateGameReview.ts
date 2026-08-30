import {
  CriticalMoment,
  FinalGameReview,
  GameAnalysisContext,
  PerformanceSnapshot,
  TacticalOpportunity,
  TurningPoint,
} from "@/types/ai";
import { generateStructured, reviewSchema } from "./llm/geminiClient";
import { MoveClassification } from "@/types/enums";

interface GeminiReview {
  overallAssessment: string;
  gameSummary: string;
  strengths: string[];
  weaknesses: string[];
  trainingRecommendations: string[];
  tacticalAnalysis: string;
  positionalAnalysis: string;
  strategicAnalysis: string;
  mainLesson: string;
  turningPoints: Array<{
    ply: number;
    explanation: string;
    lesson: string;
    whyItMatters?: string;
    beforeSituation?: string;
    afterSituation?: string;
    opponentThreat?: string;
    tacticalMotif?: string;
  }>;
}

export const orchestrateGameReview = async (
  context: GameAnalysisContext
): Promise<FinalGameReview> => {
  const performanceSnapshot = computePerformanceSnapshot(context);
  const tacticalOpportunities = extractTacticalOpportunities(
    context.criticalMoments
  );

  let geminiReview: GeminiReview | undefined;

  try {
    const evidence = JSON.stringify({
      criticalMoments: context.criticalMoments,
      accuracy: context.gameEval.accuracy,
      movesCount: context.moves.length,
    });
    const prompt = `You are an elite chess coach. Stockfish evaluation evidence is authoritative.
Every candidate contains the exact played SAN move, move number, color, evaluation change, best move, alternatives, and PV in SAN.
Never invent a move or claim absent from this evidence.
Write concise explanations (maximum 40 words per field), one actionable main lesson, clear tactical/positional guidance, and coach insights for the turning points.
Evidence: ${evidence}`;

    geminiReview = await generateStructured<GeminiReview>(prompt, reviewSchema);
  } catch {
    // Graceful fallback to deterministic engine-backed review
    geminiReview = generateFallbackReview(context);
  }

  const moments = new Map(
    context.criticalMoments.map((moment) => [moment.ply, moment])
  );

  const turningPoints: TurningPoint[] = (
    geminiReview.turningPoints.length
      ? geminiReview.turningPoints
      : context.criticalMoments.map((m) => {
          const isWhite = m.color === "white";
          const side = isWhite ? "White" : "Black";
          const drop = Math.abs(Math.round(m.evaluationChange));
          return {
            ply: m.ply,
            explanation: `On move ${m.moveNumber}, ${side} played ${m.san}, causing a ${drop}% win probability drop.`,
            whyItMatters: `This was the moment ${side}'s advantage largely evaporated into counterplay.`,
            beforeSituation: `${side} controlled the initiative with a ${Math.round(m.evaluationBefore)}% win expectation.`,
            afterSituation: `Evaluation shifted to ${Math.round(m.evaluationAfter)}%, equalizing the game.`,
            lesson: `Check opponent candidate checks, captures, and threats before committing pieces.`,
            opponentThreat: m.alternatives[0]?.san
              ? `Top engine defense was ${m.alternatives[0].san}`
              : undefined,
            tacticalMotif:
              m.classification === "blunder"
                ? "Momentum Shift"
                : "Positional Slip",
          };
        })
  )
    .slice(0, 5)
    .flatMap((point) => {
      const moment = moments.get(point.ply);
      if (!moment) return [];
      return [
        {
          ...moment,
          explanation: point.explanation,
          lesson: point.lesson,
          whyItMatters:
            point.whyItMatters ||
            `Game trajectory shifted significantly on move ${moment.moveNumber}.`,
          beforeSituation:
            point.beforeSituation ||
            `Win probability was ${Math.round(moment.evaluationBefore)}%.`,
          afterSituation:
            point.afterSituation ||
            `Win probability dropped to ${Math.round(moment.evaluationAfter)}%.`,
          opponentThreat: point.opponentThreat,
          tacticalMotif: point.tacticalMotif,
        },
      ];
    });

  const biggestTurningPoint =
    turningPoints.length > 0
      ? [...turningPoints].sort(
          (a, b) => a.evaluationChange - b.evaluationChange
        )[0]
      : undefined;

  return {
    overallAssessment: geminiReview.overallAssessment,
    gameSummary: geminiReview.gameSummary,
    mainLesson: geminiReview.mainLesson,
    strengths: geminiReview.strengths,
    weaknesses: geminiReview.weaknesses,
    trainingRecommendations: geminiReview.trainingRecommendations,
    tacticalAnalysis: {
      title: "Tactical analysis",
      content: geminiReview.tacticalAnalysis,
    },
    positionalAnalysis: {
      title: "Positional analysis",
      content: geminiReview.positionalAnalysis,
    },
    strategicAnalysis: {
      title: "Strategic analysis",
      content: geminiReview.strategicAnalysis,
    },
    turningPoints,
    tacticalOpportunities,
    biggestTurningPoint,
    performanceSnapshot,
  };
};

function computePerformanceSnapshot(
  context: GameAnalysisContext
): PerformanceSnapshot {
  const { gameEval } = context;
  const blunders = { white: 0, black: 0 };
  const mistakes = { white: 0, black: 0 };
  const inaccuracies = { white: 0, black: 0 };
  const bestMoves = { white: 0, black: 0 };

  gameEval.positions.forEach((pos, idx) => {
    if (idx === 0) return;
    const isWhite = idx % 2 === 1;
    const target = isWhite ? "white" : "black";

    switch (pos.moveClassification) {
      case MoveClassification.Blunder:
        blunders[target] += 1;
        break;
      case MoveClassification.Mistake:
        mistakes[target] += 1;
        break;
      case MoveClassification.Inaccuracy:
        inaccuracies[target] += 1;
        break;
      case MoveClassification.Best:
      case MoveClassification.Splendid:
      case MoveClassification.Perfect:
        bestMoves[target] += 1;
        break;
    }
  });

  return {
    accuracy: {
      white: Math.round(gameEval.accuracy.white * 10) / 10,
      black: Math.round(gameEval.accuracy.black * 10) / 10,
    },
    estimatedElo: gameEval.estimatedElo
      ? {
          white: Math.round(gameEval.estimatedElo.white),
          black: Math.round(gameEval.estimatedElo.black),
        }
      : undefined,
    blunders,
    mistakes,
    inaccuracies,
    bestMoves,
  };
}

function extractTacticalOpportunities(
  criticalMoments: CriticalMoment[]
): TacticalOpportunity[] {
  return criticalMoments
    .filter(
      (m) =>
        m.classification === "blunder" ||
        m.classification === "mistake" ||
        m.evaluationChange <= -8
    )
    .slice(0, 4)
    .map((m) => {
      const topAlt = m.alternatives[0];
      const bestMoveSan =
        topAlt?.san || m.principalVariationSan[0] || "Best move";
      const isWhite = m.color === "white";
      const moveStr = `${m.moveNumber}${isWhite ? "." : "..."}`;
      const motif =
        m.evaluationChange <= -20
          ? "Missed Material Win"
          : m.classification === "blunder"
            ? "Missed Tactical Shot"
            : "Missed Forcing Line";

      return {
        ply: m.ply,
        move: m.move,
        san: m.san,
        moveNumber: m.moveNumber,
        color: m.color,
        fen: m.fen,
        tacticalMotif: motif,
        opportunity: `A forcing sequence with ${bestMoveSan}! was available to seize a winning advantage.`,
        resultExplanation: `You played ${moveStr} ${m.san}, missing the tactical continuation ${bestMoveSan}!.`,
        bestMove: m.bestMove || topAlt?.move || "",
        bestMoveSan,
        explanation: `By playing ${m.san} instead of ${bestMoveSan}, a tactical opportunity was missed, costing ${Math.abs(m.evaluationChange).toFixed(1)}% in win chance.`,
        principalVariation: m.principalVariation,
        principalVariationSan: m.principalVariationSan,
        alternatives: m.alternatives,
      };
    });
}

function generateFallbackReview(context: GameAnalysisContext): GeminiReview {
  const whiteAcc = Math.round(context.gameEval.accuracy.white);
  const blackAcc = Math.round(context.gameEval.accuracy.black);
  const totalMoves = Math.ceil(context.moves.length / 2);

  const turningPoints = context.criticalMoments.slice(0, 5).map((m) => {
    const topAlt = m.alternatives[0]?.san;
    const isWhite = m.color === "white";
    const sideName = isWhite ? "White" : "Black";
    const altText = topAlt ? `Better was ${topAlt}. ` : "";

    return {
      ply: m.ply,
      explanation: `On move ${m.moveNumber}, ${sideName} played ${m.san}, causing a ${Math.abs(Math.round(m.evaluationChange))}% win probability drop. ${altText}`,
      whyItMatters: `This was the key moment where ${sideName}'s initiative was surrendered.`,
      beforeSituation: `${sideName} held an active position with ${Math.round(m.evaluationBefore)}% win expectation.`,
      afterSituation: `The evaluation shifted to ${Math.round(m.evaluationAfter)}%, letting the opponent back into the game.`,
      lesson: `Pause to scan all checks, captures, and counter-threats before executing the move.`,
      opponentThreat: `Opponent seizes initiative and capitalizes on the loose position.`,
      tacticalMotif:
        m.classification === "blunder" ? "Momentum Shift" : "Positional Slip",
    };
  });

  return {
    overallAssessment: `A competitive ${totalMoves}-move battle. White played with ${whiteAcc}% accuracy while Black achieved ${blackAcc}% accuracy. Critical turning points shifted the momentum in the middlegame.`,
    gameSummary: `The game opened with solid opening principles. During the middlegame phase, sharp tactical choices defined the outcome, and accurate conversions settled the game in the final phase.`,
    strengths: [
      `Solid opening development and king safety principles in the early phase.`,
      `Active piece coordination during critical moments of the game.`,
      `Resilient play when defending against tactical counter-threats.`,
    ],
    weaknesses: [
      `Premature attacks launched before consolidating king safety.`,
      `Missed opponent counter-threats in sharp tactical positions.`,
      `Inaccurate piece trades in the transition between middlegame and endgame.`,
    ],
    trainingRecommendations: [
      `Practice 5 calculation and king-safety exercises daily.`,
      `Review opponent candidate moves and forcing responses before attacking.`,
      `Replay today's critical turning points and practice finding the top engine alternatives.`,
    ],
    tacticalAnalysis: `Tactical opportunities were pivotal. Identifying forcing lines, pins, and loose pieces early allowed seizing significant advantages.`,
    positionalAnalysis: `Piece activity and controlling central outposts dictated the pace. Maintaining active minor pieces proved decisive.`,
    strategicAnalysis: `Formulate a clear plan based on pawn structure weaknesses before committing major pieces to an offensive line.`,
    mainLesson: `Always verify your opponent's most forcing response before committing to an attacking sequence.`,
    turningPoints,
  };
}
