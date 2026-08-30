import ecoA from "./ecoA.json";
import ecoB from "./ecoB.json";
import ecoC from "./ecoC.json";
import ecoD from "./ecoD.json";
import ecoE from "./ecoE.json";

export interface EcoOpening {
  eco: string;
  name: string;
}

type EcoOpeningData = Record<string, EcoOpening>;

const normalizeFen = (fen: string): string => fen.split(" ").slice(0, 4).join(" ");

// The source data is keyed by full FENs, whose halfmove/fullmove counters are
// not relevant to an opening position. Indexing the position fields makes the
// lookup stable for every legal path that reaches the same position.
const createPositionBook = (): ReadonlyMap<string, EcoOpening> => {
  const book = new Map<string, EcoOpening>();

  for (const source of [ecoA, ecoB, ecoC, ecoD, ecoE] as EcoOpeningData[]) {
    for (const [fen, opening] of Object.entries(source)) {
      const key = normalizeFen(fen);
      const previous = book.get(key);
      if (!previous || opening.name.length >= previous.name.length) {
        book.set(key, { eco: opening.eco, name: opening.name });
      }
    }
  }

  return book;
};

const ecoOpeningBook = createPositionBook();

export const getEcoOpeningForFen = (fen: string): EcoOpening | undefined =>
  ecoOpeningBook.get(normalizeFen(fen));
