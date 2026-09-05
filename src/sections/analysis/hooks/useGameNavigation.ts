import { useCallback } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  activePracticeAtom,
  boardAtom,
  boardOrientationAtom,
  currentPositionAtom,
  gameAtom,
} from "@/sections/analysis/states";
import { useChessActions } from "@/hooks/useChessActions";
import {
  DrillQueueItem,
  PracticeCheckResult,
  PracticeContext,
  PracticeOrigin,
  PracticeState,
} from "@/types/ai";
import { formatUciPv } from "@/lib/chess";
import { Chess } from "chess.js";

export const useGameNavigation = () => {
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const currentPosition = useAtomValue(currentPositionAtom);
  const [practice, setPractice] = useAtom(activePracticeAtom);
  const setBoardOrientation = useSetAtom(boardOrientationAtom);
  const { goToMove } = useChessActions(boardAtom);

  const goToPly = useCallback(
    (targetPly: number) => {
      if (practice) {
        setPractice(undefined);
      }
      const fullGame = game.history().length > 0 ? game : board;
      goToMove(targetPly, fullGame);
    },
    [game, board, practice, setPractice, goToMove]
  );

  const startPractice = useCallback(
    (
      context: PracticeContext,
      sourceGame?: Chess,
      drillOptions?: {
        queue?: DrillQueueItem[];
        index?: number;
        themeTitle?: string;
        origin?: PracticeOrigin;
      }
    ) => {
      const g = sourceGame || (game.history().length > 0 ? game : board);
      const savedPly =
        currentPosition?.currentMoveIdx ?? board.history().length;
      const practiceState: PracticeState = {
        isActive: true,
        context,
        sourcePgn: g.history().length > 0 ? g.pgn() : "",
        savedPly,
        status: "ready",
        drillQueue: drillOptions?.queue,
        drillIndex: drillOptions?.index ?? 0,
        drillThemeTitle: drillOptions?.themeTitle,
        origin: drillOptions?.origin,
      };
      setPractice(practiceState);
      setBoardOrientation(context.color === "white");
      goToMove(context.ply - 1, g, true);
    },
    [board, currentPosition, game, goToMove, setPractice, setBoardOrientation]
  );

  const exitPractice = useCallback(() => {
    if (practice) {
      if (!practice.origin || practice.origin.pathname !== "/curriculum") {
        goToMove(practice.savedPly, game, true);
      }
      setPractice(undefined);
    }
  }, [game, goToMove, practice, setPractice]);

  const retryPracticeMove = useCallback(() => {
    if (!practice) return;
    const sourceGame = new Chess();
    if (practice.sourcePgn) {
      sourceGame.loadPgn(practice.sourcePgn);
    }
    const g = sourceGame.history().length > 0 ? sourceGame : game;
    goToMove(practice.context.ply - 1, g, true);
    setPractice((prev) =>
      prev
        ? {
            ...prev,
            attemptedMove: undefined,
            status: "ready",
            checkResult: undefined,
          }
        : undefined
    );
  }, [game, goToMove, practice, setPractice]);

  const checkPracticeMove = useCallback(() => {
    if (!practice || !practice.attemptedMove) return;

    const attemptedUci = practice.attemptedMove.uci;
    const attemptedSan = practice.attemptedMove.san;
    const isWhite = practice.context.color === "white";
    const moveNumStr = `${practice.context.moveNumber}${isWhite ? "." : "..."}`;
    const recommendedMove = practice.context.bestMove;
    const recommendedSan =
      practice.context.bestMoveSan ||
      practice.context.alternatives[0]?.san ||
      "Best move";
    const source = practice.context.source;

    // 1. Top Engine Move
    const isTopMove =
      attemptedUci === recommendedMove ||
      (recommendedSan &&
        attemptedSan.replace(/[+#?!]/g, "") ===
          recommendedSan.replace(/[+#?!]/g, "")) ||
      (practice.context.principalVariation &&
        practice.context.principalVariation[0] &&
        attemptedUci === practice.context.principalVariation[0]);

    if (isTopMove) {
      const checkResult: PracticeCheckResult =
        source === "turning-point"
          ? {
              verdict: "best",
              title: "Best Decision!",
              yourMove: `${moveNumStr} ${attemptedSan}`,
              explanation: `Outstanding! Your move matches Stockfish's top recommendation and maintains optimal control.`,
              whyBetter:
                practice.context.whyItMatters ||
                "Seizes the initiative and secures the position.",
              evalImpact: "Maintains maximum winning chances.",
              coachingInsight:
                practice.context.lesson ||
                "Great decision at a crucial turning point in the game.",
            }
          : {
              verdict: "best",
              title: "Tactical Strike Found!",
              yourMove: `${moveNumStr} ${attemptedSan}`,
              explanation: `Brilliant! You found the decisive tactical continuation.`,
              tacticalIdea:
                practice.context.tacticalMotif || "Forcing Tactical Sequence",
              whyBetter:
                practice.context.opportunity ||
                "Creates an unstoppable forcing sequence.",
              evalImpact: "Wins decisive material or forces checkmate.",
              coachingInsight:
                "When you have checks and captures available, calculate forcing lines first.",
            };

      setPractice((prev) =>
        prev
          ? {
              ...prev,
              status: "checked",
              checkResult,
            }
          : undefined
      );
      return;
    }

    // 2. Strong Alternative Line
    const matchingOption = practice.context.alternatives.find(
      (opt) =>
        opt.move === attemptedUci ||
        opt.san.replace(/[+#?!]/g, "") === attemptedSan.replace(/[+#?!]/g, "")
    );
    const topScore = practice.context.alternatives[0]?.score;
    const isGoodAlt =
      matchingOption &&
      (matchingOption.score === undefined ||
        topScore === undefined ||
        (isWhite
          ? topScore - matchingOption.score <= 60
          : matchingOption.score - topScore <= 60));

    if (isGoodAlt) {
      const checkResult: PracticeCheckResult =
        source === "turning-point"
          ? {
              verdict: "alternative",
              title: "Strong Alternative",
              yourMove: `${moveNumStr} ${attemptedSan}`,
              explanation: `Good calculation. Your move is slightly different from the engine's first choice, but keeps the advantage.`,
              betterMove: `${moveNumStr} ${recommendedSan}!`,
              whyBetter:
                practice.context.whyItMatters ||
                "The top line is slightly more active, but your move keeps the position sound.",
              evalImpact: "Retains a solid advantage.",
              coachingInsight:
                practice.context.lesson ||
                "Solid calculation at a critical moment.",
            }
          : {
              verdict: "alternative",
              title: "Strong Alternative",
              yourMove: `${moveNumStr} ${attemptedSan}`,
              explanation: `A sound move that preserves the advantage, though an even sharper tactical strike was available.`,
              betterMove: `${moveNumStr} ${recommendedSan}!`,
              tacticalIdea:
                practice.context.tacticalMotif || "Tactical Continuation",
              whyBetter:
                practice.context.opportunity ||
                "The tactical shot creates an immediate forcing line.",
              evalImpact: "Keeps an advantage.",
              coachingInsight:
                "Always compare quiet developing moves with forcing checks, captures, and threats.",
            };

      setPractice((prev) =>
        prev
          ? {
              ...prev,
              status: "checked",
              checkResult,
            }
          : undefined
      );
      return;
    }

    // 3. Repeated Blunder or Inaccurate Move
    const isOriginalMistake =
      attemptedSan.replace(/[+#?!]/g, "") ===
        practice.context.playedSan.replace(/[+#?!]/g, "") ||
      (practice.context.playedUci &&
        attemptedUci === practice.context.playedUci);

    const verdict = isOriginalMistake ? "blunder" : "inaccurate";

    const checkResult: PracticeCheckResult =
      source === "turning-point"
        ? {
            verdict,
            title: isOriginalMistake ? "Critical Mistake" : "Inaccurate Move",
            yourMove: `${moveNumStr} ${attemptedSan}`,
            explanation: isOriginalMistake
              ? practice.context.afterSituation ||
                "This allowed the opponent to eliminate your advantage."
              : practice.context.opponentThreat
                ? `Allows opponent counterplay: ${practice.context.opponentThreat}`
                : "This move allows the opponent to equalize or gain counterplay.",
            betterMove: `${moveNumStr} ${recommendedSan}!`,
            whyBetter:
              practice.context.whyItMatters ||
              "Develops pieces with tempo and preserves king safety.",
            evalImpact: "Gives away advantage or concedes counterplay.",
            coachingInsight:
              practice.context.lesson ||
              "Scan checks, captures, and opponent threats before committing.",
          }
        : {
            verdict,
            title: isOriginalMistake
              ? "Tactical Opportunity Missed"
              : "Missed Tactical Strike",
            yourMove: `${moveNumStr} ${attemptedSan}`,
            explanation: isOriginalMistake
              ? practice.context.resultExplanation ||
                "You played the move from the game, missing the tactical continuation."
              : "This move does not exploit the tactical opportunity in the position.",
            betterMove: `${moveNumStr} ${recommendedSan}!`,
            tacticalIdea:
              practice.context.tacticalMotif || "Forcing Tactical Sequence",
            whyBetter:
              practice.context.opportunity ||
              "The forcing check/capture wins material or creates a decisive attack.",
            evalImpact: "Misses an opportunity to win material.",
            coachingInsight:
              "When you have forcing checks and captures available, calculate forcing moves first.",
          };

    setPractice((prev) =>
      prev
        ? {
            ...prev,
            status: "checked",
            checkResult,
          }
        : undefined
    );
  }, [practice, setPractice]);

  const revealSolution = useCallback(() => {
    if (!practice) return;
    setPractice((prev) => (prev ? { ...prev, status: "solution" } : undefined));
  }, [practice, setPractice]);

  const previewVariation = useCallback((fen: string, uciMoves: string[]) => {
    try {
      const previewGame = new Chess(fen);
      const formattedMoves = formatUciPv(fen, uciMoves);
      for (const move of formattedMoves) {
        previewGame.move({
          from: move.slice(0, 2) as never,
          to: move.slice(2, 4) as never,
          promotion: move[4],
        });
      }
    } catch {
      // Fallback
    }
  }, []);

  const findPlyForMove = useCallback(
    (sanOrMoveText: string): number | null => {
      const history = game.history({ verbose: true });
      if (!history.length) return null;

      // Clean input text
      const clean = sanOrMoveText.trim().replace(/[?!]/g, "");

      // Match pattern like "16. Nxf7" or "16... Qh2+"
      const numberedMatch = clean.match(/^(\d{1,3})\s*(\.{1,3})\s*([^\s]+)$/);
      if (numberedMatch) {
        const moveNumber = parseInt(numberedMatch[1], 10);
        const isBlack = numberedMatch[2].length === 3;
        const targetSan = numberedMatch[3].replace(/[+#!?]/g, "");

        const targetPly = (moveNumber - 1) * 2 + (isBlack ? 2 : 1);
        if (targetPly <= history.length) {
          const moveAtPly = history[targetPly - 1];
          if (moveAtPly && moveAtPly.san.replace(/[+#!?]/g, "") === targetSan) {
            return targetPly;
          }
        }
      }

      // Match by SAN directly in history
      const normalizedTarget = clean.replace(/[+#!?]/g, "");
      const index = history.findIndex(
        (m) => m.san.replace(/[+#!?]/g, "") === normalizedTarget
      );
      if (index !== -1) {
        return index + 1;
      }

      return null;
    },
    [game]
  );

  return {
    goToPly,
    startPractice,
    exitPractice,
    retryPracticeMove,
    checkPracticeMove,
    revealSolution,
    previewVariation,
    findPlyForMove,
    practice,
  };
};
