import {
  activePracticeAtom,
  boardAtom,
  currentPositionAtom,
  engineDepthAtom,
  engineMultiPvAtom,
  gameAtom,
  gameEvalAtom,
  savedEvalsAtom,
} from "@/sections/analysis/states";
import { CurrentPosition, PositionEval } from "@/types/eval";
import { MoveClassification } from "@/types/enums";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { getEvaluateGameParams } from "@/lib/chess";
import { getMovesClassification } from "@/lib/engine/helpers/moveClassification";
import { UciEngine } from "@/lib/engine/uciEngine";
import {
  getEcoBookPrefixLength,
  getEcoBookDetailsForMoves,
} from "@/lib/openings/eco";

export const useCurrentPosition = (engine: UciEngine | null) => {
  const [currentPosition, setCurrentPosition] = useAtom(currentPositionAtom);
  const gameEval = useAtomValue(gameEvalAtom);
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const practice = useAtomValue(activePracticeAtom);
  const depth = useAtomValue(engineDepthAtom);
  const multiPv = useAtomValue(engineMultiPvAtom);
  const [savedEvals, setSavedEvals] = useAtom(savedEvalsAtom);

  useEffect(() => {
    const boardHistory = board.history({ verbose: true });
    const position: CurrentPosition = {
      lastMove: boardHistory.at(-1),
    };

    const gameHistory = game.history();

    if (
      boardHistory.length <= gameHistory.length &&
      gameHistory.slice(0, boardHistory.length).join() ===
        boardHistory.map((m) => m.san).join()
    ) {
      position.currentMoveIdx = boardHistory.length;

      if (gameEval) {
        const evalIndex = boardHistory.length;

        position.eval = {
          ...gameEval.positions[evalIndex],
          lines: gameEval.positions[evalIndex].lines.slice(0, multiPv),
        };
        position.lastEval =
          evalIndex > 0
            ? {
                ...gameEval.positions[evalIndex - 1],
                lines: gameEval.positions[evalIndex - 1].lines.slice(
                  0,
                  multiPv
                ),
              }
            : undefined;
      }
    }

    if (!position.eval?.opening) {
      const uciMoves = boardHistory.map(
        (move) => move.from + move.to + (move.promotion || "")
      );
      const bookDetails = getEcoBookDetailsForMoves(uciMoves);
      position.opening = bookDetails.opening;
      position.eco = bookDetails.eco;
    }

    setCurrentPosition(position);

    if (
      !position.eval &&
      !practice?.isActive &&
      engine?.getIsReady() &&
      engine.name &&
      !board.isCheckmate() &&
      !board.isStalemate()
    ) {
      const getFenEngineEval = async (
        fen: string,
        setPartialEval?: (positionEval: PositionEval) => void
      ) => {
        if (!engine.getIsReady()) {
          throw new Error("Engine not ready");
        }
        const savedEval = savedEvals[fen];
        if (
          savedEval &&
          savedEval.engine === engine.name &&
          (savedEval.lines?.length ?? 0) >= multiPv &&
          (savedEval.lines[0].depth ?? 0) >= depth
        ) {
          const positionEval: PositionEval = {
            ...savedEval,
            lines: savedEval.lines.slice(0, multiPv),
          };
          setPartialEval?.(positionEval);
          return positionEval;
        }

        const rawPositionEval = await engine.evaluatePositionWithUpdate({
          fen,
          depth,
          multiPv,
          setPartialEval,
        });

        setSavedEvals((prev) => ({
          ...prev,
          [fen]: { ...rawPositionEval, engine: engine.name },
        }));

        return rawPositionEval;
      };

      const getPositionEval = async () => {
        const setPartialEval = (positionEval: PositionEval) => {
          setCurrentPosition({ ...position, eval: positionEval });
        };
        const rawPositionEval = await getFenEngineEval(
          board.fen(),
          setPartialEval
        );

        if (boardHistory.length === 0) return;

        const params = getEvaluateGameParams(board);
        const fens = params.fens.slice(board.turn() === "w" ? -3 : -4);
        const uciMoves = params.uciMoves.slice(board.turn() === "w" ? -2 : -3);

        const lastRawEval = await getFenEngineEval(fens.slice(-2)[0]);
        const rawPositions: PositionEval[] = fens.map((_, idx) => {
          if (idx === fens.length - 2) return lastRawEval;
          if (idx === fens.length - 1) return rawPositionEval;
          return {
            lines: [
              {
                pv: [],
                depth: 0,
                multiPv: 1,
                cp: 1,
              },
            ],
          };
        });

        const fullUciMoves = boardHistory.map(
          (move) => move.from + move.to + (move.promotion || "")
        );

        const positionsWithMoveClassification = getMovesClassification(
          rawPositions,
          uciMoves,
          fens,
          params.openingName
        );
        // Match book lines against the full ECO trie so that book prefixes can
        // extend as far as the trie contains moves.
        const bookPrefixLength = getEcoBookPrefixLength(fullUciMoves);
        const bookDetails = getEcoBookDetailsForMoves(fullUciMoves);
        const currentOpening = bookDetails.opening;
        const currentEval = positionsWithMoveClassification.slice(-1)[0];
        const lastEval = positionsWithMoveClassification.slice(-2)[0];

        setCurrentPosition({
          ...position,
          eval:
            bookPrefixLength >= boardHistory.length
              ? {
                  ...currentEval,
                  opening: currentOpening,
                  isBookMove: true,
                  eco: bookDetails.eco,
                  moveClassification: MoveClassification.Opening,
                }
              : currentEval,
          lastEval:
            bookPrefixLength >= boardHistory.length - 1
              ? { ...lastEval, opening: currentOpening, eco: bookDetails.eco }
              : lastEval,
        });
      };

      getPositionEval();
    }

    return () => {
      if (engine?.getIsReady()) {
        engine?.stopAllCurrentJobs();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameEval, board, game, engine, depth, multiPv, practice]);

  return currentPosition;
};
