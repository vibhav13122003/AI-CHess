import { FinalGameReview, GameAnalysisContext } from "@/types/ai";
import { generateStructured, reviewSchema } from "./llm/geminiClient";

interface GeminiReview {
  overallAssessment: string; gameSummary: string; strengths: string[]; weaknesses: string[];
  trainingRecommendations: string[]; tacticalAnalysis: string; positionalAnalysis: string;
  strategicAnalysis: string; mainLesson: string;
  turningPoints: Array<{ ply: number; explanation: string; lesson: string; whatYouMissed?: string; opponentThreat?: string; tacticalMotif?: string; category?: string }>;
}

export const orchestrateGameReview = async (context: GameAnalysisContext): Promise<FinalGameReview> => {
  const evidence = JSON.stringify({ criticalMoments: context.criticalMoments });
  const prompt = `You are a precise chess coach. Stockfish evidence is authoritative. Every candidate contains the exact played SAN move, move number, side, evaluation change, best move, alternatives and PV in SAN. Never mention a move, move number, tactic, threat, category, or continuation absent from this evidence. Do not claim a tactical motif or opponent threat unless the supplied PV directly supports it; otherwise omit that optional field. Write short concrete explanations (maximum 45 words per field), one actionable main lesson, and at most five turning points by their exact ply. Evidence: ${evidence}`;
  const review = await generateStructured<GeminiReview>(prompt, reviewSchema);
  const moments = new Map(context.criticalMoments.map((moment) => [moment.ply, moment]));
  return {
    overallAssessment: review.overallAssessment, gameSummary: review.gameSummary, mainLesson: review.mainLesson,
    strengths: review.strengths, weaknesses: review.weaknesses,
    trainingRecommendations: review.trainingRecommendations,
    tacticalAnalysis: { title: "Tactical analysis", content: review.tacticalAnalysis },
    positionalAnalysis: { title: "Positional analysis", content: review.positionalAnalysis },
    strategicAnalysis: { title: "Strategic analysis", content: review.strategicAnalysis },
    turningPoints: review.turningPoints.slice(0, 5).flatMap((point) => {
      const moment = moments.get(point.ply);
      return moment ? [{ ...moment, ...point }] : [];
    }),
  };
};
