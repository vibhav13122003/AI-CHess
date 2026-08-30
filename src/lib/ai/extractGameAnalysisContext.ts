import { getPositionWinPercentage } from "@/lib/engine/helpers/winPercentage";
import { GameAnalysisContext, CriticalMoment } from "@/types/ai";
import { GameEval } from "@/types/eval";
import { Chess } from "chess.js";
import { formatUciPv } from "@/lib/chess";

const MAX_CRITICAL_MOMENTS = 8;

export const extractGameAnalysisContext = (
  pgn: string,
  fens: string[],
  moves: string[],
  gameEval: GameEval
): GameAnalysisContext => {
  if (
    !pgn.trim() ||
    gameEval.positions.length !== fens.length ||
    moves.length + 1 !== fens.length
  ) {
    throw new Error("Incomplete game analysis data");
  }

  const candidates: CriticalMoment[] = [];
  const history = new Chess();
  history.loadPgn(pgn);
  const verboseMoves = history.history({ verbose: true });

  for (let index = 1; index < gameEval.positions.length; index += 1) {
    const before = getPositionWinPercentage(gameEval.positions[index - 1]);
    const after = getPositionWinPercentage(gameEval.positions[index]);
    const moverIsWhite = fens[index - 1].split(" ")[1] === "w";
    const change = (after - before) * (moverIsWhite ? 1 : -1);
    const position = gameEval.positions[index];
    const classification = position.moveClassification;

    if (
      change <= -4 ||
      classification === "mistake" ||
      classification === "blunder" ||
      classification === "inaccuracy"
    ) {
      const playedMove = verboseMoves[index - 1];
      const beforePosition = gameEval.positions[index - 1];
      const rawBestMove =
        beforePosition.bestMove ?? beforePosition.lines[0]?.pv[0];
      const principalVariation = formatUciPv(
        fens[index - 1],
        beforePosition.lines[0]?.pv ?? []
      );
      const pvBoard = new Chess(fens[index - 1]);
      const principalVariationSan = principalVariation.flatMap((uciMove) => {
        try {
          const move = pvBoard.move({
            from: uciMove.slice(0, 2) as never,
            to: uciMove.slice(2, 4) as never,
            promotion: uciMove[4],
          });
          return [move.san];
        } catch {
          return [];
        }
      });

      const alternatives = beforePosition.lines.slice(0, 3).flatMap((line) => {
        const optionBoard = new Chess(fens[index - 1]);
        const bestMove = formatUciPv(fens[index - 1], line.pv)[0];
        if (!bestMove) return [];
        try {
          const san = optionBoard.move({
            from: bestMove.slice(0, 2) as never,
            to: bestMove.slice(2, 4) as never,
            promotion: bestMove[4],
          }).san;
          return [
            {
              move: bestMove,
              san,
              score: line.cp,
            },
          ];
        } catch {
          return [];
        }
      });

      candidates.push({
        ply: index,
        move: moves[index - 1],
        san: playedMove?.san ?? moves[index - 1],
        moveNumber: Math.ceil(index / 2),
        color: moverIsWhite ? "white" : "black",
        fen: fens[index - 1],
        evaluationBefore: before,
        evaluationAfter: after,
        evaluationChange: change,
        bestMove: rawBestMove
          ? formatUciPv(fens[index - 1], [rawBestMove])[0]
          : undefined,
        principalVariation,
        principalVariationSan,
        alternatives,
        classification,
      });
    }
  }

  return {
    pgn,
    fens,
    moves,
    gameEval,
    criticalMoments: candidates
      .sort((a, b) => a.evaluationChange - b.evaluationChange)
      .slice(0, MAX_CRITICAL_MOMENTS),
  };
};

