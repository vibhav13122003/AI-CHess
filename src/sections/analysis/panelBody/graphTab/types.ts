import { MoveClassification } from "@/types/enums";
import { PracticeContext } from "@/types/ai";

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
  evalBeforeLabel?: string;
  evalAfterLabel?: string;
  evalDiff?: number;
  explanation?: string;
  betterMoveSan?: string;
  fen?: string;
  uci?: string;
  practiceContext?: PracticeContext;
}

export type GraphFilterOption =
  | "all"
  | "turningPoints"
  | "blunders"
  | "mistakes"
  | "inaccuracies"
  | "tactics"
  | "bestMoves";

export interface PhaseStats {
  phase: GamePhase;
  title: string;
  moveRange: string;
  startPly: number;
  endPly: number;
  totalMoves: number;
  accuracyWhite: number;
  accuracyBlack: number;
  bestMovesWhite: number;
  bestMovesBlack: number;
  inaccuraciesWhite: number;
  inaccuraciesBlack: number;
  mistakesWhite: number;
  mistakesBlack: number;
  blundersWhite: number;
  blundersBlack: number;
  narrative: string;
}

export interface GameStorySummary {
  opening: PhaseStats;
  middlegame: PhaseStats;
  endgame?: PhaseStats;
  biggestSwing?: ChartItemData;
  tacticalErrorsCount: number;
  positionalErrorsCount: number;
  takeaways: string[];
}
