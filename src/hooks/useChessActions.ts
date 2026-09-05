"use no memo";

import { getGameFromPgn, setGameHeaders } from "@/lib/chess";
import { playIllegalMoveSound, playSoundFromMove } from "@/lib/sounds";
import { Player } from "@/types/game";
import { Chess, Move, DEFAULT_POSITION } from "chess.js";
import { PrimitiveAtom, useAtom } from "jotai";
import { useCallback } from "react";

export interface resetGameParams {
  fen?: string;
  white?: Player;
  black?: Player;
  noHeaders?: boolean;
}

export const useChessActions = (chessAtom: PrimitiveAtom<Chess>) => {
  const [game, setGame] = useAtom(chessAtom);

  const setPgn = useCallback(
    (pgn: string) => {
      const newGame = new Chess();
      newGame.loadPgn(pgn);
      setGame(newGame);
    },
    [setGame]
  );

  const reset = useCallback(
    (params?: resetGameParams) => {
      const newGame = new Chess(params?.fen);
      if (!params?.noHeaders) setGameHeaders(newGame, params);
      setGame(newGame);
    },
    [setGame]
  );

  const copyGame = useCallback(() => {
    const newGame = new Chess();

    if (game.history().length === 0) {
      const pgnSplitted = game.pgn().split("]");
      if (
        ["1-0", "0-1", "1/2-1/2", "*"].includes(
          pgnSplitted.at(-1)?.trim() ?? ""
        )
      ) {
        newGame.loadPgn(pgnSplitted.slice(0, -1).join("]") + "]");
        return newGame;
      }
    }

    newGame.loadPgn(game.pgn());
    return newGame;
  }, [game]);

  const resetToStartingPosition = useCallback(
    (pgn?: string) => {
      const newGame = pgn ? getGameFromPgn(pgn) : copyGame();
      newGame.load(newGame.getHeaders().FEN || DEFAULT_POSITION, {
        preserveHeaders: true,
      });
      setGame(newGame);
    },
    [copyGame, setGame]
  );

  const playMove = useCallback(
    (params: {
      from: string;
      to: string;
      promotion?: string;
      comment?: string;
    }): Move | null => {
      const newGame = copyGame();

      try {
        const { comment, ...move } = params;
        const result = newGame.move(move);
        if (comment) newGame.setComment(comment);

        setGame(newGame);
        playSoundFromMove(result);
        return result;
      } catch {
        playIllegalMoveSound();
        return null;
      }
    },
    [copyGame, setGame]
  );

  const addMoves = useCallback(
    (moves: string[]) => {
      const newGame = copyGame();

      let lastMove: Move | null = null;
      for (const move of moves) {
        lastMove = newGame.move(move);
      }
      setGame(newGame);
      if (lastMove) playSoundFromMove(lastMove);
    },
    [copyGame, setGame]
  );

  const undoMove = useCallback(() => {
    const newGame = copyGame();
    const move = newGame.undo();
    if (move) playSoundFromMove(move);
    setGame(newGame);
  }, [copyGame, setGame]);

  const goToMove = useCallback(
    (moveIdx: number, fullGame: Chess, skipSound?: boolean) => {
      if (moveIdx < 0) return;

      const newGame = new Chess();
      const historyMoves = fullGame.history({ verbose: true });
      const movesNb = historyMoves.length;

      if (movesNb === 0) {
        setGame(newGame);
        return;
      }

      const targetIdx = Math.min(moveIdx, movesNb);
      let lastMove: Move | null = null;
      for (let i = 0; i < targetIdx; i++) {
        lastMove = newGame.move(historyMoves[i]);
      }

      setGame(newGame);
      if (lastMove && !skipSound) playSoundFromMove(lastMove);
    },
    [setGame]
  );

  return {
    setPgn,
    reset,
    playMove,
    undoMove,
    goToMove,
    resetToStartingPosition,
    addMoves,
  };
};
