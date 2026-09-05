import LoadGameButton from "../../loadGame/loadGameButton";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useChessActions } from "@/hooks/useChessActions";
import {
  boardAtom,
  boardOrientationAtom,
  evaluationProgressAtom,
  gameAtom,
  gameEvalAtom,
} from "../states";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useAtomValue, useSetAtom } from "jotai";
import { Chess } from "chess.js";
import { useRouter } from "next/router";
import { GameEval } from "@/types/eval";
import { fetchLichessGame } from "@/lib/lichess";
import { formatUciPv, getEvaluateGameParams } from "@/lib/chess";
import { getMovesClassification } from "@/lib/engine/helpers/moveClassification";
import { useGameNavigation } from "../hooks/useGameNavigation";
import { getPositionWinPercentage } from "@/lib/engine/helpers/winPercentage";
import { PracticeContext, PracticeOrigin } from "@/types/ai";

export default function LoadGame() {
  const router = useRouter();
  const game = useAtomValue(gameAtom);
  const { setPgn: setGamePgn } = useChessActions(gameAtom);
  const { resetToStartingPosition: resetBoard } = useChessActions(boardAtom);
  const { gameFromUrl } = useGameDatabase();
  const { startPractice } = useGameNavigation();
  const setEval = useSetAtom(gameEvalAtom);
  const setBoardOrientation = useSetAtom(boardOrientationAtom);
  const evaluationProgress = useAtomValue(evaluationProgressAtom);

  const lastLoadedItemKeyRef = useRef<string>("");
  const startPracticeRef = useRef(startPractice);
  startPracticeRef.current = startPractice;
  const resetAndSetGamePgnRef = useRef<
    (pgn: string, orientation?: boolean, gameEval?: GameEval) => void
  >(() => {});

  const joinedGameHistory = useMemo(() => game.history().join(), [game]);

  const resetAndSetGamePgn = useCallback(
    (pgn: string, orientation?: boolean, gameEval?: GameEval) => {
      const gameFromPgn = new Chess();
      gameFromPgn.loadPgn(pgn);
      if (joinedGameHistory === gameFromPgn.history().join()) return;

      resetBoard(pgn);
      const params = getEvaluateGameParams(gameFromPgn);
      const refreshedEval =
        gameEval &&
        gameEval.positions.length === gameFromPgn.history().length + 1
          ? {
              ...gameEval,
              positions: getMovesClassification(
                gameEval.positions,
                params.uciMoves,
                params.fens,
                params.openingName
              ),
            }
          : gameEval;
      setEval(refreshedEval);
      setGamePgn(pgn);
      setBoardOrientation(orientation ?? true);
    },
    [joinedGameHistory, resetBoard, setGamePgn, setEval, setBoardOrientation]
  );
  resetAndSetGamePgnRef.current = resetAndSetGamePgn;

  const {
    lichessGameId,
    orientation: orientationParam,
    ply: plyParam,
    practice: practiceParam,
  } = router.query;

  useEffect(() => {
    const handleLichess = async (id: string) => {
      const res = await fetchLichessGame(id);
      if (typeof res === "string") {
        resetAndSetGamePgnRef.current(res, orientationParam !== "black");
      }
    };

    const isPractice = practiceParam === "true" && typeof plyParam === "string";
    const currentItemKey = isPractice
      ? `practice_${gameFromUrl?.id}_${plyParam}_${router.query.drillTheme || ""}`
      : gameFromUrl
        ? `game_${gameFromUrl.id}_${orientationParam || "default"}`
        : typeof lichessGameId === "string" && lichessGameId
          ? `lichess_${lichessGameId}`
          : "";

    if (!currentItemKey || lastLoadedItemKeyRef.current === currentItemKey) {
      return;
    }
    lastLoadedItemKeyRef.current = currentItemKey;

    if (gameFromUrl) {
      const orientation = !(
        gameFromUrl.site === "Chesskit.org" && gameFromUrl.black.name === "You"
      );

      // Deep link to practice mode directly from Curriculum
      if (isPractice) {
        const plyIdx = parseInt(plyParam as string, 10);
        if (!isNaN(plyIdx) && plyIdx > 0) {
          try {
            const chess = new Chess();
            chess.loadPgn(gameFromUrl.pgn);
            const moves = chess.history({ verbose: true });
            const move = moves[plyIdx - 1];

            const tempChess = new Chess();
            for (let i = 0; i < plyIdx - 1; i++) {
              tempChess.move(moves[i]);
            }
            const fenBefore = tempChess.fen();

            const pos = gameFromUrl.eval?.positions?.[plyIdx];
            const prevPos = gameFromUrl.eval?.positions?.[plyIdx - 1];
            const prevLine = prevPos?.lines?.[0];
            const isWhite = plyIdx % 2 === 1;
            const winBefore = prevPos ? getPositionWinPercentage(prevPos) : 50;
            const winAfter = pos ? getPositionWinPercentage(pos) : 50;
            const winChange = (winAfter - winBefore) * (isWhite ? 1 : -1);

            const bestMoveUci = prevPos?.bestMove || prevLine?.pv?.[0] || "";
            let bestMoveSan = "Best move";
            if (bestMoveUci) {
              try {
                const b = new Chess(fenBefore);
                const m = b.move({
                  from: bestMoveUci.slice(0, 2) as never,
                  to: bestMoveUci.slice(2, 4) as never,
                  promotion: bestMoveUci[4],
                });
                if (m) bestMoveSan = m.san;
              } catch {
                // ignore
              }
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

            const moveNumber = Math.ceil(plyIdx / 2);
            const moveStr = `${moveNumber}${isWhite ? "." : "..."}`;

            const practiceContext: PracticeContext = {
              source: "tactic",
              ply: plyIdx,
              moveNumber,
              color: isWhite ? "white" : "black",
              fen: fenBefore,
              playedSan: move?.san || "",
              playedUci: move
                ? move.from + move.to + (move.promotion || "")
                : "",
              bestMove: bestMoveUci,
              bestMoveSan,
              evaluationBefore: winBefore,
              evaluationAfter: winAfter,
              evaluationChange: winChange,
              principalVariation: pvFormatted,
              principalVariationSan: pvSanList,
              alternatives:
                prevPos?.lines?.slice(0, 3).map((l) => ({
                  move: l.pv?.[0] || "",
                  san: l.pv?.[0] ? bestMoveSan || l.pv[0] : "",
                  score: l.cp,
                })) || [],
              whyItMatters: `You played ${moveStr} ${move?.san || ""}, missing the better continuation ${bestMoveSan}!.`,
              lesson:
                "Calculate forcing checks, captures, and threats before making your move.",
            };

            let origin: PracticeOrigin | undefined;
            if (router.query.origin === "curriculum") {
              const query: Record<string, string> = {};
              if (typeof router.query.username === "string")
                query.username = router.query.username;
              if (typeof router.query.category === "string")
                query.category = router.query.category;
              if (typeof router.query.pattern === "string")
                query.pattern = router.query.pattern;
              origin = {
                pathname: "/curriculum",
                query,
              };
            }

            let drillOptions:
              | {
                  queue?: { gameId: number; ply: number }[];
                  index?: number;
                  themeTitle?: string;
                  origin?: PracticeOrigin;
                }
              | undefined;
            if (router.query.drillTheme && typeof window !== "undefined") {
              try {
                const raw = localStorage.getItem("active-curriculum-drill");
                if (raw) {
                  const parsed = JSON.parse(raw);
                  drillOptions = {
                    queue: parsed.queue,
                    index: parsed.index,
                    themeTitle: parsed.themeTitle,
                    origin: parsed.origin || origin,
                  };
                }
              } catch {
                // ignore
              }
            }

            if (!drillOptions && origin) {
              drillOptions = { origin };
            } else if (drillOptions && origin && !drillOptions.origin) {
              drillOptions.origin = origin;
            }

            setEval(gameFromUrl.eval);
            setGamePgn(gameFromUrl.pgn);
            startPracticeRef.current(practiceContext, chess, drillOptions);
          } catch (e) {
            console.error("Error setting up practice from URL:", e);
          }
        }
      } else {
        resetAndSetGamePgnRef.current(
          gameFromUrl.pgn,
          orientation,
          gameFromUrl.eval
        );
      }
    } else if (typeof lichessGameId === "string" && !!lichessGameId) {
      handleLichess(lichessGameId);
    }
  }, [
    gameFromUrl,
    lichessGameId,
    orientationParam,
    plyParam,
    practiceParam,
    router.query.drillTheme,
    setEval,
    setGamePgn,
  ]);

  useEffect(() => {
    const eventHandler = (event: MessageEvent) => {
      try {
        if (!event?.data?.pgn) return;
        const { pgn, orientation } = event.data as {
          pgn: string;
          orientation?: "white" | "black";
        };
        resetAndSetGamePgn(pgn, orientation !== "black");
      } catch (error) {
        console.error("Error processing message event:", error);
      }
    };
    window.addEventListener("message", eventHandler);

    return () => {
      window.removeEventListener("message", eventHandler);
    };
  }, [resetAndSetGamePgn]);

  const isGameLoaded =
    gameFromUrl !== undefined ||
    (!!game.getHeaders().White && game.getHeaders().White !== "?") ||
    game.history().length > 0;

  if (evaluationProgress) return null;

  return (
    <LoadGameButton
      label={isGameLoaded ? "Load another game" : "Load game"}
      size="small"
      setGame={async (game) => {
        lastLoadedItemKeyRef.current = "";
        await router.replace(
          {
            query: {},
            pathname: router.pathname,
          },
          undefined,
          { shallow: true, scroll: false }
        );
        resetAndSetGamePgn(game.pgn());
      }}
    />
  );
}
