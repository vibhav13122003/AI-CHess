import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { getEvaluateGameParams } from "@/lib/chess";
import {
  FinalGameReview,
  PerformanceSnapshot,
  PracticeContext,
  TacticalOpportunity,
  TurningPoint,
} from "@/types/ai";
import { activePracticeAtom, gameAtom, gameEvalAtom } from "../../states";
import { useGameNavigation } from "../../hooks/useGameNavigation";
import InteractiveChessText from "@/components/InteractiveChessText";
import InteractiveMoveChip from "@/components/InteractiveMoveChip";
import { CLASSIFICATION_COLORS } from "@/constants";
import { MoveClassification } from "@/types/enums";
import PracticeMode from "./practiceMode";

const tabs = [
  "Overview",
  "Turning points",
  "Tactics",
  "Position",
  "Strengths",
  "Training",
];

export default function AiGameReview() {
  const game = useAtomValue(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);
  const practice = useAtomValue(activePracticeAtom);
  const [review, setReview] = useState<FinalGameReview>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);

  // Dedicated Hard UI Mode: When Practice is active, immediately render PracticeMode
  if (practice?.isActive) {
    return <PracticeMode />;
  }

  const generateReview = async () => {
    if (!gameEval) return;

    setLoading(true);
    setError(undefined);
    try {
      const params = getEvaluateGameParams(game);
      const response = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pgn: game.pgn(),
          fens: params.fens,
          moves: params.uciMoves,
          gameEval,
        }),
      });
      const payload = (await response.json()) as
        | FinalGameReview
        | { error?: string };
      if (!response.ok || "error" in payload) {
        throw new Error(
          ("error" in payload && payload.error) ||
            "Unable to generate AI review"
        );
      }
      setReview(payload as FinalGameReview);
      setTab(0);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to generate AI review"
      );
    } finally {
      setLoading(false);
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
        p: { xs: 1.5, sm: 2.5 },
        borderRadius: 3,
        bgcolor: "#101c28",
        border: "1px solid #238fc4",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={2} height="100%" minHeight={0} flex={1}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "center" }}
          gap={1}
        >
          <Box>
            <Typography variant="h6" fontWeight={800} color="#63c5f3">
              AI Game Review
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              Stockfish-backed master coaching & interactive practice
            </Typography>
          </Box>
          <Button
            variant="contained"
            disabled={!gameEval || loading}
            onClick={generateReview}
            sx={{
              minWidth: 160,
              bgcolor: "#238fc4",
              "&:hover": { bgcolor: "#1a709c" },
            }}
          >
            {loading ? (
              <CircularProgress size={18} color="inherit" />
            ) : review ? (
              "Refresh review"
            ) : (
              "Generate review"
            )}
          </Button>
        </Stack>

        {error && (
          <Alert
            severity="warning"
            onClose={() => setError(undefined)}
            sx={{ py: 0.5 }}
          >
            {error}
          </Alert>
        )}

        {!review && !loading && <EmptyState />}
        {loading && <LoadingState />}

        {review && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <Tabs
              value={tab}
              onChange={(_, value) => setTab(value)}
              variant="fullWidth"
              sx={{
                minHeight: 36,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                "& .MuiTab-root": {
                  minWidth: 0,
                  minHeight: 36,
                  py: 0.5,
                  px: { xs: 0.25, sm: 1 },
                  fontSize: { xs: "0.68rem", sm: "0.78rem" },
                  fontWeight: 700,
                  textTransform: "none",
                },
              }}
            >
              {tabs.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>

            <Box
              sx={{
                pt: 1.5,
                minHeight: 0,
                flex: 1,
                overflowY: "auto",
                pr: 0.75,
              }}
            >
              {tab === 0 && <OverviewTab review={review} />}
              {tab === 1 && <TurningPointsTab review={review} />}
              {tab === 2 && <TacticsTab review={review} />}
              {tab === 3 && <PositionTab review={review} />}
              {tab === 4 && <StrengthsTab review={review} />}
              {tab === 5 && <TrainingTab review={review} />}
            </Box>
          </Box>
        )}
      </Stack>
    </Paper>
  );
}

// -------------------------------------------------------------
// TAB 1: OVERVIEW — LEVEL 1 (What happened?) & PERFORMANCE SNAPSHOT
// -------------------------------------------------------------
function OverviewTab({ review }: { review: FinalGameReview }) {
  const { startPractice } = useGameNavigation();
  const topMistake = review.biggestTurningPoint || review.turningPoints[0];

  const toPracticeContext = (point: TurningPoint): PracticeContext => ({
    source: "turning-point",
    ply: point.ply,
    moveNumber: point.moveNumber,
    color: point.color,
    fen: point.fen,
    playedSan: point.san,
    playedUci: point.move,
    bestMove: point.bestMove || point.alternatives[0]?.move || "",
    bestMoveSan:
      point.alternatives[0]?.san ||
      point.principalVariationSan[0] ||
      point.bestMove ||
      "Best move",
    evaluationBefore: point.evaluationBefore,
    evaluationAfter: point.evaluationAfter,
    evaluationChange: point.evaluationChange,
    principalVariationSan: point.principalVariationSan,
    principalVariation: point.principalVariation,
    alternatives: point.alternatives,
    whyItMatters: point.whyItMatters,
    beforeSituation: point.beforeSituation,
    afterSituation: point.afterSituation,
    lesson: point.lesson,
    opponentThreat: point.opponentThreat,
    tacticalMotif: point.tacticalMotif,
  });

  return (
    <Stack spacing={2}>
      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #63c5f3",
        }}
      >
        <Typography fontWeight={800} color="#63c5f3" mb={1}>
          Game Summary
        </Typography>
        <InteractiveChessText text={review.gameSummary} />
      </Paper>

      {review.performanceSnapshot && (
        <PerformanceSnapshotCard snapshot={review.performanceSnapshot} />
      )}

      {topMistake && (
        <Paper
          sx={{
            p: 2,
            bgcolor: "rgba(255,255,255,0.035)",
            borderTop: "3px solid #ef6b73",
          }}
        >
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={800} color="#ef6b73">
                Biggest Turning Point
              </Typography>
              <InteractiveMoveChip
                san={`${topMistake.moveNumber}${topMistake.color === "white" ? "." : "..."} ${topMistake.san}`}
                ply={topMistake.ply}
                color={topMistake.color}
              />
            </Stack>

            <Typography variant="body2">
              <InteractiveChessText text={topMistake.explanation} />
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pt={0.5}
            >
              <Typography variant="caption" color="text.secondary">
                Win chance: {Math.round(topMistake.evaluationBefore)}% →{" "}
                {Math.round(topMistake.evaluationAfter)}%
              </Typography>
              <Button
                size="small"
                variant="contained"
                onClick={() => startPractice(toPracticeContext(topMistake))}
                sx={{
                  bgcolor: "#238fc4",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Practice Position
              </Button>
            </Stack>
          </Stack>
        </Paper>
      )}

      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #48c78e",
        }}
      >
        <Typography fontWeight={800} color="#48c78e" mb={1}>
          Main Takeaway
        </Typography>
        <InteractiveChessText text={review.mainLesson} />
      </Paper>
    </Stack>
  );
}

function PerformanceSnapshotCard({
  snapshot,
}: {
  snapshot: PerformanceSnapshot;
}) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "rgba(255,255,255,0.035)",
        borderTop: "3px solid #ecb951",
      }}
    >
      <Typography fontWeight={800} color="#ecb951" mb={1.5}>
        Performance Snapshot
      </Typography>

      <Stack spacing={1.5}>
        <Stack direction="row" spacing={2} justifyContent="space-around">
          <Box textAlign="center">
            <Typography variant="caption" color="text.secondary">
              WHITE ACCURACY
            </Typography>
            <Typography variant="h6" fontWeight={800} color="#ffffff">
              {snapshot.accuracy.white}%
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box textAlign="center">
            <Typography variant="caption" color="text.secondary">
              BLACK ACCURACY
            </Typography>
            <Typography variant="h6" fontWeight={800} color="#ffffff">
              {snapshot.accuracy.black}%
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          gap={0.5}
        >
          <Chip
            size="small"
            label={`Blunders: W ${snapshot.blunders.white} · B ${snapshot.blunders.black}`}
            sx={{
              bgcolor: "rgba(223, 83, 83, 0.15)",
              color: "#df5353",
              fontWeight: 700,
            }}
          />
          <Chip
            size="small"
            label={`Mistakes: W ${snapshot.mistakes.white} · B ${snapshot.mistakes.black}`}
            sx={{
              bgcolor: "rgba(230, 159, 0, 0.15)",
              color: "#e69f00",
              fontWeight: 700,
            }}
          />
          <Chip
            size="small"
            label={`Inaccuracies: W ${snapshot.inaccuracies.white} · B ${snapshot.inaccuracies.black}`}
            sx={{
              bgcolor: "rgba(242, 190, 31, 0.15)",
              color: "#f2be1f",
              fontWeight: 700,
            }}
          />
          <Chip
            size="small"
            label={`Best/Splendid: W ${snapshot.bestMoves.white} · B ${snapshot.bestMoves.black}`}
            sx={{
              bgcolor: "rgba(34, 172, 56, 0.15)",
              color: "#22ac38",
              fontWeight: 700,
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

// -------------------------------------------------------------
// TAB 2: TURNING POINTS — LEVEL 2 (Game Direction / Trajectory)
// -------------------------------------------------------------
function TurningPointsTab({ review }: { review: FinalGameReview }) {
  if (!review.turningPoints.length) {
    return (
      <Paper sx={{ p: 2, bgcolor: "rgba(255,255,255,0.035)" }}>
        <Typography variant="body2" color="text.secondary">
          No significant turning points detected in this game. Both sides played
          stably.
        </Typography>
      </Paper>
    );
  }

  return (
    <Stack spacing={1.5}>
      {review.turningPoints.map((point) => (
        <TurningPointCard key={point.ply} point={point} />
      ))}
    </Stack>
  );
}

function TurningPointCard({ point }: { point: TurningPoint }) {
  const { startPractice } = useGameNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const isWhite = point.color === "white";
  const moveNumberStr = `${point.moveNumber}${isWhite ? "." : "..."}`;
  const classification = (point.classification ||
    "Mistake") as MoveClassification;
  const badgeColor = CLASSIFICATION_COLORS[classification] || "#ef6b73";

  const toPracticeContext = (): PracticeContext => ({
    source: "turning-point",
    ply: point.ply,
    moveNumber: point.moveNumber,
    color: point.color,
    fen: point.fen,
    playedSan: point.san,
    playedUci: point.move,
    bestMove: point.bestMove || point.alternatives[0]?.move || "",
    bestMoveSan:
      point.alternatives[0]?.san ||
      point.principalVariationSan[0] ||
      point.bestMove ||
      "Best move",
    evaluationBefore: point.evaluationBefore,
    evaluationAfter: point.evaluationAfter,
    evaluationChange: point.evaluationChange,
    principalVariationSan: point.principalVariationSan,
    principalVariation: point.principalVariation,
    alternatives: point.alternatives,
    whyItMatters: point.whyItMatters,
    beforeSituation: point.beforeSituation,
    afterSituation: point.afterSituation,
    lesson: point.lesson,
    opponentThreat: point.opponentThreat,
    tacticalMotif: point.tacticalMotif,
  });

  return (
    <Paper
      sx={{
        p: 2,
        borderLeft: `4px solid ${badgeColor}`,
        bgcolor: "rgba(255,255,255,0.035)",
        borderRadius: 2,
      }}
    >
      <Stack spacing={1.25}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
            <InteractiveMoveChip
              san={`${moveNumberStr} ${point.san}`}
              ply={point.ply}
              color={point.color}
              size="medium"
            />
            <Chip
              size="small"
              label={
                point.classification
                  ? point.classification.toUpperCase()
                  : "TURNING POINT"
              }
              sx={{
                bgcolor: `${badgeColor}22`,
                color: badgeColor,
                fontWeight: 700,
                fontSize: "0.7rem",
              }}
            />
          </Stack>

          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {Math.round(point.evaluationBefore)}% →{" "}
            {Math.round(point.evaluationAfter)}%
          </Typography>
        </Stack>

        <Box>
          <Typography variant="caption" color="text.secondary" fontWeight={700}>
            WHY IT MATTERS:
          </Typography>
          <InteractiveChessText
            text={point.whyItMatters || point.explanation}
          />
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ p: 1, bgcolor: "rgba(0,0,0,0.2)", borderRadius: 1 }}
        >
          <Box flex={1}>
            <Typography variant="caption" color="#8cdbac" fontWeight={700}>
              BEFORE:
            </Typography>
            <InteractiveChessText
              text={
                point.beforeSituation ||
                `Win chance was ${Math.round(point.evaluationBefore)}%.`
              }
            />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box flex={1}>
            <Typography variant="caption" color="#ef6b73" fontWeight={700}>
              AFTER:
            </Typography>
            <InteractiveChessText
              text={
                point.afterSituation ||
                `Win chance dropped to ${Math.round(point.evaluationAfter)}%.`
              }
            />
          </Box>
        </Stack>

        {point.opponentThreat && (
          <Alert severity="warning" sx={{ py: 0.25, fontSize: "0.8rem" }}>
            <b>Threat:</b> {point.opponentThreat}
          </Alert>
        )}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          flexWrap="wrap"
          gap={0.5}
        >
          <Typography variant="caption" color="text.secondary">
            BETTER:
          </Typography>
          {point.alternatives.slice(0, 3).map((alt) => (
            <InteractiveMoveChip
              key={alt.san}
              san={alt.san}
              score={alt.score}
              color={point.color}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={0.5}
        >
          <Button
            size="small"
            onClick={() => setShowDetails((val) => !val)}
            sx={{
              fontSize: "0.75rem",
              textTransform: "none",
              color: "text.secondary",
            }}
          >
            {showDetails ? "Hide details" : "Coaching insight"}
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={() => startPractice(toPracticeContext())}
            sx={{
              bgcolor: "#238fc4",
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#1a709c" },
            }}
          >
            Practice Position
          </Button>
        </Stack>

        <Collapse in={showDetails}>
          <Box
            sx={{
              p: 1.5,
              mt: 0.5,
              bgcolor: "rgba(0, 0, 0, 0.25)",
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color="#8cdbac">
              <b>Coaching Takeaway:</b> {point.lesson}
            </Typography>
            {point.principalVariationSan.length > 0 && (
              <Typography
                variant="caption"
                display="block"
                mt={0.5}
                color="text.secondary"
              >
                <b>Engine Line:</b> {point.principalVariationSan.join(" ")}
              </Typography>
            )}
          </Box>
        </Collapse>
      </Stack>
    </Paper>
  );
}

// -------------------------------------------------------------
// TAB 3: TACTICS — LEVEL 3 (Missed Tactical Opportunities)
// -------------------------------------------------------------
function TacticsTab({ review }: { review: FinalGameReview }) {
  const tacticalOpportunities = review.tacticalOpportunities || [];

  return (
    <Stack spacing={2}>
      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #ecb951",
        }}
      >
        <Typography fontWeight={800} color="#ecb951" mb={1}>
          Tactical Analysis
        </Typography>
        <InteractiveChessText text={review.tacticalAnalysis.content} />
      </Paper>

      {tacticalOpportunities.length > 0 && (
        <Stack spacing={1.5}>
          <Typography
            variant="subtitle2"
            fontWeight={800}
            color="text.secondary"
          >
            MISSED TACTICAL OPPORTUNITIES
          </Typography>
          {tacticalOpportunities.map((tactical) => (
            <TacticalOpportunityCard key={tactical.ply} tactical={tactical} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

function TacticalOpportunityCard({
  tactical,
}: {
  tactical: TacticalOpportunity;
}) {
  const { startPractice } = useGameNavigation();
  const [showSolution, setShowSolution] = useState(false);
  const isWhite = tactical.color === "white";
  const moveNumberStr = `${tactical.moveNumber}${isWhite ? "." : "..."}`;

  const toPracticeContext = (): PracticeContext => ({
    source: "tactic",
    ply: tactical.ply,
    moveNumber: tactical.moveNumber,
    color: tactical.color,
    fen: tactical.fen,
    playedSan: tactical.san,
    playedUci: tactical.move,
    bestMove: tactical.bestMove,
    bestMoveSan: tactical.bestMoveSan,
    evaluationBefore: 50,
    evaluationAfter: 20,
    evaluationChange: -30,
    principalVariationSan: tactical.principalVariationSan,
    principalVariation: tactical.principalVariation,
    alternatives: tactical.alternatives,
    tacticalMotif: tactical.tacticalMotif,
    opportunity: tactical.opportunity,
    resultExplanation: tactical.resultExplanation,
    lesson:
      "When you have checks, captures, or loose pieces available, calculate forcing moves before quiet moves.",
  });

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "rgba(255,255,255,0.035)",
        borderLeft: "4px solid #ecb951",
        borderRadius: 2,
      }}
    >
      <Stack spacing={1.25}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle2" fontWeight={800} color="#ffffff">
              Move {moveNumberStr}
            </Typography>
            <Chip
              size="small"
              label={tactical.tacticalMotif}
              sx={{
                bgcolor: "rgba(236, 185, 81, 0.15)",
                color: "#ecb951",
                fontWeight: 700,
              }}
            />
          </Stack>
        </Stack>

        <Box sx={{ p: 1, bgcolor: "rgba(0,0,0,0.2)", borderRadius: 1 }}>
          <Typography variant="caption" color="text.secondary">
            YOU PLAYED:
          </Typography>
          <Box display="inline-block" ml={1}>
            <InteractiveMoveChip
              san={`${moveNumberStr} ${tactical.san}`}
              ply={tactical.ply}
              color={tactical.color}
            />
          </Box>

          <Box mt={0.5}>
            <Typography variant="caption" color="#48c78e" fontWeight={700}>
              YOU COULD HAVE PLAYED:
            </Typography>
            <Box display="inline-block" ml={1}>
              <InteractiveMoveChip
                san={tactical.bestMoveSan}
                color={tactical.color}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary" fontWeight={700}>
            OPPORTUNITY:
          </Typography>
          <InteractiveChessText text={tactical.opportunity} />
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary" fontWeight={700}>
            RESULT:
          </Typography>
          <InteractiveChessText
            text={tactical.resultExplanation || tactical.explanation}
          />
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={0.5}
        >
          <Button
            size="small"
            onClick={() => setShowSolution((val) => !val)}
            sx={{
              fontSize: "0.75rem",
              textTransform: "none",
              color: "text.secondary",
            }}
          >
            {showSolution ? "Hide solution" : "Show solution"}
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={() => startPractice(toPracticeContext())}
            sx={{
              bgcolor: "#ecb951",
              color: "#0d1a24",
              fontWeight: 800,
              fontSize: "0.75rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#dba43f" },
            }}
          >
            Practice Position
          </Button>
        </Stack>

        <Collapse in={showSolution}>
          <Box
            sx={{
              p: 1.5,
              mt: 0.5,
              bgcolor: "rgba(0, 0, 0, 0.25)",
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" color="#48c78e" fontWeight={700}>
              BEST MOVE:
            </Typography>
            <Box display="inline-block" ml={1}>
              <InteractiveMoveChip
                san={tactical.bestMoveSan}
                color={tactical.color}
              />
            </Box>
            <Typography variant="body2" mt={0.5} color="text.secondary">
              <b>Idea:</b> {tactical.explanation}
            </Typography>
          </Box>
        </Collapse>
      </Stack>
    </Paper>
  );
}

// -------------------------------------------------------------
// TAB 4: POSITION & STRATEGY
// -------------------------------------------------------------
function PositionTab({ review }: { review: FinalGameReview }) {
  return (
    <Stack spacing={2}>
      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #bb9cf4",
        }}
      >
        <Typography fontWeight={800} color="#bb9cf4" mb={1}>
          Positional Analysis
        </Typography>
        <InteractiveChessText text={review.positionalAnalysis.content} />
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #63c5f3",
        }}
      >
        <Typography fontWeight={800} color="#63c5f3" mb={1}>
          Strategic Plans & Decisions
        </Typography>
        <InteractiveChessText text={review.strategicAnalysis.content} />
      </Paper>
    </Stack>
  );
}

// -------------------------------------------------------------
// TAB 5: STRENGTHS
// -------------------------------------------------------------
function StrengthsTab({ review }: { review: FinalGameReview }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "rgba(255,255,255,0.035)",
        borderTop: "3px solid #48c78e",
      }}
    >
      <Typography fontWeight={800} color="#48c78e" mb={1.5}>
        What You Did Well
      </Typography>
      <Stack spacing={1.5}>
        {review.strengths.map((strength, index) => (
          <Stack key={index} direction="row" spacing={1.5} alignItems="start">
            <Typography color="#48c78e" fontWeight={800} lineHeight={1.6}>
              ✓
            </Typography>
            <InteractiveChessText
              text={strength.replace(/^(Improve:\s*|•\s*)/, "")}
              typographyProps={{ sx: { flex: 1 } }}
            />
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

// -------------------------------------------------------------
// TAB 6: TRAINING & NEXT STEPS
// -------------------------------------------------------------
function TrainingTab({ review }: { review: FinalGameReview }) {
  const { startPractice } = useGameNavigation();

  const toPracticeContext = (item: TurningPoint): PracticeContext => ({
    source: "turning-point",
    ply: item.ply,
    moveNumber: item.moveNumber,
    color: item.color,
    fen: item.fen,
    playedSan: item.san,
    playedUci: item.move,
    bestMove: item.bestMove || item.alternatives[0]?.move || "",
    bestMoveSan:
      item.alternatives[0]?.san ||
      item.principalVariationSan[0] ||
      item.bestMove ||
      "Best move",
    evaluationBefore: item.evaluationBefore,
    evaluationAfter: item.evaluationAfter,
    evaluationChange: item.evaluationChange,
    principalVariationSan: item.principalVariationSan,
    principalVariation: item.principalVariation,
    alternatives: item.alternatives,
    whyItMatters: item.whyItMatters,
    beforeSituation: item.beforeSituation,
    afterSituation: item.afterSituation,
    lesson: item.lesson,
    opponentThreat: item.opponentThreat,
    tacticalMotif: item.tacticalMotif,
  });

  return (
    <Stack spacing={2}>
      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #f19a52",
        }}
      >
        <Typography fontWeight={800} color="#f19a52" mb={1.5}>
          Key Focus Areas
        </Typography>
        <Stack spacing={1}>
          {review.weaknesses.map((weakness, index) => (
            <Stack key={index} direction="row" spacing={1.5} alignItems="start">
              <Typography color="#f19a52" fontWeight={800}>
                ●
              </Typography>
              <InteractiveChessText
                text={weakness.replace(/^(Improve:\s*|•\s*)/, "")}
              />
            </Stack>
          ))}
        </Stack>
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: "rgba(255,255,255,0.035)",
          borderTop: "3px solid #63c5f3",
        }}
      >
        <Typography fontWeight={800} color="#63c5f3" mb={1.5}>
          Recommended Training Steps
        </Typography>
        <Stack spacing={1}>
          {review.trainingRecommendations.map((rec, index) => (
            <Stack key={index} direction="row" spacing={1.5} alignItems="start">
              <Typography color="#63c5f3" fontWeight={800}>
                →
              </Typography>
              <InteractiveChessText
                text={rec.replace(/^(Improve:\s*|•\s*)/, "")}
              />
            </Stack>
          ))}
        </Stack>
      </Paper>

      {review.turningPoints.length > 0 && (
        <Paper
          sx={{
            p: 2,
            bgcolor: "rgba(255,255,255,0.035)",
            borderTop: "3px solid #ef6b73",
          }}
        >
          <Typography fontWeight={800} color="#ef6b73" mb={1.5}>
            Replay Critical Mistakes
          </Typography>
          <Stack spacing={1}>
            {review.turningPoints.slice(0, 4).map((item) => (
              <Stack
                key={item.ply}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 1,
                  borderRadius: 1,
                  bgcolor: "rgba(255,255,255,0.02)",
                }}
              >
                <InteractiveMoveChip
                  san={`${item.moveNumber}${item.color === "white" ? "." : "..."} ${item.san}`}
                  ply={item.ply}
                  color={item.color}
                />
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => startPractice(toPracticeContext(item))}
                  sx={{
                    fontSize: "0.75rem",
                    textTransform: "none",
                    borderColor: "#63c5f3",
                    color: "#63c5f3",
                  }}
                >
                  Practice Position
                </Button>
              </Stack>
            ))}
          </Stack>
        </Paper>
      )}
    </Stack>
  );
}

function EmptyState() {
  return (
    <Paper sx={{ p: 2.5, bgcolor: "rgba(255,255,255,0.035)", borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight={800} color="#63c5f3" mb={1}>
        Interactive AI Master Coaching
      </Typography>
      <Stack spacing={0.75}>
        <Typography variant="body2" color="text.secondary">
          • Instant master-level review of critical mistakes and turning points
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Interactive Practice Mode to calculate better moves directly on the
          board
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Synchronized analysis with clickable moves and tactical insights
        </Typography>
      </Stack>
    </Paper>
  );
}

function LoadingState() {
  return (
    <Stack spacing={1.5} flex={1} justifyContent="center" p={2}>
      <Typography color="primary.light" fontWeight={700}>
        Generating coach insights from Stockfish analysis…
      </Typography>
      <Skeleton variant="rounded" height={22} />
      <Skeleton variant="rounded" height={22} width="80%" />
      <Skeleton variant="rounded" height={22} width="92%" />
      <Skeleton variant="rounded" height={90} />
    </Stack>
  );
}
