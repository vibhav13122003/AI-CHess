import { GameEval } from "./eval";

export type PracticeSource = "turning-point" | "tactic";

export interface CriticalMoment {
  ply: number;
  move: string;
  san: string;
  moveNumber: number;
  color: "white" | "black";
  fen: string;
  evaluationBefore: number;
  evaluationAfter: number;
  evaluationChange: number;
  bestMove?: string;
  principalVariation: string[];
  principalVariationSan: string[];
  alternatives: Array<{ move: string; san: string; score?: number }>;
  classification?: string;
}

export interface TurningPoint extends CriticalMoment {
  whyItMatters: string;
  beforeSituation: string;
  afterSituation: string;
  lesson: string;
  explanation: string;
  opponentThreat?: string;
  tacticalMotif?: string;
}

export interface TacticalOpportunity {
  ply: number;
  move: string;
  san: string;
  moveNumber: number;
  color: "white" | "black";
  fen: string;
  tacticalMotif: string;
  opportunity: string;
  resultExplanation: string;
  bestMove: string;
  bestMoveSan: string;
  explanation: string;
  principalVariation: string[];
  principalVariationSan: string[];
  alternatives: Array<{ move: string; san: string; score?: number }>;
}

export interface PracticeAttempt {
  from: string;
  to: string;
  promotion?: string;
  san: string;
  uci: string;
}

export interface PracticeContext {
  source: PracticeSource;
  ply: number;
  moveNumber: number;
  color: "white" | "black";
  fen: string;
  playedSan: string;
  playedUci?: string;
  bestMove: string;
  bestMoveSan: string;
  evaluationBefore: number;
  evaluationAfter: number;
  evaluationChange: number;
  principalVariationSan: string[];
  principalVariation?: string[];
  alternatives: Array<{ move: string; san: string; score?: number }>;
  whyItMatters?: string;
  beforeSituation?: string;
  afterSituation?: string;
  lesson?: string;
  opponentThreat?: string;
  tacticalMotif?: string;
  opportunity?: string;
  resultExplanation?: string;
}

export interface PracticeCheckResult {
  verdict: "best" | "alternative" | "inaccurate" | "mistake" | "blunder";
  title: string;
  yourMove: string;
  explanation: string;
  betterMove?: string;
  whyBetter?: string;
  tacticalIdea?: string;
  evalImpact?: string;
  coachingInsight: string;
}

export interface PracticeState {
  isActive: boolean;
  context: PracticeContext;
  sourcePgn: string;
  savedPly: number;
  attemptedMove?: PracticeAttempt;
  status: "ready" | "attempted" | "checked" | "solution";
  checkResult?: PracticeCheckResult;
}

export interface GameAnalysisContext {
  pgn: string;
  moves: string[];
  fens: string[];
  gameEval: GameEval;
  criticalMoments: CriticalMoment[];
}

export interface ReviewSection {
  title: string;
  content: string;
}

export interface PerformanceSnapshot {
  accuracy: { white: number; black: number };
  estimatedElo?: { white: number; black: number };
  blunders: { white: number; black: number };
  mistakes: { white: number; black: number };
  inaccuracies: { white: number; black: number };
  bestMoves: { white: number; black: number };
}

export interface FinalGameReview {
  overallAssessment: string;
  gameSummary: string;
  turningPoints: TurningPoint[];
  tacticalOpportunities?: TacticalOpportunity[];
  strengths: string[];
  weaknesses: string[];
  trainingRecommendations: string[];
  tacticalAnalysis: ReviewSection;
  positionalAnalysis: ReviewSection;
  strategicAnalysis: ReviewSection;
  mainLesson: string;
  biggestTurningPoint?: TurningPoint;
  performanceSnapshot?: PerformanceSnapshot;
}
