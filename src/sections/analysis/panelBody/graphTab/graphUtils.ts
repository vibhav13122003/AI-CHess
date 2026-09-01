import { Chess } from "chess.js";
import { GameEval } from "@/types/eval";
import { MoveClassification } from "@/types/enums";
import { formatUciPv, getLineEvalLabel } from "@/lib/chess";
import { getPositionWinPercentage } from "@/lib/engine/helpers/winPercentage";
import {
  ChartItemData,
  GamePhase,
  GameStorySummary,
  PhaseStats,
} from "./types";
import { PracticeContext } from "@/types/ai";

/**
 * Counts minor/major piece values from a FEN string to detect endgame
 */
function countPieceMaterial(fen: string): {
  whiteMaterial: number;
  blackMaterial: number;
} {
  const piecePlacement = fen.split(" ")[0] || "";
  let whiteMaterial = 0;
  let blackMaterial = 0;

  for (const char of piecePlacement) {
    switch (char) {
      case "Q":
        whiteMaterial += 9;
        break;
      case "R":
        whiteMaterial += 5;
        break;
      case "B":
      case "N":
        whiteMaterial += 3;
        break;
      case "q":
        blackMaterial += 9;
        break;
      case "r":
        blackMaterial += 5;
        break;
      case "b":
      case "n":
        blackMaterial += 3;
        break;
    }
  }

  return { whiteMaterial, blackMaterial };
}

/**
 * Detects opening, middlegame, and endgame boundary plies from game FENs
 */
export function detectGamePhaseBoundaries(
  fens: string[],
  bookLength = 0
): { openingEndPly: number; endgameStartPly: number | null } {
  const totalPlies = fens.length;
  if (totalPlies <= 1) {
    return { openingEndPly: 0, endgameStartPly: null };
  }

  // Opening boundary: max of book length and move 10 (ply 20), capped at ply 30
  const openingEndPly = Math.min(
    Math.max(bookLength, 16),
    Math.min(28, totalPlies - 1)
  );

  let endgameStartPly: number | null = null;

  for (let i = openingEndPly; i < totalPlies; i++) {
    const { whiteMaterial, blackMaterial } = countPieceMaterial(fens[i]);
    const fen = fens[i];
    const hasWhiteQueen = fen.split(" ")[0].includes("Q");
    const hasBlackQueen = fen.split(" ")[0].includes("q");

    // Endgame condition: both queens gone, or total non-pawn material per side <= 13 (e.g. Rook + Minor piece)
    if (
      (!hasWhiteQueen && !hasBlackQueen) ||
      (whiteMaterial <= 13 && blackMaterial <= 13) ||
      whiteMaterial + blackMaterial <= 22
    ) {
      endgameStartPly = i;
      break;
    }
  }

  return { openingEndPly, endgameStartPly };
}

/**
 * Converts a raw eval to a graph Y value from 0 to 20 (10 is equal)
 */
export function evalToGraphValue(line?: {
  cp?: number;
  mate?: number;
}): number {
  if (!line) return 10;
  if (line.mate !== undefined) {
    return line.mate > 0 ? 19.5 : 0.5;
  }
  if (line.cp !== undefined) {
    // Range -10 pawns to +10 pawns mapped to 0..20
    const clampedCp = Math.max(Math.min(line.cp / 100, 10), -10);
    return clampedCp + 10;
  }
  return 10;
}

/**
 * Build chart dataset from GameEval and game history
 */
export function buildChartDataset(
  game: Chess,
  gameEval: GameEval,
  bookLength = 0
): {
  chartData: ChartItemData[];
  openingEndPly: number;
  endgameStartPly: number | null;
  biggestSwing?: ChartItemData;
} {
  const verboseMoves = game.history({ verbose: true });
  const positions = gameEval.positions;
  const fens: string[] = [];

  // Reconstruct FEN list
  const tempGame = new Chess();
  fens.push(tempGame.fen());
  for (const move of verboseMoves) {
    tempGame.move(move);
    fens.push(tempGame.fen());
  }

  const { openingEndPly, endgameStartPly } = detectGamePhaseBoundaries(
    fens,
    bookLength
  );

  let biggestSwingItem: ChartItemData | undefined;
  let maxAbsSwing = 0;

  const chartData: ChartItemData[] = positions.map((pos, index) => {
    const line = pos.lines[0];
    const graphValue = evalToGraphValue(line);
    const move = verboseMoves[index - 1];
    const isWhite = index % 2 === 1;
    const moveNumber = Math.ceil(index / 2);

    let phase: GamePhase = "opening";
    if (endgameStartPly !== null && index >= endgameStartPly) {
      phase = "endgame";
    } else if (index > openingEndPly) {
      phase = "middlegame";
    }

    let isTurningPoint = false;
    let isMissedTactic = false;
    let evalDiff = 0;
    let evalBeforeLabel = "0.0";
    let evalAfterLabel = "0.0";
    let explanation = "";
    let betterMoveSan: string | undefined;
    let practiceContext: PracticeContext | undefined;

    if (index > 0) {
      const prevPos = positions[index - 1];
      const prevLine = prevPos?.lines[0];
      evalBeforeLabel = prevLine
        ? getLineEvalLabel({ cp: prevLine.cp, mate: prevLine.mate })
        : "0.0";
      evalAfterLabel = line
        ? getLineEvalLabel({ cp: line.cp, mate: line.mate })
        : "0.0";

      const winBefore = getPositionWinPercentage(prevPos);
      const winAfter = getPositionWinPercentage(pos);
      const winChange = (winAfter - winBefore) * (isWhite ? 1 : -1);
      evalDiff = winChange;

      // Extract better move
      const bestMoveUci = prevPos?.bestMove || prevLine?.pv?.[0];
      if (bestMoveUci && fens[index - 1]) {
        try {
          const testBoard = new Chess(fens[index - 1]);
          const pvSan = testBoard.move({
            from: bestMoveUci.slice(0, 2) as never,
            to: bestMoveUci.slice(2, 4) as never,
            promotion: bestMoveUci[4],
          })?.san;
          betterMoveSan = pvSan;
        } catch {
          // Fallback
        }
      }

      // Check if Turning Point
      if (
        winChange <= -12 ||
        (pos.moveClassification === MoveClassification.Blunder &&
          winChange <= -8)
      ) {
        isTurningPoint = true;
      }

      // Check if Missed Tactic
      if (
        (pos.moveClassification === MoveClassification.Blunder ||
          pos.moveClassification === MoveClassification.Mistake) &&
        Math.abs(winChange) >= 15
      ) {
        isMissedTactic = true;
      }

      // Track Biggest Swing
      if (Math.abs(winChange) > maxAbsSwing && index > 0) {
        maxAbsSwing = Math.abs(winChange);
      }

      if (isTurningPoint) {
        explanation = `Advantage shifted by ${Math.abs(winChange).toFixed(0)}% in win probability.`;
      } else if (pos.moveClassification === MoveClassification.Mistake) {
        explanation = "Conceded positional ground or allowed counterplay.";
      } else if (pos.moveClassification === MoveClassification.Blunder) {
        explanation = "A critical blunder that gave away the advantage.";
      } else if (pos.moveClassification === MoveClassification.Inaccuracy) {
        explanation = "A slight inaccuracy that loosened piece coordination.";
      }

      // Build Practice Context
      const prevFen = fens[index - 1];
      if (
        prevFen &&
        move &&
        (isTurningPoint ||
          isMissedTactic ||
          pos.moveClassification === MoveClassification.Blunder)
      ) {
        const pvFormatted = prevLine?.pv
          ? formatUciPv(prevFen, prevLine.pv)
          : [];
        const pvSanList: string[] = [];
        try {
          const b = new Chess(prevFen);
          for (const u of pvFormatted) {
            const m = b.move({
              from: u.slice(0, 2) as never,
              to: u.slice(2, 4) as never,
              promotion: u[4],
            });
            if (m) pvSanList.push(m.san);
          }
        } catch {
          // ignore
        }

        practiceContext = {
          source: isMissedTactic ? "tactic" : "turning-point",
          ply: index,
          moveNumber,
          color: isWhite ? "white" : "black",
          fen: prevFen,
          playedSan: move.san,
          playedUci: move.from + move.to + (move.promotion || ""),
          bestMove: bestMoveUci || "",
          bestMoveSan: betterMoveSan || "Best move",
          evaluationBefore: winBefore,
          evaluationAfter: winAfter,
          evaluationChange: winChange,
          principalVariation: pvFormatted,
          principalVariationSan: pvSanList,
          alternatives: prevPos.lines.slice(0, 3).map((l) => ({
            move: l.pv?.[0] || "",
            san: l.pv?.[0] ? betterMoveSan || l.pv[0] : "",
            score: l.cp,
          })),
          whyItMatters: explanation,
          opportunity: isMissedTactic
            ? "A concrete forcing tactical sequence was available."
            : undefined,
          lesson: isMissedTactic
            ? "Scan forcing checks, captures, and opponent loose pieces first."
            : "Keep king safety and piece coordination solid at critical moments.",
        };
      }
    }

    const itemData: ChartItemData = {
      moveNb: index,
      value: graphValue,
      cp: line?.cp,
      mate: line?.mate,
      moveClassification: pos.moveClassification,
      san: move?.san,
      color: index === 0 ? undefined : isWhite ? "w" : "b",
      moveNumber: index === 0 ? 0 : moveNumber,
      phase,
      isTurningPoint,
      isMissedTactic,
      evalBeforeLabel,
      evalAfterLabel,
      evalDiff,
      explanation,
      betterMoveSan,
      fen: fens[index],
      uci: move ? move.from + move.to + (move.promotion || "") : undefined,
      practiceContext,
    };

    if (Math.abs(evalDiff) === maxAbsSwing && index > 0) {
      biggestSwingItem = itemData;
    }

    return itemData;
  });

  return {
    chartData,
    openingEndPly,
    endgameStartPly,
    biggestSwing: biggestSwingItem,
  };
}

/**
 * Computes phase-by-phase performance statistics and narrative
 */
export function computeGameStory(
  chartData: ChartItemData[],
  openingEndPly: number,
  endgameStartPly: number | null,
  openingName?: string
): GameStorySummary {
  const computePhaseStats = (
    phase: GamePhase,
    start: number,
    end: number,
    title: string
  ): PhaseStats => {
    const items = chartData
      .slice(start, end + 1)
      .filter((item) => item.moveNb > 0);
    const whiteItems = items.filter((item) => item.color === "w");
    const blackItems = items.filter((item) => item.color === "b");

    const countClass = (list: ChartItemData[], cls: MoveClassification) =>
      list.filter((item) => item.moveClassification === cls).length;

    // Estimate accuracy from classification scores
    const calcAcc = (list: ChartItemData[]) => {
      if (!list.length) return 85;
      let totalPoints = 0;
      for (const item of list) {
        switch (item.moveClassification) {
          case MoveClassification.Splendid:
          case MoveClassification.Perfect:
          case MoveClassification.Best:
          case MoveClassification.Opening:
            totalPoints += 100;
            break;
          case MoveClassification.Excellent:
          case MoveClassification.Forced:
            totalPoints += 90;
            break;
          case MoveClassification.Okay:
            totalPoints += 75;
            break;
          case MoveClassification.Inaccuracy:
            totalPoints += 50;
            break;
          case MoveClassification.Mistake:
            totalPoints += 25;
            break;
          case MoveClassification.Blunder:
            totalPoints += 0;
            break;
          default:
            totalPoints += 80;
        }
      }
      return Math.round(totalPoints / list.length);
    };

    const startMove = Math.max(1, Math.ceil(start / 2));
    const endMove = Math.ceil(end / 2);
    const moveRange = `Moves ${startMove}–${endMove}`;

    const blundersW = countClass(whiteItems, MoveClassification.Blunder);
    const mistakesW = countClass(whiteItems, MoveClassification.Mistake);
    const inaccuraciesW = countClass(whiteItems, MoveClassification.Inaccuracy);
    const bestW =
      countClass(whiteItems, MoveClassification.Best) +
      countClass(whiteItems, MoveClassification.Splendid);

    const blundersB = countClass(blackItems, MoveClassification.Blunder);
    const mistakesB = countClass(blackItems, MoveClassification.Mistake);
    const inaccuraciesB = countClass(blackItems, MoveClassification.Inaccuracy);
    const bestB =
      countClass(blackItems, MoveClassification.Best) +
      countClass(blackItems, MoveClassification.Splendid);

    let narrative = "";
    if (phase === "opening") {
      const name = openingName || "Standard Opening";
      narrative = `${name}. Both sides completed initial piece development.`;
      if (blundersW + blundersB + mistakesW + mistakesB === 0) {
        narrative += " Solid theoretical play with balanced chances.";
      } else {
        narrative += " Early tactical friction created immediate imbalances.";
      }
    } else if (phase === "middlegame") {
      const totalErrors = blundersW + blundersB + mistakesW + mistakesB;
      if (totalErrors > 3) {
        narrative =
          "Sharp tactical battle with multiple momentum swings and tactical opportunities.";
      } else if (totalErrors > 0) {
        narrative =
          "Strategic maneuvering where key decisions shaped the piece activity and king safety.";
      } else {
        narrative =
          "Controlled positional struggle with accurate piece coordination on both sides.";
      }
    } else {
      narrative =
        "Pieces simplified into the technical conversion phase where precision decided the outcome.";
    }

    return {
      phase,
      title,
      moveRange,
      startPly: start,
      endPly: end,
      totalMoves: items.length,
      accuracyWhite: calcAcc(whiteItems),
      accuracyBlack: calcAcc(blackItems),
      bestMovesWhite: bestW,
      bestMovesBlack: bestB,
      inaccuraciesWhite: inaccuraciesW,
      inaccuraciesBlack: inaccuraciesB,
      mistakesWhite: mistakesW,
      mistakesBlack: mistakesB,
      blundersWhite: blundersW,
      blundersBlack: blundersB,
      narrative,
    };
  };

  const totalPlies = chartData.length - 1;
  const openingStats = computePhaseStats(
    "opening",
    1,
    openingEndPly,
    "Opening"
  );

  const middlegameEnd =
    endgameStartPly !== null ? endgameStartPly - 1 : totalPlies;
  const middlegameStats = computePhaseStats(
    "middlegame",
    openingEndPly + 1,
    Math.max(openingEndPly + 1, middlegameEnd),
    "Middlegame"
  );

  let endgameStats: PhaseStats | undefined;
  if (endgameStartPly !== null && endgameStartPly < totalPlies) {
    endgameStats = computePhaseStats(
      "endgame",
      endgameStartPly,
      totalPlies,
      "Endgame"
    );
  }

  // Count tactical vs positional errors
  let tacticalErrorsCount = 0;
  let positionalErrorsCount = 0;

  for (const item of chartData) {
    if (
      item.isMissedTactic ||
      (item.moveClassification === MoveClassification.Blunder &&
        Math.abs(item.evalDiff || 0) >= 15)
    ) {
      tacticalErrorsCount++;
    } else if (
      item.moveClassification === MoveClassification.Inaccuracy ||
      item.moveClassification === MoveClassification.Mistake
    ) {
      positionalErrorsCount++;
    }
  }

  // Formulate key takeaways
  const takeaways: string[] = [];
  if (tacticalErrorsCount > 2) {
    takeaways.push(
      "Calculate forcing checks, captures, and threats before committing to quiet moves."
    );
  }
  if (middlegameStats.blundersWhite + middlegameStats.blundersBlack > 1) {
    takeaways.push(
      "Prioritize king safety and piece coordination during complex middlegame transitions."
    );
  }
  if (openingStats.inaccuraciesWhite + openingStats.inaccuraciesBlack > 2) {
    takeaways.push(
      "Develop knights and bishops toward active squares before initiating central pawn breaks."
    );
  }
  if (takeaways.length < 2) {
    takeaways.push(
      "Convert advantages patiently without allowing unnecessary counterplay."
    );
  }

  return {
    opening: openingStats,
    middlegame: middlegameStats,
    endgame: endgameStats,
    tacticalErrorsCount,
    positionalErrorsCount,
    takeaways: takeaways.slice(0, 3),
  };
}
