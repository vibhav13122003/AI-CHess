import { formatGameToDatabase } from "@/lib/chess";
import { GameEval } from "@/types/eval";
import { Game } from "@/types/game";
import { Chess } from "chess.js";
import { openDB, DBSchema, IDBPDatabase } from "idb";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface GameDatabaseSchema extends DBSchema {
  games: {
    value: Game;
    key: number;
  };
}

const gamesAtom = atom<Game[]>([]);
const fetchGamesAtom = atom<boolean>(false);

// Global in-flight lock to prevent concurrent duplicate saves
const inFlightSaves = new Map<string, Promise<number>>();

export const normalizePgn = (pgn: string): string => {
  return pgn
    .replace(/\r\n/g, "\n")
    .replace(/\[Date\s+"[^"]*"\]/g, "")
    .trim();
};

export const useGameDatabase = (shouldFetchGames?: boolean) => {
  const [db, setDb] = useState<IDBPDatabase<GameDatabaseSchema> | null>(null);
  const [games, setGames] = useAtom(gamesAtom);
  const [fetchGames, setFetchGames] = useAtom(fetchGamesAtom);
  const [gameFromUrl, setGameFromUrl] = useState<Game | undefined>(undefined);

  useEffect(() => {
    if (shouldFetchGames !== undefined) {
      setFetchGames(shouldFetchGames);
    }
  }, [shouldFetchGames, setFetchGames]);

  useEffect(() => {
    const initDatabase = async () => {
      const db = await openDB<GameDatabaseSchema>("games", 1, {
        upgrade(db) {
          db.createObjectStore("games", { keyPath: "id", autoIncrement: true });
        },
      });
      setDb(db);
    };

    initDatabase();
  }, []);

  const loadGames = useCallback(async () => {
    if (db && fetchGames) {
      const games = await db.getAll("games");
      setGames(games);
    }
  }, [db, fetchGames, setGames]);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  const addGame = useCallback(
    async (game: Chess, gameEval?: GameEval): Promise<number> => {
      if (!db) throw new Error("Database not initialized");

      const gameToAdd = formatGameToDatabase(game);
      if (gameEval) {
        (gameToAdd as Game).eval = gameEval;
      }

      const normPgn = normalizePgn(gameToAdd.pgn);
      const gameMoves = game.history().join(" ");

      // Check if a save for this exact PGN is already in progress
      const inFlight = inFlightSaves.get(normPgn);
      if (inFlight) {
        return inFlight;
      }

      const savePromise = (async () => {
        try {
          const allGames = await db.getAll("games");
          const existingMatch = allGames.find((existing) => {
            if (!existing?.pgn) return false;
            if (normalizePgn(existing.pgn) === normPgn) return true;

            try {
              const existingChess = new Chess();
              existingChess.loadPgn(existing.pgn);
              const existingMoves = existingChess.history().join(" ");
              if (existingMoves && existingMoves === gameMoves) {
                const whiteMatches =
                  (existing.white?.name || "").toLowerCase().trim() ===
                  (gameToAdd.white?.name || "").toLowerCase().trim();
                const blackMatches =
                  (existing.black?.name || "").toLowerCase().trim() ===
                  (gameToAdd.black?.name || "").toLowerCase().trim();
                if (whiteMatches && blackMatches) return true;
              }
            } catch {
              // ignore
            }
            return false;
          });

          if (existingMatch) {
            // If the incoming game has eval data and the stored one doesn't, update it
            if (gameEval && !existingMatch.eval) {
              await db.put("games", { ...existingMatch, eval: gameEval });
              loadGames();
            }
            return existingMatch.id;
          }

          const gameId = await db.add("games", gameToAdd as Game);
          loadGames();
          return gameId;
        } finally {
          inFlightSaves.delete(normPgn);
        }
      })();

      inFlightSaves.set(normPgn, savePromise);
      return savePromise;
    },
    [db, loadGames]
  );

  const setGameEval = useCallback(
    async (gameId: number, evaluation: GameEval) => {
      if (!db) throw new Error("Database not initialized");

      const game = await db.get("games", gameId);
      if (!game) throw new Error("Game not found");

      await db.put("games", { ...game, eval: evaluation });

      loadGames();
    },
    [db, loadGames]
  );

  const getGame = useCallback(
    async (gameId: number) => {
      if (!db) return undefined;

      return db.get("games", gameId);
    },
    [db]
  );

  const deleteGame = useCallback(
    async (gameId: number) => {
      if (!db) throw new Error("Database not initialized");

      await db.delete("games", gameId);

      loadGames();
    },
    [db, loadGames]
  );

  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    switch (typeof gameId) {
      case "string":
        getGame(parseInt(gameId)).then((game) => {
          setGameFromUrl(game);
        });
        break;
      default:
        setGameFromUrl(undefined);
    }
  }, [gameId, setGameFromUrl, getGame]);

  const isReady = db !== null;

  return {
    addGame,
    setGameEval,
    getGame,
    deleteGame,
    games,
    isReady,
    gameFromUrl,
  };
};
