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
import {
  activePracticeAtom,
  boardAtom,
} from "@/sections/analysis/states";
import { useGameNavigation } from "@/sections/analysis/hooks/useGameNavigation";

export default function PracticeMode() {
  const { practice, checkPracticeMove, revealSolution, exitPractice } =
    useGameNavigation();
  const board = useAtomValue(boardAtom);
  const [, setPractice] = useAtom(activePracticeAtom);

  // Passive board move detection: immediately syncs when user moves on board at ply - 1
  useEffect(() => {
    if (!practice?.isActive) return;

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
                status: "ready",
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
            <Stack direction="row" spacing={1} alignItems="center" mb={0.75}>
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
                ? "There was a tactical opportunity in this position. Can you find it? Make your move on the board."
                : "You had an advantage here. What should you have played at this critical moment? Make your move on the board."}
            </Typography>
          </Box>

          <Button
            size="small"
            variant="outlined"
            onClick={exitPractice}
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
            {moveNumberStr}. Play any legal move directly on the chessboard.
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

        {/* Checked Move Feedback Card */}
        {status === "checked" && checkResult && (
          <Alert
            severity={
              checkResult.verdict === "best" ||
              checkResult.verdict === "alternative"
                ? "success"
                : "warning"
            }
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor:
                checkResult.verdict === "best" ||
                checkResult.verdict === "alternative"
                  ? "rgba(34, 172, 56, 0.12)"
                  : "rgba(239, 107, 115, 0.12)",
              border: `1px solid ${
                checkResult.verdict === "best" ||
                checkResult.verdict === "alternative"
                  ? "#22ac38"
                  : "#ef6b73"
              }`,
            }}
          >
            <Typography variant="subtitle1" fontWeight={800}>
              {checkResult.title}
            </Typography>

            <Typography variant="body2" mt={0.5}>
              {checkResult.explanation}
            </Typography>

            {checkResult.betterMove && (
              <Box
                mt={1.5}
                p={1.25}
                bgcolor="rgba(0, 0, 0, 0.25)"
                borderRadius={1}
              >
                <Typography variant="caption" color="#8cdbac" fontWeight={700}>
                  BETTER MOVE:
                </Typography>
                <Typography variant="body2" fontWeight={800} color="#ffffff">
                  {checkResult.betterMove}
                </Typography>
                {checkResult.whyBetter && (
                  <Typography variant="body2" mt={0.5} color="text.secondary">
                    <b>Why:</b> {checkResult.whyBetter}
                  </Typography>
                )}
              </Box>
            )}

            {checkResult.tacticalIdea && (
              <Typography
                variant="caption"
                display="block"
                mt={1}
                color="#ecb951"
                fontWeight={700}
              >
                <b>Tactical Idea:</b> {checkResult.tacticalIdea}
              </Typography>
            )}

            {checkResult.evalImpact && (
              <Typography
                variant="caption"
                display="block"
                mt={0.5}
                color="inherit"
              >
                <b>Impact:</b> {checkResult.evalImpact}
              </Typography>
            )}

            {checkResult.coachingInsight && (
              <Typography
                variant="body2"
                display="block"
                mt={1}
                color="inherit"
                sx={{ fontStyle: "italic" }}
              >
                <b>Coach tip:</b> {checkResult.coachingInsight}
              </Typography>
            )}
          </Alert>
        )}

        {/* Revealed Solution Card */}
        {status === "solution" && (
          <Paper
            elevation={2}
            sx={{
              p: 2,
              bgcolor: isTactic
                ? "rgba(236, 185, 81, 0.1)"
                : "rgba(35, 143, 196, 0.12)",
              border: `1px solid ${isTactic ? "#ecb951" : "#238fc4"}`,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="caption"
              color={isTactic ? "#ecb951" : "#63c5f3"}
              fontWeight={800}
            >
              BEST MOVE
            </Typography>
            <Typography variant="h5" fontWeight={800} color="#ffffff" mt={0.25}>
              {moveNumberStr} {bestOptionSan} !
            </Typography>

            <Typography variant="body2" mt={1}>
              <b>Why it works:</b>{" "}
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

            {context.principalVariationSan.length > 0 && (
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

        {/* EXACTLY TWO ACTIONS: [ Check My Move ] and [ Reveal Solution ] */}
        <Stack direction="row" spacing={1.5} pt={1}>
          <Button
            variant="contained"
            disabled={!hasAttempted}
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
        </Stack>
      </Stack>
    </Paper>
  );
}

