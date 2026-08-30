import { Move } from "chess.js";
import { EngineName, MoveClassification } from "./enums";

export interface PositionEval {
  bestMove?: string;
  moveClassification?: MoveClassification;
  /** True when the played move is present in the local ECO opening book. */
  isBookMove?: boolean;
  /** ECO code of the deepest opening-book position reached, e.g. C60. */
  eco?: string;
  opening?: string;
  lines: LineEval[];
}

export interface LineEval {
  pv: string[];
  cp?: number;
  mate?: number;
  depth: number;
  multiPv: number;
}

export interface Accuracy {
  white: number;
  black: number;
}

export interface EstimatedElo {
  white: number;
  black: number;
}

export interface EngineSettings {
  engine: EngineName;
  depth: number;
  multiPv: number;
  date: string;
}

export interface GameEval {
  positions: PositionEval[];
  accuracy: Accuracy;
  estimatedElo?: EstimatedElo;
  settings: EngineSettings;
}

export interface EvaluatePositionWithUpdateParams {
  fen: string;
  depth?: number;
  multiPv?: number;
  setPartialEval?: (positionEval: PositionEval) => void;
}

export interface CurrentPosition {
  lastMove?: Move;
  eval?: PositionEval;
  lastEval?: PositionEval;
  currentMoveIdx?: number;
  eco?: string;
  opening?: string;
}

export interface EvaluateGameParams {
  fens: string[];
  uciMoves: string[];
  openingName?: string;
  depth?: number;
  multiPv?: number;
  setEvaluationProgress?: (value: number) => void;
  playersRatings?: { white?: number; black?: number };
  workersNb?: number;
}

export interface SavedEval {
  bestMove?: string;
  lines: LineEval[];
  engine: EngineName;
}

export type SavedEvals = Record<string, SavedEval | undefined>;
