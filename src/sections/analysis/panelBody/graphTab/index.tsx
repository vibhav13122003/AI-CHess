import {
  Box,
  Button,
  Chip,
  Divider,
  Grid2 as Grid,
  Grid2Props as GridProps,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { DotProps } from "recharts";
import {
  boardAtom,
  currentPositionAtom,
  gameAtom,
  gameEvalAtom,
} from "../../states";
import { useCallback, useMemo, useState } from "react";
import type { ReactElement } from "react";
import CustomTooltip from "./tooltip";
import CustomDot from "./dot";
import { ChartItemData, GraphFilterOption } from "./types";
import { CLASSIFICATION_COLORS } from "@/constants";
import { MoveClassification } from "@/types/enums";
import { useChessActions } from "@/hooks/useChessActions";
import { useGameNavigation } from "../../hooks/useGameNavigation";
import { buildChartDataset, computeGameStory } from "./graphUtils";
import InteractiveMoveChip from "@/components/InteractiveMoveChip";
import MovesPanel from "../classificationTab/movesPanel";

const filterOptions: { label: string; value: GraphFilterOption; color?: string }[] = [
  { label: "All Events", value: "all" },
  { label: "Turning Points", value: "turningPoints", color: "#63c5f3" },
  { label: "Tactics", value: "tactics", color: "#ecb951" },
  { label: "Blunders", value: "blunders", color: "#df5353" },
  { label: "Mistakes", value: "mistakes", color: "#e69f00" },
  { label: "Inaccuracies", value: "inaccuracies", color: "#f2be1f" },
  { label: "Best Moves", value: "bestMoves", color: "#22ac38" },
];

export default function GraphTab(props: GridProps) {
  const gameEval = useAtomValue(gameEvalAtom);
  const currentPosition = useAtomValue(currentPositionAtom);
  const game = useAtomValue(gameAtom);
  const { goToMove } = useChessActions(boardAtom);
  const { startPractice } = useGameNavigation();

  const [activeFilter, setActiveFilter] = useState<GraphFilterOption>("all");

  const bookLength = currentPosition.opening ? 16 : 0;

  // Build complete enriched chart dataset
  const { chartData, openingEndPly, endgameStartPly, biggestSwing } =
    useMemo(() => {
      if (!gameEval) {
        return {
          chartData: [],
          openingEndPly: 0,
          endgameStartPly: null,
          biggestSwing: undefined,
        };
      }
      return buildChartDataset(game, gameEval, bookLength);
    }, [game, gameEval, bookLength]);

  // Compute game story and phase performance statistics
  const gameStory = useMemo(() => {
    if (!chartData.length) return null;
    return computeGameStory(
      chartData,
      openingEndPly,
      endgameStartPly,
      currentPosition.opening
    );
  }, [chartData, openingEndPly, endgameStartPly, currentPosition.opening]);

  // Current move indicator color
  const boardMoveColor = currentPosition.eval?.moveClassification
    ? CLASSIFICATION_COLORS[currentPosition.eval.moveClassification]
    : "#63c5f3";

  // Render event dots based on active filter
  const renderDot = useCallback(
    (
      props: DotProps & { payload?: ChartItemData }
    ): ReactElement<SVGElement> => {
      const payload = props.payload;
      if (!payload || payload.moveNb === 0) return <svg key={props.key} />;

      return (
        <CustomDot
          {...props}
          key={props.key}
          payload={payload}
          activeFilter={activeFilter}
        />
      );
    },
    [activeFilter]
  );

  // Critical moments list
  const criticalMoments = useMemo(() => {
    return chartData
      .filter(
        (item) =>
          item.isTurningPoint ||
          item.isMissedTactic ||
          item.moveClassification === MoveClassification.Blunder ||
          item.moveClassification === MoveClassification.Mistake ||
          item.moveClassification === MoveClassification.Splendid
      )
      .slice(0, 8);
  }, [chartData]);

  const openingEndMove = Math.ceil(openingEndPly / 2);
  const endgameStartMove = endgameStartPly ? Math.ceil(endgameStartPly / 2) : null;

  return (
    <Grid
      container
      size={12}
      gap={2}
      flexGrow={1}
      minHeight={0}
      alignItems="stretch"
      {...props}
      sx={
        props.hidden
          ? { display: "none" }
          : { minHeight: 0, overflow: "hidden", ...props.sx }
      }
    >
      {/* Left Move Order Panel (Matching AI Review layout) */}
      <Paper
        elevation={0}
        sx={{
          flex: "1 1 19rem",
          minWidth: "17rem",
          minHeight: 0,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          bgcolor: "rgba(0,0,0,.15)",
          border: "1px solid rgba(255,255,255,.12)",
          "& #moves-panel": { width: "100%", flexGrow: 1 },
        }}
      >
        <Typography fontWeight={700} px={2} py={1.25}>
          Move order
        </Typography>
        <MovesPanel />
      </Paper>

      {/* Right Graph & Learning Dashboard (Downward Scrollable) */}
      <Paper
        elevation={0}
        sx={{
          flex: "2 1 31rem",
          minWidth: 0,
          minHeight: 0,
          height: "100%",
          p: { xs: 1.5, sm: 2.5 },
          borderRadius: 3,
          bgcolor: "#101c28",
          border: "1px solid #238fc4",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {!gameEval || !chartData.length ? (
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flex={1}
            p={3}
            textAlign="center"
          >
            <Typography variant="h6" fontWeight={800} color="#63c5f3">
              Game Evaluation Flow
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Evaluation curve, game phases, and decisive swing moments will appear here once the game evaluation is loaded.
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={2.5}>
            {/* 1. GRAPH HEADER & FILTERS */}
            <Stack spacing={1.5}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ sm: "center" }}
                gap={1}
              >
                <Box>
                  <Typography variant="h6" fontWeight={800} color="#63c5f3">
                    Evaluation Flow & Game Story
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Click any point or event on the graph to jump the board and moves
                  </Typography>
                </Box>

                {/* Quick Phase Badges */}
                <Stack direction="row" spacing={0.75} flexWrap="wrap" gap={0.5}>
                  <Chip
                    size="small"
                    label={`Opening (1–${openingEndMove})`}
                    sx={{
                      bgcolor: "rgba(99, 197, 243, 0.12)",
                      color: "#63c5f3",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  />
                  <Chip
                    size="small"
                    label={`Middlegame (${openingEndMove + 1}–${endgameStartMove || Math.ceil((chartData.length - 1) / 2)})`}
                    sx={{
                      bgcolor: "rgba(236, 185, 81, 0.12)",
                      color: "#ecb951",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  />
                  {endgameStartMove && (
                    <Chip
                      size="small"
                      label={`Endgame (${endgameStartMove}+)`}
                      sx={{
                        bgcolor: "rgba(72, 199, 142, 0.12)",
                        color: "#48c78e",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                      }}
                    />
                  )}
                </Stack>
              </Stack>

              {/* Filter Chips */}
              <Stack
                direction="row"
                spacing={0.75}
                flexWrap="wrap"
                gap={0.5}
                alignItems="center"
              >
                <Typography variant="caption" color="text.secondary" fontWeight={700}>
                  FILTER:
                </Typography>
                {filterOptions.map((opt) => {
                  const selected = activeFilter === opt.value;
                  return (
                    <Chip
                      key={opt.value}
                      size="small"
                      label={opt.label}
                      onClick={() => setActiveFilter(opt.value)}
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: selected ? 800 : 600,
                        bgcolor: selected
                          ? opt.color || "#238fc4"
                          : "rgba(255, 255, 255, 0.05)",
                        color: selected
                          ? opt.color === "#ecb951" || opt.color === "#63c5f3"
                            ? "#0a1926"
                            : "#ffffff"
                          : "text.secondary",
                        border: selected
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        "&:hover": {
                          bgcolor: selected
                            ? opt.color || "#238fc4"
                            : "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    />
                  );
                })}
              </Stack>

              {/* THE INTERACTIVE AREA CHART */}
              <Box
                sx={{
                  height: 200,
                  width: "100%",
                  bgcolor: "#142331",
                  borderRadius: 2,
                  p: 1,
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  position: "relative",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 12, left: 4, right: 8, bottom: 0 }}
                    onClick={(e) => {
                      const payload = e?.activePayload?.[0]?.payload as
                        | ChartItemData
                        | undefined;
                      if (!payload) return;
                      goToMove(payload.moveNb, game);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <XAxis
                      dataKey="moveNb"
                      tick={{ fill: "#8fa3b8", fontSize: 10 }}
                      tickFormatter={(val: number) =>
                        val === 0 ? "" : val % 2 === 0 ? `${val / 2}` : ""
                      }
                      stroke="rgba(255,255,255,0.15)"
                      interval={3}
                    />
                    <YAxis domain={[0, 20]} hide />

                    <Tooltip
                      content={<CustomTooltip />}
                      isAnimationActive={false}
                      cursor={{
                        stroke: "#63c5f3",
                        strokeWidth: 1.5,
                        strokeOpacity: 0.6,
                      }}
                    />

                    {/* Opening / Middlegame Divider */}
                    {openingEndPly > 0 && openingEndPly < chartData.length && (
                      <ReferenceLine
                        x={openingEndPly}
                        stroke="#63c5f3"
                        strokeDasharray="3 3"
                        strokeOpacity={0.4}
                        label={{
                          value: "MIDDLEGAME",
                          position: "insideTopRight",
                          fill: "#63c5f3",
                          fontSize: 9,
                          fontWeight: 700,
                        }}
                      />
                    )}

                    {/* Middlegame / Endgame Divider */}
                    {endgameStartPly && endgameStartPly < chartData.length && (
                      <ReferenceLine
                        x={endgameStartPly}
                        stroke="#48c78e"
                        strokeDasharray="3 3"
                        strokeOpacity={0.4}
                        label={{
                          value: "ENDGAME",
                          position: "insideTopRight",
                          fill: "#48c78e",
                          fontSize: 9,
                          fontWeight: 700,
                        }}
                      />
                    )}

                    {/* Zero evaluation baseline (y=10) */}
                    <ReferenceLine
                      y={10}
                      stroke="rgba(255, 255, 255, 0.25)"
                      strokeWidth={1.5}
                    />

                    {/* Synchronized Current Move Cursor */}
                    {currentPosition.currentMoveIdx !== undefined && (
                      <ReferenceLine
                        x={currentPosition.currentMoveIdx}
                        stroke={boardMoveColor}
                        strokeWidth={3.5}
                        strokeOpacity={0.85}
                      />
                    )}

                    {/* White advantage area curve */}
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#63c5f3"
                      strokeWidth={1.5}
                      fill="#ffffff"
                      fillOpacity={0.9}
                      dot={renderDot}
                      activeDot={<CustomDot activeFilter={activeFilter} />}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Stack>

            {/* 2. BIGGEST SWING SECTION */}
            {biggestSwing && (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "rgba(255, 255, 255, 0.035)",
                  borderLeft: "4px solid #ef6b73",
                  borderRadius: 2,
                  border: "1px solid rgba(239, 107, 115, 0.3)",
                }}
              >
                <Stack spacing={1.25}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={1}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle2" fontWeight={800} color="#ef6b73">
                        BIGGEST SWING
                      </Typography>
                      <InteractiveMoveChip
                        san={`${biggestSwing.moveNumber}${biggestSwing.color === "w" ? "." : "..."} ${biggestSwing.san}`}
                        ply={biggestSwing.moveNb}
                        color={biggestSwing.color === "w" ? "white" : "black"}
                      />
                    </Stack>

                    <Typography variant="caption" color="text.secondary" fontWeight={700}>
                      {biggestSwing.evalBeforeLabel} → {biggestSwing.evalAfterLabel} (Δ{" "}
                      {Math.abs(biggestSwing.evalDiff || 0).toFixed(0)}%)
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="#ffffff">
                    {biggestSwing.explanation ||
                      "This was the most decisive turning point in the game where the evaluation swung dramatically."}
                  </Typography>

                  {biggestSwing.betterMoveSan && (
                    <Typography variant="caption" color="#8cdbac" fontWeight={700}>
                      Better continuation: {biggestSwing.betterMoveSan}!
                    </Typography>
                  )}

                  <Stack direction="row" spacing={1} pt={0.5}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => goToMove(biggestSwing.moveNb, game)}
                      sx={{
                        fontSize: "0.75rem",
                        borderColor: "#63c5f3",
                        color: "#63c5f3",
                        fontWeight: 700,
                        textTransform: "none",
                      }}
                    >
                      View Position
                    </Button>

                    {biggestSwing.practiceContext && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => startPractice(biggestSwing.practiceContext!)}
                        sx={{
                          bgcolor: "#238fc4",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#1a709c" },
                        }}
                      >
                        Practice Position
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Paper>
            )}

            {/* 3. PHASE PERFORMANCE & ERROR BREAKDOWN */}
            {gameStory && (
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" fontWeight={800} color="#63c5f3">
                  Phase Performance & Mistakes
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  {/* Opening Card */}
                  <Paper
                    sx={{
                      flex: 1,
                      p: 1.5,
                      bgcolor: "rgba(255,255,255,0.035)",
                      borderTop: "3px solid #63c5f3",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="caption" color="#63c5f3" fontWeight={800}>
                      OPENING · {gameStory.opening.moveRange}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" my={0.75}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          WHITE ACCURACY
                        </Typography>
                        <Typography variant="h6" fontWeight={800} color="#ffffff">
                          {gameStory.opening.accuracyWhite}%
                        </Typography>
                      </Box>
                      <Box textAlign="right">
                        <Typography variant="caption" color="text.secondary">
                          BLACK ACCURACY
                        </Typography>
                        <Typography variant="h6" fontWeight={800} color="#ffffff">
                          {gameStory.opening.accuracyBlack}%
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Errors: W {gameStory.opening.mistakesWhite + gameStory.opening.blundersWhite} · B{" "}
                      {gameStory.opening.mistakesBlack + gameStory.opening.blundersBlack}
                    </Typography>
                  </Paper>

                  {/* Middlegame Card */}
                  <Paper
                    sx={{
                      flex: 1,
                      p: 1.5,
                      bgcolor: "rgba(255,255,255,0.035)",
                      borderTop: "3px solid #ecb951",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="caption" color="#ecb951" fontWeight={800}>
                      MIDDLEGAME · {gameStory.middlegame.moveRange}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" my={0.75}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          WHITE ACCURACY
                        </Typography>
                        <Typography variant="h6" fontWeight={800} color="#ffffff">
                          {gameStory.middlegame.accuracyWhite}%
                        </Typography>
                      </Box>
                      <Box textAlign="right">
                        <Typography variant="caption" color="text.secondary">
                          BLACK ACCURACY
                        </Typography>
                        <Typography variant="h6" fontWeight={800} color="#ffffff">
                          {gameStory.middlegame.accuracyBlack}%
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Errors: W {gameStory.middlegame.mistakesWhite + gameStory.middlegame.blundersWhite} · B{" "}
                      {gameStory.middlegame.mistakesBlack + gameStory.middlegame.blundersBlack}
                    </Typography>
                  </Paper>

                  {/* Endgame Card */}
                  {gameStory.endgame ? (
                    <Paper
                      sx={{
                        flex: 1,
                        p: 1.5,
                        bgcolor: "rgba(255,255,255,0.035)",
                        borderTop: "3px solid #48c78e",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="caption" color="#48c78e" fontWeight={800}>
                        ENDGAME · {gameStory.endgame.moveRange}
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" my={0.75}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            WHITE ACCURACY
                          </Typography>
                          <Typography variant="h6" fontWeight={800} color="#ffffff">
                            {gameStory.endgame.accuracyWhite}%
                          </Typography>
                        </Box>
                        <Box textAlign="right">
                          <Typography variant="caption" color="text.secondary">
                            BLACK ACCURACY
                          </Typography>
                          <Typography variant="h6" fontWeight={800} color="#ffffff">
                            {gameStory.endgame.accuracyBlack}%
                          </Typography>
                        </Box>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        Errors: W {gameStory.endgame.mistakesWhite + gameStory.endgame.blundersWhite} · B{" "}
                        {gameStory.endgame.mistakesBlack + gameStory.endgame.blundersBlack}
                      </Typography>
                    </Paper>
                  ) : (
                    <Paper
                      sx={{
                        flex: 1,
                        p: 1.5,
                        bgcolor: "rgba(255,255,255,0.02)",
                        borderTop: "3px solid rgba(255,255,255,0.1)",
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" fontWeight={700}>
                        ENDGAME
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mt={0.5}>
                        Game concluded in the middlegame before technical endgame.
                      </Typography>
                    </Paper>
                  )}
                </Stack>

                {/* Tactical vs Positional Error summary */}
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  p={1.25}
                  bgcolor="rgba(255,255,255,0.025)"
                  borderRadius={2}
                  border="1px solid rgba(255,255,255,0.06)"
                >
                  <Typography variant="caption" color="text.secondary" fontWeight={700}>
                    ERROR TYPE DISTRIBUTION:
                  </Typography>
                  <Chip
                    size="small"
                    label={`Tactical Errors: ${gameStory.tacticalErrorsCount}`}
                    sx={{
                      bgcolor: "rgba(236, 185, 81, 0.15)",
                      color: "#ecb951",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                    }}
                  />
                  <Chip
                    size="small"
                    label={`Positional Errors: ${gameStory.positionalErrorsCount}`}
                    sx={{
                      bgcolor: "rgba(99, 197, 243, 0.15)",
                      color: "#63c5f3",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                    }}
                  />
                </Stack>
              </Stack>
            )}

            {/* 4. GAME STORY (3-PHASE NARRATIVE) */}
            {gameStory && (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "rgba(255, 255, 255, 0.035)",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography variant="subtitle1" fontWeight={800} color="#63c5f3" mb={1.25}>
                  Game Story
                </Typography>

                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="caption" color="#63c5f3" fontWeight={800}>
                      1. OPENING ({gameStory.opening.moveRange})
                    </Typography>
                    <Typography variant="body2" color="#ffffff" mt={0.25}>
                      {gameStory.opening.narrative}
                    </Typography>
                  </Box>

                  <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

                  <Box>
                    <Typography variant="caption" color="#ecb951" fontWeight={800}>
                      2. MIDDLEGAME ({gameStory.middlegame.moveRange})
                    </Typography>
                    <Typography variant="body2" color="#ffffff" mt={0.25}>
                      {gameStory.middlegame.narrative}
                    </Typography>
                  </Box>

                  {gameStory.endgame && (
                    <>
                      <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
                      <Box>
                        <Typography variant="caption" color="#48c78e" fontWeight={800}>
                          3. ENDGAME ({gameStory.endgame.moveRange})
                        </Typography>
                        <Typography variant="body2" color="#ffffff" mt={0.25}>
                          {gameStory.endgame.narrative}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Stack>
              </Paper>
            )}

            {/* 5. CRITICAL MOMENTS TIMELINE */}
            {criticalMoments.length > 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "rgba(255, 255, 255, 0.035)",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography variant="subtitle1" fontWeight={800} color="#63c5f3" mb={1.25}>
                  Critical Moments Timeline
                </Typography>

                <Stack spacing={1}>
                  {criticalMoments.map((moment) => {
                    const isWhite = moment.color === "w";
                    const moveNumStr = `${moment.moveNumber}${isWhite ? "." : "..."}`;
                    const cls = moment.moveClassification || MoveClassification.Mistake;
                    const color = CLASSIFICATION_COLORS[cls] || "#ef6b73";

                    return (
                      <Stack
                        key={moment.moveNb}
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems={{ sm: "center" }}
                        gap={1}
                        sx={{
                          p: 1.25,
                          bgcolor: "rgba(255,255,255,0.025)",
                          borderRadius: 1.5,
                          borderLeft: `3px solid ${moment.isTurningPoint ? "#63c5f3" : moment.isMissedTactic ? "#ecb951" : color}`,
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                          <InteractiveMoveChip
                            san={`${moveNumStr} ${moment.san}`}
                            ply={moment.moveNb}
                            color={isWhite ? "white" : "black"}
                          />
                          <Chip
                            size="small"
                            label={
                              moment.isTurningPoint
                                ? "TURNING POINT"
                                : moment.isMissedTactic
                                  ? "MISSED TACTIC"
                                  : cls.toUpperCase()
                            }
                            sx={{
                              fontSize: "0.68rem",
                              height: 20,
                              fontWeight: 700,
                              bgcolor: `${color}22`,
                              color,
                            }}
                          />
                          <Typography variant="caption" color="text.secondary" fontWeight={600}>
                            {moment.evalBeforeLabel} → {moment.evalAfterLabel}
                          </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                          {moment.betterMoveSan && (
                            <Typography variant="caption" color="#8cdbac" fontWeight={700}>
                              Better: {moment.betterMoveSan}!
                            </Typography>
                          )}
                          {moment.practiceContext && (
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => startPractice(moment.practiceContext!)}
                              sx={{
                                fontSize: "0.72rem",
                                borderColor: "#63c5f3",
                                color: "#63c5f3",
                                fontWeight: 700,
                                textTransform: "none",
                                py: 0.25,
                                px: 1,
                              }}
                            >
                              Practice
                            </Button>
                          )}
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>
              </Paper>
            )}

            {/* 6. LEARNING SUMMARY (WHAT TO WORK ON) */}
            {gameStory && gameStory.takeaways.length > 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "rgba(255, 255, 255, 0.035)",
                  borderRadius: 2,
                  borderTop: "3px solid #48c78e",
                  border: "1px solid rgba(72, 199, 142, 0.3)",
                }}
              >
                <Typography variant="subtitle1" fontWeight={800} color="#48c78e" mb={1}>
                  What To Work On
                </Typography>

                <Stack spacing={1}>
                  {gameStory.takeaways.map((takeaway, idx) => (
                    <Stack key={idx} direction="row" spacing={1} alignItems="flex-start">
                      <Typography color="#48c78e" fontWeight={800}>
                        ✓
                      </Typography>
                      <Typography variant="body2" color="#ffffff" flex={1}>
                        {takeaway}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            )}
          </Stack>
        )}
      </Paper>
    </Grid>
  );
}
