import {
  Alert,
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { activePracticeAtom, boardAtom } from "@/sections/analysis/states";
import { useGameNavigation } from "@/sections/analysis/hooks/useGameNavigation";

export default function PracticeMode() {
  const router = useRouter();
  const {
    practice,
    checkPracticeMove,
    revealSolution,
    exitPractice,
    retryPracticeMove,
  } = useGameNavigation();
  const board = useAtomValue(boardAtom);
  const [, setPractice] = useAtom(activePracticeAtom);

  // Passive board move detection: immediately syncs when user moves on board at ply - 1
  useEffect(() => {
    if (!practice?.isActive || practice.status === "solution") return;

    const boardHistory = board.history({ verbose: true });
    const startPly = practice.context.ply - 1;

    if (boardHistory.length === startPly + 1) {
      const move = boardHistory[boardHistory.length - 1];
      const uci = move.from + move.to + (move.promotion || "");
      if (practice.attemptedMove?.uci !== uci) {
        setPractice((prev) =>
          prev
            ? {
                ...prev,
                attemptedMove: {
                  from: move.from,
                  to: move.to,
                  promotion: move.promotion,
                  san: move.san,
                  uci,
                },
                status: "attempted",
                checkResult: undefined,
              }
            : undefined
        );
      }
    }
  }, [
    board,
    practice?.isActive,
    practice?.context.ply,
    practice?.attemptedMove?.uci,
    setPractice,
  ]);

  if (!practice?.isActive) return null;

  const { context, status, checkResult } = practice;
  const isWhite = context.color === "white";
  const moveNumberStr = `${context.moveNumber}${isWhite ? "." : "..."}`;
  const isTactic = context.source === "tactic";
  const hasAttempted = Boolean(practice.attemptedMove);

  const bestOptionSan =
    context.bestMoveSan ||
    context.alternatives[0]?.san ||
    context.principalVariationSan[0] ||
    "Best move";

  const isDrill = Boolean(
    practice.drillQueue && practice.drillQueue.length > 0
  );
  const currentDrillIndex = practice.drillIndex ?? 0;
  const totalDrillCount = practice.drillQueue?.length ?? 1;
  const hasNextDrill = isDrill && currentDrillIndex < totalDrillCount - 1;

  const handleNextDrillPosition = () => {
    if (!practice.drillQueue) return;
    const nextIdx = currentDrillIndex + 1;
    const nextItem = practice.drillQueue[nextIdx];
    if (nextItem) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "active-curriculum-drill",
          JSON.stringify({
            themeTitle: practice.drillThemeTitle,
            queue: practice.drillQueue,
            index: nextIdx,
            origin: practice.origin,
          })
        );
      }
      const nextQuery: Record<string, string> = {
        gameId: String(nextItem.gameId),
        ply: String(nextItem.ply),
        practice: "true",
        drillTheme: practice.drillThemeTitle || "",
      };
      if (
        practice.origin?.pathname === "/curriculum" ||
        router.query.origin === "curriculum"
      ) {
        nextQuery.origin = "curriculum";
        const u =
          practice.origin?.query?.username ||
          (typeof router.query.username === "string"
            ? router.query.username
            : "");
        const c =
          practice.origin?.query?.category ||
          (typeof router.query.category === "string"
            ? router.query.category
            : "");
        const p =
          practice.origin?.query?.pattern ||
          (typeof router.query.pattern === "string"
            ? router.query.pattern
            : "");
        if (u) nextQuery.username = u;
        if (c) nextQuery.category = c;
        if (p) nextQuery.pattern = p;
      }
      router.push({
        pathname: "/",
        query: nextQuery,
      });
    }
  };

  const handleFinishDrill = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("active-curriculum-drill");
    }
    const origin = practice?.origin;
    exitPractice();
    if (origin && origin.pathname === "/curriculum") {
      router.push({ pathname: "/curriculum", query: origin.query || {} });
      return;
    }
    if (router.query.origin === "curriculum") {
      const q: Record<string, string> = {};
      if (typeof router.query.username === "string")
        q.username = router.query.username;
      if (typeof router.query.category === "string")
        q.category = router.query.category;
      if (typeof router.query.pattern === "string")
        q.pattern = router.query.pattern;
      router.push({ pathname: "/curriculum", query: q });
      return;
    }
    router.push("/curriculum");
  };

  const handleExitPractice = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("active-curriculum-drill");
    }
    const origin = practice?.origin;
    exitPractice();

    if (origin && origin.pathname === "/curriculum") {
      router.push({ pathname: "/curriculum", query: origin.query || {} });
      return;
    }
    if (router.query.origin === "curriculum") {
      const q: Record<string, string> = {};
      if (typeof router.query.username === "string")
        q.username = router.query.username;
      if (typeof router.query.category === "string")
        q.category = router.query.category;
      if (typeof router.query.pattern === "string")
        q.pattern = router.query.pattern;
      router.push({ pathname: "/curriculum", query: q });
      return;
    }

    if (router.query.practice) {
      router.replace(
        {
          pathname: router.pathname,
          query: router.query.gameId ? { gameId: router.query.gameId } : {},
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        flex: "2 1 31rem",
        minWidth: 0,
        minHeight: 0,
        height: "100%",
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        bgcolor: "#101c28",
        border: `2px solid ${isTactic ? "#ecb951" : "#63c5f3"}`,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Stack spacing={2.5} flex={1}>
        {/* Dedicated Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={1}
        >
          <Box>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
              mb={0.75}
            >
              {isDrill ? (
                <Chip
                  size="small"
                  label={`THEME DRILL · POSITION ${currentDrillIndex + 1} OF ${totalDrillCount}`}
                  sx={{
                    bgcolor: "#63c5f3",
                    color: "#0a1926",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                  }}
                />
              ) : (
                <Chip
                  size="small"
                  label={
                    isTactic ? "TACTICAL PRACTICE" : "TURNING POINT PRACTICE"
                  }
                  sx={{
                    bgcolor: isTactic ? "#ecb951" : "#63c5f3",
                    color: "#0a1926",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                  }}
                />
              )}
              {practice.drillThemeTitle && (
                <Chip
                  size="small"
                  label={practice.drillThemeTitle}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                />
              )}
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="text.secondary"
              >
                Move {moveNumberStr}
              </Typography>
            </Stack>

            <Typography variant="h6" fontWeight={800} color="#ffffff">
              {isTactic
                ? "Find the tactical opportunity you missed"
                : "Find the move that keeps your advantage"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.5}
              sx={{ maxWidth: 520 }}
            >
              {isTactic
                ? "There was a tactical opportunity in this position from your saved game. Can you find it? Make your move on the board."
                : "You had an advantage here. What should you have played at this critical moment? Make your move on the board."}
            </Typography>
          </Box>

          <Button
            size="small"
            variant="outlined"
            onClick={handleExitPractice}
            sx={{
              fontSize: "0.75rem",
              textTransform: "none",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "text.secondary",
              "&:hover": {
                borderColor: "#ffffff",
                color: "#ffffff",
              },
            }}
          >
            Exit practice ✕
          </Button>
        </Stack>

        {/* Position context note */}
        <Box
          sx={{
            p: 1.5,
            bgcolor: "rgba(255, 255, 255, 0.03)",
            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <Typography variant="caption" color="text.secondary" display="block">
            <b>POSITION:</b> Showing the board immediately before Move{" "}
            {moveNumberStr} for <b>{context.color.toUpperCase()}</b>. Play any
            legal move directly on the chessboard.
          </Typography>
        </Box>

        {/* Player attempted move display */}
        {practice.attemptedMove && (
          <Box
            sx={{
              px: 2,
              py: 1.25,
              bgcolor: "rgba(255, 255, 255, 0.06)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              YOUR ATTEMPT:
            </Typography>
            <Typography variant="body1" fontWeight={800} color="#63c5f3">
              {moveNumberStr} {practice.attemptedMove.san}
            </Typography>
          </Box>
        )}

        {/* Evaluation feedback when checked */}
        {status === "checked" && checkResult && (
          <Alert
            severity={
              checkResult.verdict === "best"
                ? "success"
                : checkResult.verdict === "alternative"
                  ? "info"
                  : checkResult.verdict === "inaccurate"
                    ? "warning"
                    : "error"
            }
            sx={{
              borderRadius: 2,
              bgcolor:
                checkResult.verdict === "best"
                  ? "rgba(34, 172, 56, 0.12)"
                  : checkResult.verdict === "alternative"
                    ? "rgba(99, 197, 243, 0.12)"
                    : checkResult.verdict === "inaccurate"
                      ? "rgba(236, 185, 81, 0.12)"
                      : "rgba(239, 107, 115, 0.12)",
              color: "#ffffff",
              border: "1px solid",
              borderColor:
                checkResult.verdict === "best"
                  ? "#22ac38"
                  : checkResult.verdict === "alternative"
                    ? "#63c5f3"
                    : checkResult.verdict === "inaccurate"
                      ? "#ecb951"
                      : "#ef6b73",
              "& .MuiAlert-icon": {
                color:
                  checkResult.verdict === "best"
                    ? "#22ac38"
                    : checkResult.verdict === "alternative"
                      ? "#63c5f3"
                      : checkResult.verdict === "inaccurate"
                        ? "#ecb951"
                        : "#ef6b73",
              },
            }}
          >
            <Typography variant="subtitle2" fontWeight={800} mb={0.5}>
              {checkResult.title}
            </Typography>
            <Typography variant="body2" mb={1}>
              {checkResult.explanation}
            </Typography>

            {checkResult.whyBetter && (
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
                mb={0.5}
              >
                <b>Impact:</b> {checkResult.whyBetter}
              </Typography>
            )}

            {checkResult.tacticalIdea && (
              <Typography
                variant="caption"
                display="block"
                color="#ecb951"
                mb={0.5}
              >
                <b>Tactical Motif:</b> {checkResult.tacticalIdea}
              </Typography>
            )}

            <Typography
              variant="caption"
              display="block"
              color="#8cdbac"
              fontWeight={700}
            >
              <b>Coach Tip:</b> {checkResult.coachingInsight}
            </Typography>
          </Alert>
        )}

        {/* Revealed Solution Card */}
        {status === "solution" && (
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: "rgba(99, 197, 243, 0.08)",
              border: "1px solid #63c5f3",
            }}
          >
            <Typography variant="subtitle2" fontWeight={800} color="#63c5f3">
              Solution: {moveNumberStr} {bestOptionSan}!
            </Typography>

            <Typography variant="body2" color="#ffffff" mt={0.75}>
              {context.whyItMatters || context.opportunity || context.lesson}
            </Typography>

            {context.tacticalMotif && (
              <Typography
                variant="caption"
                display="block"
                mt={0.75}
                color="#ecb951"
                fontWeight={700}
              >
                <b>Tactical Motif:</b> {context.tacticalMotif}
              </Typography>
            )}

            <Typography variant="body2" mt={0.75} color="text.secondary">
              <b>Key Idea:</b>{" "}
              {context.lesson ||
                (isTactic
                  ? "When you see checks, captures, or loose pieces, calculate forcing moves first."
                  : "Focus on piece coordination and king safety.")}
            </Typography>

            {context.principalVariationSan &&
              context.principalVariationSan.length > 0 && (
                <Typography
                  variant="caption"
                  display="block"
                  mt={1}
                  color="text.secondary"
                >
                  <b>Short Line:</b>{" "}
                  {context.principalVariationSan.slice(0, 6).join(" ")}
                </Typography>
              )}
          </Paper>
        )}

        <Box flex={1} />

        {/* ACTIONS BAR */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          pt={1}
          alignItems={{ sm: "center" }}
        >
          <Button
            variant="contained"
            disabled={!hasAttempted || status === "checked"}
            onClick={checkPracticeMove}
            sx={{
              bgcolor: "#22ac38",
              "&:hover": { bgcolor: "#19872c" },
              fontWeight: 800,
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "0.88rem",
            }}
          >
            Check My Move
          </Button>

          {hasAttempted && status !== "solution" && (
            <Button
              variant="outlined"
              onClick={retryPracticeMove}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
                px: 2.5,
                py: 1,
                fontSize: "0.88rem",
              }}
            >
              Try Another Move
            </Button>
          )}

          {status !== "solution" && (
            <Button
              variant="outlined"
              onClick={revealSolution}
              sx={{
                borderColor: isTactic ? "#ecb951" : "#63c5f3",
                color: isTactic ? "#ecb951" : "#63c5f3",
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { borderColor: "#ffffff", color: "#ffffff" },
                px: 3,
                py: 1,
                fontSize: "0.88rem",
              }}
            >
              Reveal Solution
            </Button>
          )}

          {status === "solution" && (
            <Button
              variant="outlined"
              onClick={retryPracticeMove}
              sx={{
                borderColor: "#63c5f3",
                color: "#63c5f3",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  bgcolor: "rgba(99, 197, 243, 0.08)",
                },
                px: 2.5,
                py: 1,
                fontSize: "0.88rem",
              }}
            >
              Practice Position Again
            </Button>
          )}

          {/* Sequential Theme Drill Advance Buttons */}
          {isDrill && (status === "checked" || status === "solution") && (
            <Box ml={{ sm: "auto" }} pt={{ xs: 1, sm: 0 }}>
              {hasNextDrill ? (
                <Button
                  variant="contained"
                  onClick={handleNextDrillPosition}
                  sx={{
                    bgcolor: "#238fc4",
                    "&:hover": { bgcolor: "#1a709c" },
                    fontWeight: 800,
                    textTransform: "none",
                    px: 2.5,
                    py: 1,
                    fontSize: "0.88rem",
                  }}
                >
                  Next Drill Position ({currentDrillIndex + 2}/{totalDrillCount}
                  ) →
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleFinishDrill}
                  sx={{
                    bgcolor: "#22ac38",
                    "&:hover": { bgcolor: "#19872c" },
                    fontWeight: 800,
                    textTransform: "none",
                    px: 2.5,
                    py: 1,
                    fontSize: "0.88rem",
                  }}
                >
                  Finish Drill & View Curriculum ✓
                </Button>
              )}
            </Box>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}
