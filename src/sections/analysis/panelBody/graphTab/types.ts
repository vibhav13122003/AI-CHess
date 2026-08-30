import { MoveClassification } from "@/types/enums";

export type GamePhase = "opening" | "middlegame" | "endgame";

export interface ChartItemData {
  moveNb: number;
  value: number;
  cp?: number;
  mate?: number;
  moveClassification?: MoveClassification;
  san?: string;
  color?: "w" | "b";
  moveNumber?: number;
  phase?: GamePhase;
  isTurningPoint?: boolean;
  isMissedTactic?: boolean;
  evalDiff?: number;
}

export interface GraphFilterState {
  blunders: boolean;
  mistakes: boolean;
  inaccuracies: boolean;
  turningPoints: boolean;
  bestMoves: boolean;
  missedTactics: boolean;
}

