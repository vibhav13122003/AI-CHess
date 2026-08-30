import { GameEval } from "./eval";

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

export interface CoachingMoment {
  ply: number;
  explanation: string;
  lesson: string;
  whatYouMissed?: string;
  opponentThreat?: string;
  tacticalMotif?: string;
  category?: string;
}

export interface SavedPracticePosition {
  id: string;
  savedAt: string;
  pgn: string;
  moment: CriticalMoment & CoachingMoment;
  solvedCount: number;
}

export interface PracticeSession {
  moment: CriticalMoment & CoachingMoment;
  sourcePgn: string;
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

export interface FinalGameReview {
  overallAssessment: string;
  gameSummary: string;
  turningPoints: Array<CriticalMoment & CoachingMoment>;
  strengths: string[];
  weaknesses: string[];
  trainingRecommendations: string[];
  tacticalAnalysis: ReviewSection;
  positionalAnalysis: ReviewSection;
  strategicAnalysis: ReviewSection;
  mainLesson: string;
}
