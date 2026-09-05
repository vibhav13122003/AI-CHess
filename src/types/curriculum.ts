import { PracticeContext } from "@/types/ai";
import { MoveClassification } from "@/types/enums";

export type PatternCategory =
  | "tactics"
  | "king-safety"
  | "opening"
  | "endgame"
  | "piece-activity"
  | "back-rank"
  | "positional";

export type PatternTypeId =
  | "pinned-piece"
  | "hanging-piece"
  | "king-safety"
  | "back-rank"
  | "missed-tactic"
  | "opening-trap"
  | "trapped-piece"
  | "endgame-technique";

export interface KingSafetyEvidence {
  kingSquare: string;
  weakenedSquares?: string[];
  openFiles?: string[];
  openDiagonals?: string[];
  opponentAttackers?: number;
  evaluationDrop: number;
}

export interface EndgameEvidence {
  phase: "pawn-endgame" | "rook-endgame" | "minor-piece-endgame" | "queenless";
  materialSummary: string;
  kingActivity?: "active" | "passive";
  passedPawns?: number;
  evaluationBefore: number;
  evaluationAfter: number;
}

export interface OpeningEvidence {
  openingName?: string;
  ply: number;
  evaluationDrop: number;
  punishedIdea?: string;
}

export interface PieceActivityEvidence {
  piece: string;
  square: string;
  escapeSquaresCount: number;
  issue: "trapped" | "passive" | "overextended";
}

export interface BackRankEvidence {
  kingSquare: string;
  backRank: number;
  noLuft: boolean;
  threatMove?: string;
}

export interface PatternEvidence {
  piece: string;
  fromSquare: string;
  toSquare: string;
  isCapture: boolean;
  isCheck: boolean;
  winDropPercentage: number;
  centipawnDrop?: number;
  betterMoveSan: string;
  motifConfidence?: number;
  reason?: string;
  kingSafetyEvidence?: KingSafetyEvidence;
  endgameEvidence?: EndgameEvidence;
  openingEvidence?: OpeningEvidence;
  pieceActivityEvidence?: PieceActivityEvidence;
  backRankEvidence?: BackRankEvidence;
}

export interface PatternInstance {
  id: string;
  gameId: number;
  gameTitle: string;
  username?: string;
  playerColor: "white" | "black";
  moveColor: "white" | "black";
  gameDate?: string;
  openingName?: string;
  whitePlayer?: string;
  blackPlayer?: string;
  gameResult?: string;
  ply: number;
  moveNumber: number;
  color: "white" | "black";
  san: string;
  uci: string;
  fen: string;
  fenAfter?: string;
  moveClassification: MoveClassification;
  evaluationBefore: number;
  evaluationAfter: number;
  evaluationChange: number;
  evaluationBeforeCp?: number;
  evaluationAfterCp?: number;
  bestMove: string;
  bestMoveSan: string;
  principalVariation?: string[];
  principalVariationSan?: string[];
  explanation: string;
  category: PatternCategory;
  typeId?: PatternTypeId;
  evidence: PatternEvidence;
  practiceContext: PracticeContext;
}

export interface RecurringPatternGroup {
  typeId: PatternTypeId;
  category: PatternCategory;
  title: string;
  headline: string;
  insight: string;
  coachingTip: string;
  severity: "high" | "medium" | "low";
  confidence: "high" | "moderate" | "building";
  occurrencesCount: number;
  gamesCount: number;
  averageWinDrop: number;
  blundersCount: number;
  mistakesCount: number;
  instances: PatternInstance[];
}

export interface UserInsightItem {
  title: string;
  description: string;
  tag: string;
  severity?: "high" | "medium" | "low" | "positive";
  evidenceGamesCount: number;
}

export interface CrossGameAnalytics {
  phaseDistribution: {
    openingCount: number;
    openingPercent: number;
    middlegameCount: number;
    middlegamePercent: number;
    endgameCount: number;
    endgamePercent: number;
  };
  errorTypeDistribution: {
    tacticalCount: number;
    tacticalPercent: number;
    positionalCount: number;
    positionalPercent: number;
  };
  severityDistribution: {
    blunders: number;
    mistakes: number;
    inaccuracies: number;
  };
  userStrengths: UserInsightItem[];
  userWeaknesses: UserInsightItem[];
  userPerspectiveColor: "white" | "black" | "all";
  detectedPlayerName?: string;
}

export interface CurriculumSummary {
  totalSavedGames: number;
  identifiedGamesCount: number;
  whiteGamesCount: number;
  blackGamesCount: number;
  unknownIdentityGamesCount: number;
  evaluatedGamesCount: number;
  unevaluatedGamesCount: number;
  totalPatternsDetected: number;
  topWeakness?: RecurringPatternGroup;
  patterns: RecurringPatternGroup[];
  allInstances: PatternInstance[];
  analytics: CrossGameAnalytics;
}
