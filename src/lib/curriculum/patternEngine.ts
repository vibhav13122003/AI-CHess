import { Chess, Square } from "chess.js";
import { Game } from "@/types/game";
import { MoveClassification } from "@/types/enums";
import { formatUciPv } from "@/lib/chess";

/**
 * Determines whether a searched username is White or Black for a given game.
 * Uses normalized string comparison (trimmed, case-insensitive).
 * Returns "unknown" if:
 * - username is missing or empty
 * - neither player matches
 * - both player names match ambiguously
 * - player headers are missing or generic placeholder "?"
 */
export const getPlayerColorForGame = (
  game: Game,
  username?: string
): "white" | "black" | "unknown" => {
  const normUser = (username || "").trim().toLowerCase();
  const rawWhite = (game?.white?.name || "").trim();
  const rawBlack = (game?.black?.name || "").trim();

  // If player headers are completely missing or placeholder
  if (!rawWhite || !rawBlack || rawWhite === "?" || rawBlack === "?") {
    return "unknown";
  }

  const white = rawWhite.toLowerCase();
  const black = rawBlack.toLowerCase();

  // If both player headers are identical, identity is ambiguous
  if (white === black) {
    return "unknown";
  }

  // 1. Direct match with provided username
  if (normUser) {
    const matchesWhite = white === normUser;
    const matchesBlack = black === normUser;

    if (matchesWhite && matchesBlack) return "unknown";
    if (matchesWhite) return "white";
    if (matchesBlack) return "black";
  }

  // 2. Explicit "You" (played against bot or local game in Chesskit)
  if (white === "you" && black !== "you") return "white";
  if (black === "you" && white !== "you") return "black";

  // 3. One side is Stockfish/Bot/AI/Computer and user is playing against bot
  const isWhiteBot =
    white.includes("stockfish") ||
    white.includes("computer") ||
    white.includes("bot");
  const isBlackBot =
    black.includes("stockfish") ||
    black.includes("computer") ||
    black.includes("bot");

  if (isBlackBot && !isWhiteBot) {
    if (!normUser || normUser === "you") return "white";
  }
  if (isWhiteBot && !isBlackBot) {
    if (!normUser || normUser === "you") return "black";
  }

  return "unknown";
};

import { getPositionWinPercentage } from "@/lib/engine/helpers/winPercentage";
import {
  BackRankEvidence,
  CrossGameAnalytics,
  CurriculumSummary,
  EndgameEvidence,
  KingSafetyEvidence,
  OpeningEvidence,
  PatternCategory,
  PatternEvidence,
  PatternInstance,
  PatternTypeId,
  PieceActivityEvidence,
  RecurringPatternGroup,
  UserInsightItem,
} from "@/types/curriculum";
import { PracticeContext } from "@/types/ai";

interface PatternMetadata {
  typeId: PatternTypeId;
  category: PatternCategory;
  title: string;
  headlineTemplate: (count: number, games: number) => string;
  insightTemplate: (count: number, games: number, opening?: string) => string;
  coachingTip: string;
}

const PATTERN_DEFINITIONS: Record<PatternTypeId, PatternMetadata> = {
  "pinned-piece": {
    typeId: "pinned-piece",
    category: "tactics",
    title: "Pinned Defenders & Exploitable Pins",
    headlineTemplate: (count, games) =>
      `Missed ${count} tactical opportunities involving pinned pieces across ${games} games`,
    insightTemplate: (count, games) =>
      `You've missed ${count} tactical opportunities involving pinned defenders or alignable pieces across ${games} games.`,
    coachingTip:
      "Look for defenders that cannot move without exposing a higher-value piece behind them, and apply direct pressure.",
  },
  "hanging-piece": {
    typeId: "hanging-piece",
    category: "tactics",
    title: "Loose & Undefended Pieces (LPDO)",
    headlineTemplate: (count, games) =>
      `Allowed ${count} loose piece concessions in ${games} games`,
    insightTemplate: (count, games) =>
      `You've left pieces undefended or overlooked loose opponent pieces ${count} times in ${games} different games.`,
    coachingTip:
      "Constantly perform 'Loose Piece Scanning' before every move: Loose Pieces Drop Off (LPDO).",
  },
  "king-safety": {
    typeId: "king-safety",
    category: "king-safety",
    title: "Exposed King & Weakened Pawn Shields",
    headlineTemplate: (count, games) =>
      `Repeated ${count} king safety vulnerabilities across ${games} games`,
    insightTemplate: (count, games) =>
      `You've repeated king-safety mistakes ${count} times in ${games} different games, creating severe defensive targets.`,
    coachingTip:
      "Prioritize securing your king shelter and eliminating open attacking diagonals before pushing central pawns.",
  },
  "back-rank": {
    typeId: "back-rank",
    category: "back-rank",
    title: "Back-Rank Vulnerabilities & Lack of Luft",
    headlineTemplate: (count, games) =>
      `Missed or conceded ${count} back-rank threats in ${games} games`,
    insightTemplate: (count, games) =>
      `Back-rank tactical threats or trapped rooks without luft created ${count} critical swings in ${games} games.`,
    coachingTip:
      "Create 'Luft' (breathing room for your king) before moving heavy rooks off the back rank.",
  },
  "missed-tactic": {
    typeId: "missed-tactic",
    category: "tactics",
    title: "Missed Forcing Sequences & Double Attacks",
    headlineTemplate: (count, games) =>
      `Missed ${count} decisive tactical opportunities across ${games} games`,
    insightTemplate: (count, games) =>
      `You've missed ${count} concrete forcing tactical continuations across ${games} games.`,
    coachingTip:
      "Calculate all checks, captures, and threats (CCT) before committing to a quiet developing move.",
  },
  "opening-trap": {
    typeId: "opening-trap",
    category: "opening",
    title: "Early Opening Inaccuracies & Traps",
    headlineTemplate: (count, games) =>
      `Encountered ${count} critical opening mistakes in ${games} games`,
    insightTemplate: (count, games, opening) =>
      opening
        ? `You ran into ${count} early tactical imbalances in ${games} games involving the ${opening}.`
        : `You conceded early opening advantages ${count} times in ${games} different games.`,
    coachingTip:
      "Develop minor pieces toward the center harmoniously and avoid moving the same piece multiple times in the opening.",
  },
  "trapped-piece": {
    typeId: "trapped-piece",
    category: "piece-activity",
    title: "Overextended & Trapped Major Pieces",
    headlineTemplate: (count, games) =>
      `Lost piece mobility or conceded ${count} trapped pieces in ${games} games`,
    insightTemplate: (count, games) =>
      `Pieces got overextended and harassed without retreat squares ${count} times in ${games} games.`,
    coachingTip:
      "Ensure queen and bishop incursions into enemy territory have guaranteed escape routes.",
  },
  "endgame-technique": {
    typeId: "endgame-technique",
    category: "endgame",
    title: "Endgame Conversion & Pawn Structure Slips",
    headlineTemplate: (count, games) =>
      `Conceded ${count} endgame winning chances in ${games} games`,
    insightTemplate: (count, games) =>
      `You let advantageous simplified positions slip ${count} times in ${games} technical endgames.`,
    coachingTip:
      "Activate your king immediately in the endgame and calculate pawn promotion races accurately.",
  },
};

interface ClassificationResult {
  typeId: PatternTypeId;
  confidence: number;
  reason: string;
  kingSafetyEvidence?: KingSafetyEvidence;
  endgameEvidence?: EndgameEvidence;
  openingEvidence?: OpeningEvidence;
  pieceActivityEvidence?: PieceActivityEvidence;
  backRankEvidence?: BackRankEvidence;
}

function findKingSquare(fen: string, color: "w" | "b"): string | null {
  const boardStr = fen.split(" ")[0];
  const target = color === "w" ? "K" : "k";
  const ranks = boardStr.split("/");
  for (let r = 0; r < 8; r++) {
    let file = 0;
    for (const char of ranks[r]) {
      if (/\d/.test(char)) {
        file += parseInt(char, 10);
      } else {
        if (char === target) {
          const fileLetter = String.fromCharCode(97 + file);
          const rankNum = 8 - r;
          return `${fileLetter}${rankNum}`;
        }
        file++;
      }
    }
  }
  return null;
}

function countMaterial(fen: string) {
  const boardStr = fen.split(" ")[0];
  const whiteQueens = (boardStr.match(/Q/g) || []).length;
  const blackQueens = (boardStr.match(/q/g) || []).length;
  const whiteRooks = (boardStr.match(/R/g) || []).length;
  const blackRooks = (boardStr.match(/r/g) || []).length;
  const whiteBishops = (boardStr.match(/B/g) || []).length;
  const blackBishops = (boardStr.match(/b/g) || []).length;
  const whiteKnights = (boardStr.match(/N/g) || []).length;
  const blackKnights = (boardStr.match(/n/g) || []).length;
  const whitePawns = (boardStr.match(/P/g) || []).length;
  const blackPawns = (boardStr.match(/p/g) || []).length;

  const totalNonPawns =
    whiteQueens +
    blackQueens +
    whiteRooks +
    blackRooks +
    whiteBishops +
    blackBishops +
    whiteKnights +
    blackKnights;

  return {
    whiteQueens,
    blackQueens,
    whiteRooks,
    blackRooks,
    whiteBishops,
    blackBishops,
    whiteKnights,
    blackKnights,
    whitePawns,
    blackPawns,
    totalNonPawns,
  };
}

function countPassedPawns(fen: string, playerColor: "w" | "b"): number {
  const boardStr = fen.split(" ")[0];
  const ranks = boardStr.split("/");
  const pawnChar = playerColor === "w" ? "P" : "p";
  const enemyPawnChar = playerColor === "w" ? "p" : "P";

  let passed = 0;
  for (let r = 0; r < 8; r++) {
    let file = 0;
    for (const char of ranks[r]) {
      if (/\d/.test(char)) {
        file += parseInt(char, 10);
      } else {
        if (char === pawnChar) {
          let hasEnemyInFront = false;
          for (let f = Math.max(0, file - 1); f <= Math.min(7, file + 1); f++) {
            const rankStart = playerColor === "w" ? 0 : r + 1;
            const rankEnd = playerColor === "w" ? r : 8;
            for (let checkR = rankStart; checkR < rankEnd; checkR++) {
              let checkFile = 0;
              for (const c of ranks[checkR]) {
                if (/\d/.test(c)) checkFile += parseInt(c, 10);
                else {
                  if (checkFile === f && c === enemyPawnChar) {
                    hasEnemyInFront = true;
                    break;
                  }
                  checkFile++;
                }
              }
              if (hasEnemyInFront) break;
            }
            if (hasEnemyInFront) break;
          }
          if (!hasEnemyInFront) passed++;
        }
        file++;
      }
    }
  }
  return passed;
}

/**
 * Deterministic chess geometry classification based on board state and factual evidence.
 * Priority order:
 * 1. opening trap (early opening-specific deviation / tactical punishment)
 * 2. endgame technique (clearly an endgame position with conversion/drawing slip)
 * 3. king safety (king directly exposed, shelter weakened, or under attack)
 * 4. back rank (king on rank 1/8 with pawn shield and no luft, heavy piece threat)
 * 5. trapped piece / piece activity (piece mobility <= 1 or overextended)
 * 6. hanging piece (undefended piece attacked and captured)
 * 7. pinned piece (absolute or relative pin)
 * 8. missed tactic (fallback for forcing tactical sequences)
 */
export function classifyMistakeByChessGeometry(
  ply: number,
  fenBefore: string,
  fenAfter: string,
  san: string,
  from: string,
  to: string,
  playerWinChange: number,
  classification: MoveClassification,
  bestMoveSan: string,
  opponentBestMoveUci?: string,
  openingName?: string,
  playerWinBefore: number = 50,
  playerWinAfter: number = 50
): ClassificationResult {
  const isWhite = ply % 2 === 1;
  const playerColor = isWhite ? "w" : "b";
  const mat = countMaterial(fenBefore);

  // 1. OPENING TRAP
  // Requirements: first 20 plies, significant eval loss, tactical or development deviation
  if (
    ply <= 20 &&
    (playerWinChange <= -15 || classification === MoveClassification.Blunder)
  ) {
    const isTacticalBlunder = classification === MoveClassification.Blunder;
    const isEarlyQueen = san.startsWith("Q") && ply <= 14;
    const hasOpeningContext = !!openingName || ply <= 16;
    const isDevMistake =
      bestMoveSan.startsWith("N") ||
      bestMoveSan.startsWith("B") ||
      bestMoveSan.startsWith("O-O") ||
      bestMoveSan === "d4" ||
      bestMoveSan === "e4" ||
      bestMoveSan === "d5" ||
      bestMoveSan === "e5";

    if (
      hasOpeningContext &&
      (isTacticalBlunder ||
        isEarlyQueen ||
        isDevMistake ||
        Math.abs(playerWinChange) >= 20)
    ) {
      return {
        typeId: "opening-trap",
        confidence: 0.9,
        reason: `Early opening tactical trap or development slip on move ${Math.ceil(ply / 2)}${openingName ? ` in the ${openingName}` : ""}.`,
        openingEvidence: {
          openingName,
          ply,
          evaluationDrop: Math.abs(playerWinChange),
          punishedIdea: `Deviated from sound opening development; engine recommended ${bestMoveSan}!`,
        },
      };
    }
  }

  // 2. ENDGAME TECHNIQUE
  // Requirements: clearly reduced material (queenless or <= 6 non-pawns), slip in conversion or drawing technique
  const isClearlyEndgame =
    mat.totalNonPawns <= 6 ||
    (mat.whiteQueens === 0 &&
      mat.blackQueens === 0 &&
      mat.totalNonPawns <= 8) ||
    (ply >= 34 && mat.totalNonPawns <= 7);

  if (isClearlyEndgame && (playerWinBefore >= 35 || playerWinChange <= -14)) {
    let phase:
      | "pawn-endgame"
      | "rook-endgame"
      | "minor-piece-endgame"
      | "queenless" = "queenless";
    if (mat.totalNonPawns === 0) {
      phase = "pawn-endgame";
    } else if (mat.whiteQueens === 0 && mat.blackQueens === 0) {
      if (
        mat.whiteBishops +
          mat.blackBishops +
          mat.whiteKnights +
          mat.blackKnights ===
        0
      ) {
        phase = "rook-endgame";
      } else if (mat.whiteRooks + mat.blackRooks === 0) {
        phase = "minor-piece-endgame";
      }
    }

    const passedPawns = countPassedPawns(fenBefore, playerColor);
    const kingSq = findKingSquare(fenBefore, playerColor);
    const fileNum = kingSq ? kingSq.charCodeAt(0) - 97 : 3;
    const rankNum = kingSq ? parseInt(kingSq[1], 10) : 4;
    const isKingActive =
      Math.abs(fileNum - 3.5) <= 1.5 && Math.abs(rankNum - 4.5) <= 1.5;

    return {
      typeId: "endgame-technique",
      confidence: 0.88,
      reason: `Technical endgame slip in ${phase.replace("-", " ")} (${mat.totalNonPawns} non-pawn pieces remaining).`,
      endgameEvidence: {
        phase,
        materialSummary: `${mat.totalNonPawns} non-pawn pieces remaining`,
        kingActivity: isKingActive ? "active" : "passive",
        passedPawns,
        evaluationBefore: Math.round(playerWinBefore),
        evaluationAfter: Math.round(playerWinAfter),
      },
    };
  }

  // 3. KING SAFETY
  // Requirements: moved/exposed king, weakened pawn shield, missed castling, or direct attack lines
  const kingSq = findKingSquare(fenBefore, playerColor);
  if (kingSq) {
    let isKingExposed = false;
    let kingIssue = "";

    // A) Moved pawn shield for castled king
    if (isWhite) {
      if (
        (kingSq === "g1" || kingSq === "h1") &&
        ["f2", "g2", "h2", "f3", "g3"].includes(from)
      ) {
        isKingExposed = true;
        kingIssue = `Weakened kingside pawn shield by pushing ${from}-${to}`;
      } else if (
        (kingSq === "c1" || kingSq === "b1") &&
        ["a2", "b2", "c2"].includes(from)
      ) {
        isKingExposed = true;
        kingIssue = `Weakened queenside pawn shelter by moving ${from}-${to}`;
      } else if (
        kingSq === "e1" &&
        ["f2", "d2"].includes(from) &&
        mat.totalNonPawns > 6
      ) {
        isKingExposed = true;
        kingIssue = `Opened dangerous diagonal toward uncastled king`;
      }
    } else {
      if (
        (kingSq === "g8" || kingSq === "h8") &&
        ["f7", "g7", "h7", "f6", "g6"].includes(from)
      ) {
        isKingExposed = true;
        kingIssue = `Weakened kingside pawn shield by pushing ${from}-${to}`;
      } else if (
        (kingSq === "c8" || kingSq === "b8") &&
        ["a7", "b7", "c7"].includes(from)
      ) {
        isKingExposed = true;
        kingIssue = `Weakened queenside pawn shelter by moving ${from}-${to}`;
      } else if (
        kingSq === "e8" &&
        ["f7", "d7"].includes(from) &&
        mat.totalNonPawns > 6
      ) {
        isKingExposed = true;
        kingIssue = `Opened dangerous diagonal toward uncastled king`;
      }
    }

    // B) Missed castling when opponent attacks
    if (
      !isKingExposed &&
      bestMoveSan.startsWith("O-O") &&
      !san.startsWith("O-O")
    ) {
      isKingExposed = true;
      kingIssue = `Delayed essential castling (${bestMoveSan} recommended), leaving king exposed`;
    }

    // C) Walked king into danger in middlegame
    if (
      !isKingExposed &&
      from === kingSq &&
      !san.startsWith("O-O") &&
      mat.totalNonPawns > 6
    ) {
      isKingExposed = true;
      kingIssue = `Moved king from ${from} to ${to} under heavy piece pressure`;
    }

    // D) King under check or opponent threatens king
    if (!isKingExposed) {
      try {
        const testAfter = new Chess(fenAfter);
        if (testAfter.isCheck() || san.includes("+") || san.includes("#")) {
          isKingExposed = true;
          kingIssue = `Conceded direct checking attack on king`;
        }
      } catch {}
    }

    if (isKingExposed && playerWinChange <= -14) {
      return {
        typeId: "king-safety",
        confidence: 0.88,
        reason: kingIssue || `Severe king safety vulnerability created.`,
        kingSafetyEvidence: {
          kingSquare: kingSq,
          evaluationDrop: Math.abs(playerWinChange),
        },
      };
    }
  }

  // 4. BACK-RANK WEAKNESS
  // Requirements: king on rank 1/8, pawn shield with no luft (0 escape squares to rank 2/7), heavy piece threats
  if (kingSq && (isWhite ? kingSq.endsWith("1") : kingSq.endsWith("8"))) {
    const oppHeavy = isWhite
      ? mat.blackRooks > 0 || mat.blackQueens > 0
      : mat.whiteRooks > 0 || mat.whiteQueens > 0;

    if (oppHeavy) {
      let noLuft = false;
      try {
        const testKingMoves = new Chess(fenBefore);
        const kMoves = testKingMoves.moves({
          square: kingSq as Square,
          verbose: true,
        });
        const forwardMoves = kMoves.filter((m) =>
          isWhite ? m.to.endsWith("2") : m.to.endsWith("7")
        );
        if (forwardMoves.length === 0) {
          noLuft = true;
        }
      } catch {}

      if (noLuft) {
        const isAbandoningBackRank =
          from.endsWith(isWhite ? "1" : "8") &&
          (san.startsWith("R") || san.startsWith("Q"));
        const opponentAttacksRank =
          opponentBestMoveUci &&
          (opponentBestMoveUci.endsWith(isWhite ? "1" : "8") ||
            opponentBestMoveUci.endsWith(isWhite ? "2" : "7"));
        const bestIsLuft =
          ["h3", "h6", "g3", "g6", "a3", "a6"].includes(bestMoveSan) ||
          bestMoveSan.startsWith("R1") ||
          bestMoveSan.startsWith("R8");

        if (
          (isAbandoningBackRank || opponentAttacksRank || bestIsLuft) &&
          playerWinChange <= -14
        ) {
          return {
            typeId: "back-rank",
            confidence: 0.92,
            reason: `King was boxed on the back rank behind pawn shield with no luft.`,
            backRankEvidence: {
              kingSquare: kingSq,
              backRank: isWhite ? 1 : 8,
              noLuft: true,
              threatMove: opponentBestMoveUci,
            },
          };
        }
      }
    }
  }

  // 5. TRAPPED PIECE / PIECE ACTIVITY
  // Requirements: piece on 'to' has <= 1 safe escape square, or deep incursion trapped
  try {
    const chessAfter = new Chess(fenAfter);
    const pieceOnTo = chessAfter.get(to as Square);
    if (
      pieceOnTo &&
      pieceOnTo.color === playerColor &&
      pieceOnTo.type !== "p" &&
      pieceOnTo.type !== "k"
    ) {
      const legalMoves = chessAfter.moves({
        square: to as Square,
        verbose: true,
      });
      const targetRank = parseInt(to[1], 10);
      const isDeepIncursion = isWhite ? targetRank >= 5 : targetRank <= 4;
      const isAttackedByOpponent =
        opponentBestMoveUci && opponentBestMoveUci.slice(2, 4) === to;

      if (
        (legalMoves.length <= 1 &&
          (isAttackedByOpponent || Math.abs(playerWinChange) >= 20)) ||
        (isDeepIncursion &&
          isAttackedByOpponent &&
          Math.abs(playerWinChange) >= 18)
      ) {
        const pieceName =
          pieceOnTo.type === "q"
            ? "Queen"
            : pieceOnTo.type === "r"
              ? "Rook"
              : pieceOnTo.type === "b"
                ? "Bishop"
                : "Knight";
        return {
          typeId: "trapped-piece",
          confidence: 0.88,
          reason: `${pieceName} on ${to} was overextended or trapped with only ${legalMoves.length} escape square(s).`,
          pieceActivityEvidence: {
            piece: pieceOnTo.type,
            square: to,
            escapeSquaresCount: legalMoves.length,
            issue: "trapped",
          },
        };
      }
    }
  } catch {}

  // 6. HANGING PIECE (LPDO)
  // Requirements: friendly piece undefended and captured/attacked by opponent
  if (opponentBestMoveUci && opponentBestMoveUci.length >= 4) {
    const oppTarget = opponentBestMoveUci.slice(2, 4);
    try {
      const chess = new Chess(fenBefore);
      const pieceOnTarget = chess.get(oppTarget as Square);
      if (
        pieceOnTarget &&
        pieceOnTarget.color === playerColor &&
        Math.abs(playerWinChange) >= 18
      ) {
        return {
          typeId: "hanging-piece",
          confidence: 0.88,
          reason: `Friendly ${pieceOnTarget.type.toUpperCase()} on ${oppTarget} was left loose or insufficiently defended.`,
        };
      }
    } catch {}
  }

  // 7. PINNED PIECE
  // Requirements: piece was pinned and moving it exposes king or higher piece
  try {
    const testChess = new Chess(fenBefore);
    const movedPiece = testChess.get(from as Square);
    if (movedPiece && movedPiece.color === playerColor) {
      testChess.remove(from as Square);
      if (testChess.isCheck()) {
        return {
          typeId: "pinned-piece",
          confidence: 0.95,
          reason: `The piece on ${from} was pinned to your King. Moving or exposing it conceded decisive evaluation.`,
        };
      }
    }
  } catch {}

  // 8. MISSED TACTIC (Fallback)
  return {
    typeId: "missed-tactic",
    confidence: 0.75,
    reason: `Missed forcing tactical continuation ${bestMoveSan}! which offered decisive advantage.`,
  };
}

export interface AnalysisOptions {
  username?: string;
  perspective?: "auto" | "white" | "black";
  storedUsernames?: string[];
}

/**
 * Analyzes saved games in IndexedDB, extracting ONLY the user's mistakes,
 * computing factual cross-game patterns, strengths, and weaknesses.
 */
export function analyzeSavedGamesForCurriculum(
  games: Game[],
  options: AnalysisOptions = {}
): CurriculumSummary {
  const { username = "", perspective = "auto", storedUsernames = [] } = options;
  const effectiveUsername = username.trim() || storedUsernames[0] || "You";

  const allInstances: PatternInstance[] = [];
  let identifiedGamesCount = 0;
  let whiteGamesCount = 0;
  let blackGamesCount = 0;
  let unknownIdentityGamesCount = 0;
  let evaluatedGamesCount = 0;
  let unevaluatedGamesCount = 0;

  // Cross-game distribution accumulators (USER ONLY)
  let openingMistakes = 0;
  let middlegameMistakes = 0;
  let endgameMistakes = 0;
  let tacticalMistakes = 0;
  let positionalMistakes = 0;
  let blundersCount = 0;
  let mistakesCount = 0;
  let inaccuraciesCount = 0;

  const seenKeys = new Set<string>();

  for (const gameItem of games) {
    // Determine player's color for this game independently
    const playerColor = getPlayerColorForGame(gameItem, effectiveUsername);

    if (playerColor === "unknown") {
      unknownIdentityGamesCount++;
      continue;
    }

    identifiedGamesCount++;
    if (playerColor === "white") whiteGamesCount++;
    else if (playerColor === "black") blackGamesCount++;

    const hasEval =
      gameItem.eval &&
      Array.isArray(gameItem.eval.positions) &&
      gameItem.eval.positions.length > 0;

    if (!hasEval) {
      unevaluatedGamesCount++;
      continue;
    }

    evaluatedGamesCount++;

    // Check perspective filter
    if (perspective === "white" && playerColor !== "white") continue;
    if (perspective === "black" && playerColor !== "black") continue;

    let chess: Chess;
    try {
      chess = new Chess();
      chess.loadPgn(gameItem.pgn);
    } catch {
      continue;
    }

    const verboseMoves = chess.history({ verbose: true });
    const positions = gameItem.eval?.positions || [];
    const fens: string[] = [];

    const tempGame = new Chess();
    fens.push(tempGame.fen());
    for (const move of verboseMoves) {
      tempGame.move(move);
      fens.push(tempGame.fen());
    }

    const whiteName = gameItem.white?.name || "White";
    const blackName = gameItem.black?.name || "Black";
    const gameTitle = `${whiteName} vs ${blackName}`;
    const openingName = gameItem.event?.includes("Opening")
      ? gameItem.event
      : undefined;

    // Scan moves ONLY FOR THE USER'S COLOR
    for (let i = 1; i < positions.length; i++) {
      const ply = i;
      const moveNumber = Math.ceil(ply / 2);
      const moverIsWhite = ply % 2 === 1;
      const moveColor: "white" | "black" = moverIsWhite ? "white" : "black";

      // CRITICAL: Strictly filter out opponent moves!
      if (moveColor !== playerColor) {
        continue;
      }

      // Deduplicate by gameId + ply
      const instanceKey = `${gameItem.id || 0}_${ply}`;
      if (seenKeys.has(instanceKey)) continue;
      seenKeys.add(instanceKey);

      const prevPos = positions[i - 1];
      const currentPos = positions[i];
      const move = verboseMoves[i - 1];
      if (!move || !prevPos || !currentPos) continue;

      // Correct evaluation direction calculation
      const whiteWinBefore = getPositionWinPercentage(prevPos);
      const whiteWinAfter = getPositionWinPercentage(currentPos);
      const playerWinChange =
        playerColor === "white"
          ? whiteWinAfter - whiteWinBefore
          : -(whiteWinAfter - whiteWinBefore);

      const cls = currentPos.moveClassification || MoveClassification.Okay;
      const isMistakeOrBlunder =
        cls === MoveClassification.Blunder ||
        cls === MoveClassification.Mistake ||
        (cls === MoveClassification.Inaccuracy && playerWinChange <= -12) ||
        playerWinChange <= -15;

      if (!isMistakeOrBlunder) continue;

      const fenBefore = fens[i - 1];
      const fenAfter = fens[i];
      if (!fenBefore) continue;

      // Track severity counts
      if (cls === MoveClassification.Blunder) blundersCount++;
      else if (cls === MoveClassification.Mistake) mistakesCount++;
      else inaccuraciesCount++;

      // Track phase counts
      if (ply <= 20) openingMistakes++;
      else if (ply <= 50) middlegameMistakes++;
      else endgameMistakes++;

      const prevLine = prevPos.lines?.[0];
      const bestMoveUci = prevPos.bestMove || prevLine?.pv?.[0] || "";
      let bestMoveSan = "Best move";

      if (bestMoveUci) {
        try {
          const testBoard = new Chess(fenBefore);
          const pvMove = testBoard.move({
            from: bestMoveUci.slice(0, 2) as never,
            to: bestMoveUci.slice(2, 4) as never,
            promotion: bestMoveUci[4],
          });
          if (pvMove) bestMoveSan = pvMove.san;
        } catch {
          // ignore
        }
      }

      const opponentBestMoveUci =
        currentPos.bestMove || currentPos.lines?.[0]?.pv?.[0] || "";

      const classificationResult = classifyMistakeByChessGeometry(
        ply,
        fenBefore,
        fenAfter,
        move.san,
        move.from,
        move.to,
        playerWinChange,
        cls,
        bestMoveSan,
        opponentBestMoveUci,
        openingName,
        playerColor === "white" ? whiteWinBefore : 100 - whiteWinBefore,
        playerColor === "white" ? whiteWinAfter : 100 - whiteWinAfter
      );

      const patternType = classificationResult.typeId;

      // Track tactical vs positional
      if (
        patternType === "pinned-piece" ||
        patternType === "hanging-piece" ||
        patternType === "missed-tactic"
      ) {
        tacticalMistakes++;
      } else {
        positionalMistakes++;
      }

      const pvFormatted = prevLine?.pv
        ? formatUciPv(fenBefore, prevLine.pv)
        : [];
      const pvSanList: string[] = [];
      try {
        const b = new Chess(fenBefore);
        for (const u of pvFormatted) {
          const m = b.move({
            from: u.slice(0, 2) as never,
            to: u.slice(2, 4) as never,
            promotion: u[4],
          });
          if (m) pvSanList.push(m.san);
        }
      } catch {
        // ignore
      }

      const moveNumStr = `${moveNumber}${moverIsWhite ? "." : "..."}`;
      const patternDef =
        PATTERN_DEFINITIONS[patternType] ||
        PATTERN_DEFINITIONS["missed-tactic"];

      const evidence: PatternEvidence = {
        piece: move.piece,
        fromSquare: move.from,
        toSquare: move.to,
        isCapture: !!move.captured,
        isCheck: move.san.includes("+"),
        winDropPercentage: Math.abs(playerWinChange),
        centipawnDrop:
          prevPos.lines?.[0]?.cp !== undefined &&
          currentPos.lines?.[0]?.cp !== undefined
            ? Math.abs(
                (currentPos.lines[0].cp - prevPos.lines[0].cp) *
                  (playerColor === "white" ? 1 : -1)
              )
            : undefined,
        betterMoveSan: bestMoveSan,
        motifConfidence: classificationResult.confidence,
        reason: classificationResult.reason,
        kingSafetyEvidence: classificationResult.kingSafetyEvidence,
        endgameEvidence: classificationResult.endgameEvidence,
        openingEvidence: classificationResult.openingEvidence,
        pieceActivityEvidence: classificationResult.pieceActivityEvidence,
        backRankEvidence: classificationResult.backRankEvidence,
      };

      const practiceContext: PracticeContext = {
        source: patternType === "opening-trap" ? "turning-point" : "tactic",
        ply,
        moveNumber,
        color: playerColor,
        fen: fenBefore,
        playedSan: move.san,
        playedUci: move.from + move.to + (move.promotion || ""),
        bestMove: bestMoveUci,
        bestMoveSan,
        evaluationBefore: whiteWinBefore,
        evaluationAfter: whiteWinAfter,
        evaluationChange: playerWinChange,
        principalVariation: pvFormatted,
        principalVariationSan: pvSanList,
        alternatives:
          prevPos.lines?.slice(0, 3).map((l) => ({
            move: l.pv?.[0] || "",
            san: l.pv?.[0] ? bestMoveSan || l.pv[0] : "",
            score: l.cp,
          })) || [],
        whyItMatters: `You played ${moveNumStr} ${move.san}, missing ${bestMoveSan}!, swinging win chance by ${Math.abs(playerWinChange).toFixed(0)}%.`,
        opportunity: `A critical opportunity to play ${bestMoveSan}! was missed.`,
        tacticalMotif: patternDef.title,
        lesson: patternDef.coachingTip,
      };

      const instance: PatternInstance = {
        id: instanceKey,
        gameId: gameItem.id || 0,
        gameTitle,
        username: effectiveUsername,
        playerColor,
        moveColor,
        gameDate: gameItem.date,
        openingName,
        whitePlayer: whiteName,
        blackPlayer: blackName,
        gameResult: gameItem.result,
        ply,
        moveNumber,
        color: playerColor,
        san: move.san,
        uci: move.from + move.to + (move.promotion || ""),
        fen: fenBefore,
        fenAfter,
        moveClassification: cls,
        evaluationBefore: whiteWinBefore,
        evaluationAfter: whiteWinAfter,
        evaluationChange: playerWinChange,
        evaluationBeforeCp: prevPos.lines?.[0]?.cp,
        evaluationAfterCp: currentPos.lines?.[0]?.cp,
        bestMove: bestMoveUci,
        bestMoveSan,
        principalVariation: pvFormatted,
        principalVariationSan: pvSanList,
        explanation: `Played ${moveNumStr} ${move.san} (lost ${Math.abs(playerWinChange).toFixed(0)}% win chance). Engine recommendation: ${bestMoveSan}!`,
        category: patternDef.category,
        typeId: patternType,
        evidence,
        practiceContext,
      };

      allInstances.push(instance);
    }
  }

  // Regroup user instances by pattern type directly from classification
  const groupMap = new Map<PatternTypeId, PatternInstance[]>();
  for (const instance of allInstances) {
    const pType = instance.typeId || "missed-tactic";
    const list = groupMap.get(pType) || [];
    list.push(instance);
    groupMap.set(pType, list);
  }

  const patternGroups: RecurringPatternGroup[] = [];

  for (const [typeId, instances] of groupMap.entries()) {
    if (instances.length === 0) continue;

    const def =
      PATTERN_DEFINITIONS[typeId] || PATTERN_DEFINITIONS["missed-tactic"];
    const uniqueGames = new Set(instances.map((i) => i.gameId)).size;
    const count = instances.length;

    // Strict MVP threshold: Only show recurring pattern cards when occurrences >= 3 AND uniqueGames >= 3
    if (count < 3 || uniqueGames < 3) {
      continue;
    }

    const groupBlunders = instances.filter(
      (i) => i.moveClassification === MoveClassification.Blunder
    ).length;
    const groupMistakes = instances.filter(
      (i) => i.moveClassification === MoveClassification.Mistake
    ).length;

    // Confidence determination
    let confidence: "high" | "moderate" | "building" = "building";
    if (count >= 4 && uniqueGames >= 3 && groupBlunders >= 1) {
      confidence = "high";
    } else if (count >= 3 && uniqueGames >= 3) {
      confidence = "moderate";
    }

    // Average win percentage drop
    const avgWinDrop =
      instances.reduce(
        (acc, curr) => acc + Math.abs(curr.evaluationChange),
        0
      ) / count;

    // Severity rating
    let severity: "high" | "medium" | "low" = "medium";
    if (avgWinDrop >= 22 || groupBlunders >= 2) {
      severity = "high";
    } else if (avgWinDrop < 14 && groupBlunders === 0) {
      severity = "low";
    }

    patternGroups.push({
      typeId,
      category: def.category,
      title: def.title,
      headline: def.headlineTemplate(count, uniqueGames),
      insight: `${def.insightTemplate(count, uniqueGames, instances[0]?.openingName)} (${groupBlunders} blunder${groupBlunders === 1 ? "" : "s"}, ${groupMistakes} mistake${groupMistakes === 1 ? "" : "s"}).`,
      coachingTip: def.coachingTip,
      severity,
      confidence,
      occurrencesCount: count,
      gamesCount: uniqueGames,
      averageWinDrop: Math.round(avgWinDrop),
      blundersCount: groupBlunders,
      mistakesCount: groupMistakes,
      instances: instances.sort(
        (a, b) => Math.abs(b.evaluationChange) - Math.abs(a.evaluationChange)
      ),
    });
  }

  // Rank patterns deterministically: unique games * 5 + occurrences * 3 + blunders * 4 + mistakes * 2 + avgDrop * 0.5
  patternGroups.sort((a, b) => {
    const scoreA =
      a.gamesCount * 5 +
      a.occurrencesCount * 3 +
      a.blundersCount * 4 +
      a.mistakesCount * 2 +
      a.averageWinDrop * 0.5;
    const scoreB =
      b.gamesCount * 5 +
      b.occurrencesCount * 3 +
      b.blundersCount * 4 +
      b.mistakesCount * 2 +
      b.averageWinDrop * 0.5;
    return scoreB - scoreA;
  });

  // Calculate Cross-Game Strengths and Weaknesses
  const totalUserMistakes = allInstances.length || 1;
  const openingPercent = Math.round(
    (openingMistakes / totalUserMistakes) * 100
  );
  const middlegamePercent = Math.round(
    (middlegameMistakes / totalUserMistakes) * 100
  );
  const endgamePercent = Math.round(
    (endgameMistakes / totalUserMistakes) * 100
  );

  const tacticalPercent = Math.round(
    (tacticalMistakes / totalUserMistakes) * 100
  );
  const positionalPercent = Math.round(
    (positionalMistakes / totalUserMistakes) * 100
  );

  // Generate factual Strengths
  const userStrengths: UserInsightItem[] = [];
  if (openingPercent <= 25 && evaluatedGamesCount >= 2) {
    userStrengths.push({
      title: "Solid Opening Foundation",
      description: `Only ${openingPercent}% of your inaccuracies occur in the opening phase. You consistently reach playable middlegames safely.`,
      tag: "Opening Stability",
      severity: "positive",
      evidenceGamesCount: evaluatedGamesCount,
    });
  } else if (evaluatedGamesCount >= 2) {
    userStrengths.push({
      title: "Harmonious Piece Development",
      description:
        "You develop your minor pieces and secure castling quickly in the early phase.",
      tag: "Development",
      severity: "positive",
      evidenceGamesCount: evaluatedGamesCount,
    });
  }

  if (endgamePercent <= 25 && evaluatedGamesCount >= 2) {
    userStrengths.push({
      title: "Accurate Endgame Conversion",
      description:
        "Low error rate in simplified late-game positions. When reaching an advantage, you convert cleanly.",
      tag: "Conversion",
      severity: "positive",
      evidenceGamesCount: evaluatedGamesCount,
    });
  }

  if (tacticalPercent < 50 && evaluatedGamesCount >= 2) {
    userStrengths.push({
      title: "Strong Tactical Awareness",
      description:
        "You rarely walk into direct one-move forks or skewers, maintaining tactical alertness.",
      tag: "Calculation",
      severity: "positive",
      evidenceGamesCount: evaluatedGamesCount,
    });
  }

  // Generate factual Weaknesses ("What You Lack")
  const userWeaknesses: UserInsightItem[] = [];
  for (const p of patternGroups.slice(0, 3)) {
    userWeaknesses.push({
      title: p.title,
      description: `${p.insight} Average drop of Δ ${p.averageWinDrop}% win chance.`,
      tag: p.category.toUpperCase(),
      severity: p.severity,
      evidenceGamesCount: p.gamesCount,
    });
  }

  const analytics: CrossGameAnalytics = {
    phaseDistribution: {
      openingCount: openingMistakes,
      openingPercent,
      middlegameCount: middlegameMistakes,
      middlegamePercent,
      endgameCount: endgameMistakes,
      endgamePercent,
    },
    errorTypeDistribution: {
      tacticalCount: tacticalMistakes,
      tacticalPercent,
      positionalCount: positionalMistakes,
      positionalPercent,
    },
    severityDistribution: {
      blunders: blundersCount,
      mistakes: mistakesCount,
      inaccuracies: inaccuraciesCount,
    },
    userStrengths,
    userWeaknesses,
    userPerspectiveColor: perspective === "auto" ? "all" : perspective,
    detectedPlayerName: effectiveUsername,
  };

  return {
    totalSavedGames: games.length,
    identifiedGamesCount,
    whiteGamesCount,
    blackGamesCount,
    unknownIdentityGamesCount,
    evaluatedGamesCount,
    unevaluatedGamesCount,
    totalPatternsDetected: patternGroups.length,
    topWeakness: patternGroups[0],
    patterns: patternGroups,
    allInstances,
    analytics,
  };
}
