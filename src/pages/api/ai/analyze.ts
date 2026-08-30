import type { NextApiRequest, NextApiResponse } from "next";
import { extractGameAnalysisContext } from "@/lib/ai/extractGameAnalysisContext";
import { orchestrateGameReview } from "@/lib/ai/orchestrateGameReview";
import { GameEval } from "@/types/eval";

interface AnalyzeRequest { pgn: string; fens: string[]; moves: string[]; gameEval: GameEval }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { pgn, fens, moves, gameEval } = req.body as Partial<AnalyzeRequest>;
    if (!pgn || !fens || !moves || !gameEval) return res.status(400).json({ error: "Invalid analysis request" });
    const context = extractGameAnalysisContext(pgn, fens, moves, gameEval);
    return res.status(200).json(await orchestrateGameReview(context));
  } catch (error) {
    const apiError = error as { status?: number; message?: string };
    if (apiError.status === 403) {
      return res.status(401).json({ error: "Gemini rejected this API key. Create a new key in Google AI Studio, update GEMINI_API_KEY, and restart the server." });
    }
    if (apiError.status === 404) {
      return res.status(400).json({ error: "The configured Gemini model is unavailable. Set GEMINI_MODEL to a currently available model and restart the server." });
    }
    if (apiError.status === 429) {
      return res.status(429).json({ error: "Gemini rate limit reached. Please wait and try again." });
    }
    const message = error instanceof Error && error.message === "AI review is not configured" ? error.message : "Unable to generate AI review";
    return res.status(502).json({ error: message });
  }
}
