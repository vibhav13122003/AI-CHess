import { Chess } from "chess.js";
import { getEcoOpeningForFen } from "@/data/ecoOpeningBook";

export interface EcoBookDetails {
  eco?: string;
  opening?: string;
  prefixLength: number;
}

export const getOpeningNameFromHeaders = (
  headers: Record<string, string | undefined>
): string | undefined => {
  if (headers.Opening) return headers.Opening;
  if (headers.ECOName) return headers.ECOName;

  const ecoUrl = headers.ECOUrl?.trim();
  const slug = ecoUrl?.split("/").filter(Boolean).at(-1);
  return slug?.replace(/-/g, " ");
};

export const getEcoBookPrefixLength = (uciMoves: string[]): number =>
  getEcoBookDetailsForMoves(uciMoves).prefixLength;

export const getOpeningForMoves = (uciMoves: string[]): string | undefined =>
  getEcoBookDetailsForMoves(uciMoves).opening;

// A book entry is a known theory position, not merely a fixed move sequence.
// Playing the moves through chess.js and looking up the resulting FEN handles
// transpositions and uses the entire (12k+ position) ECO dataset.
export const getEcoBookDetailsForMoves = (
  uciMoves: string[]
): EcoBookDetails => {
  const chess = new Chess();
  let eco: string | undefined;
  let opening: string | undefined;
  let prefixLength = 0;

  for (const uciMove of uciMoves) {
    try {
      chess.move({
        from: uciMove.slice(0, 2),
        to: uciMove.slice(2, 4),
        promotion: uciMove[4],
      });
    } catch {
      break;
    }

    const bookOpening = getEcoOpeningForFen(chess.fen());
    if (!bookOpening) break;

    eco = bookOpening.eco;
    opening = bookOpening.name;
    prefixLength += 1;
  }

  return { eco, opening, prefixLength };
};
