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
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { getEvaluateGameParams } from "@/lib/chess";
import { useChessActions } from "@/hooks/useChessActions";
import {
  FinalGameReview,
  PracticeSession,
  SavedPracticePosition,
} from "@/types/ai";
import {
  activePracticeAtom,
  boardAtom,
  gameAtom,
  gameEvalAtom,
  savedPracticePositionsAtom,
} from "../../states";

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
  const [review, setReview] = useState<FinalGameReview>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);

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
      }}
    >
      <Stack spacing={2} height="100%" minHeight={0}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "center" }}
          gap={1}
        >
          <Box>
            <Typography variant="h5" fontWeight={800} color="#63c5f3">
              AI Game Review
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stockfish-backed coaching for your completed game
            </Typography>
          </Box>
          <Button
            variant="contained"
            disabled={!gameEval || loading}
            onClick={generateReview}
            sx={{ minWidth: 170 }}
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

        <PracticeTrainer />
        {error && <Alert severity="error">{error}</Alert>}
        {!review && !loading && <EmptyState />}
        {loading && <LoadingState />}

        {review && (
          <>
            <Tabs
              value={tab}
              onChange={(_, value) => setTab(value)}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  minWidth: 0,
                  px: { xs: 0.25, sm: 1 },
                  fontSize: { xs: "0.65rem", sm: "0.8rem" },
                  fontWeight: 700,
                },
              }}
            >
              {tabs.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>
            <Box sx={{ pt: 1, minHeight: 0, flex: 1, overflowY: "auto", pr: 0.75 }}>
              {tab === 0 && <Overview review={review} />}
              {tab === 1 && <TurningPoints review={review} game={game} />}
              {tab === 2 && (
                <Narrative
                  title="Tactical themes"
                  text={review.tacticalAnalysis.content}
                  color="#ecb951"
                />
              )}
              {tab === 3 && (
                <Narrative
                  title="Positional and strategic plan"
                  text={`${review.positionalAnalysis.content}\n\n${review.strategicAnalysis.content}`}
                  color="#bb9cf4"
                />
              )}
              {tab === 4 && (
                <ListCard
                  title="What you did well"
                  items={review.strengths}
                  color="#48c78e"
                />
              )}
              {tab === 5 && <TrainingTab review={review} />}
            </Box>
          </>
        )}
      </Stack>
    </Paper>
  );
}

function Overview({ review }: { review: FinalGameReview }) {
  return (
    <Stack spacing={2}>
      <Narrative
        title="Coach's assessment"
        text={review.overallAssessment}
        color="#63c5f3"
      />
      <Narrative
        title="How the game unfolded"
        text={review.gameSummary}
        color="#f3f5f7"
      />
      <Narrative title="Main lesson" text={review.mainLesson} color="#8cdbac" />
    </Stack>
  );
}

function TurningPoints({ review, game }: { review: FinalGameReview; game: Chess }) {
  return (
    <Stack spacing={1.5}>
      {review.turningPoints.map((point) => (
        <TurningPointCard key={point.ply} point={point} game={game} />
      ))}
    </Stack>
  );
}

function TurningPointCard({
  point,
  game,
}: {
  point: FinalGameReview["turningPoints"][number];
  game: Chess;
}) {
  const { goToMove } = useChessActions(boardAtom);
  const [, setPractice] = useAtom(activePracticeAtom);
  const [savedPositions, setSavedPositions] = useAtom(savedPracticePositionsAtom);
  const [showDetails, setShowDetails] = useState(false);
  const saved = savedPositions.some((item) => item.moment.fen === point.fen);
  const topOption = point.alternatives[0]?.san;

  const startPractice = () => {
    setPractice({ moment: point, sourcePgn: game.pgn() });
    goToMove(point.ply - 1, game);
  };

  const savePosition = () => {
    if (saved) return;
    const item: SavedPracticePosition = {
      id: `${point.fen}-${point.ply}`,
      savedAt: new Date().toISOString(),
      pgn: game.pgn(),
      moment: point,
      solvedCount: 0,
    };
    setSavedPositions((current) => [item, ...current]);
  };

  return (
    <Paper
      sx={{
        p: 1.5,
        borderLeft: "4px solid",
        borderColor: point.color === "white" ? "#4ba3e3" : "#ef6b73",
        bgcolor: "rgba(255,255,255,.035)",
      }}
    >
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Stack direction="row" gap={0.75} flexWrap="wrap">
            <Chip
              size="small"
              label={`${point.moveNumber}${point.color === "white" ? "." : "..."} ${point.san}`}
              color={point.color === "white" ? "info" : "error"}
            />
            {point.classification && (
              <Chip size="small" variant="outlined" label={point.classification} />
            )}
            {point.category && <Chip size="small" label={point.category} />}
            {point.tacticalMotif && (
              <Chip size="small" color="warning" label={point.tacticalMotif} />
            )}
          </Stack>
          <Button size="small" onClick={() => goToMove(point.ply, game)}>
            View on board
          </Button>
        </Stack>

        <Typography variant="body2">{point.explanation}</Typography>
        <MoveComparison point={point} />

        {point.opponentThreat && (
          <Alert severity="warning" sx={{ py: 0 }}>
            <Typography variant="caption" fontWeight={700}>
              Opponent threat
            </Typography>
            <Typography variant="body2">{point.opponentThreat}</Typography>
          </Alert>
        )}

        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          <Button size="small" onClick={() => setShowDetails((value) => !value)}>
            {showDetails ? "Hide coaching" : "What did I miss?"}
          </Button>
          <Button size="small" onClick={startPractice}>
            Practice position
          </Button>
          <Button size="small" disabled={saved} onClick={savePosition}>
            {saved ? "Saved to My Puzzles" : "Add to My Puzzles"}
          </Button>
        </Stack>

        <Collapse in={showDetails}>
          <Box pt={0.5}>
            <Typography variant="body2" color="#8cdbac">
              <b>What you missed:</b> {point.whatYouMissed || point.lesson}
            </Typography>
            <Typography variant="body2" mt={0.75}>
              <b>Coaching takeaway:</b> {point.lesson}
            </Typography>
            {point.principalVariationSan.length > 0 && (
              <Typography variant="caption" display="block" mt={0.75}>
                Engine line: {point.principalVariationSan.join(" ")}
              </Typography>
            )}
            {topOption && (
              <Typography variant="caption" display="block" mt={0.5}>
                Better move: {topOption}
              </Typography>
            )}
          </Box>
        </Collapse>
      </Stack>
    </Paper>
  );
}

function MoveComparison({
  point,
}: {
  point: FinalGameReview["turningPoints"][number];
}) {
  const options = point.alternatives.slice(0, 3);
  return (
    <Box sx={{ p: 1, bgcolor: "rgba(0,0,0,.18)", borderRadius: 1 }}>
      <Stack direction={{ xs: "column", sm: "row" }} gap={1} divider={<Divider flexItem orientation="vertical" />}>
        <Box flex={1}>
          <Typography variant="caption" color="text.secondary">YOUR MOVE</Typography>
          <Typography fontWeight={700}>{point.san}</Typography>
          <Typography variant="caption">Win chance: {Math.round(point.evaluationBefore)}% → {Math.round(point.evaluationAfter)}%</Typography>
        </Box>
        <Box flex={1}>
          <Typography variant="caption" color="text.secondary">ENGINE OPTIONS</Typography>
          <Stack direction="row" gap={0.5} flexWrap="wrap">
            {options.map((option) => (
              <Chip key={option.san} size="small" variant="outlined" label={`${option.san}${option.score === undefined ? "" : ` ${formatScore(option.score)}`}`} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

function PracticeTrainer() {
  const board = useAtomValue(boardAtom);
  const [practice, setPractice] = useAtom(activePracticeAtom);
  const [savedPositions, setSavedPositions] = useAtom(savedPracticePositionsAtom);
  const { goToMove } = useChessActions(boardAtom);
  const [result, setResult] = useState<
    "correct" | "alternative" | "other" | "solution"
  >();

  useEffect(() => setResult(undefined), [practice]);
  if (!practice) return null;

  const sourceGame = new Chess();
  sourceGame.loadPgn(practice.sourcePgn);
  const moveHistory = board.history({ verbose: true });
  const attemptedMove = moveHistory.at(-1);
  const hasAttempt = moveHistory.length === practice.moment.ply;
  const attemptedUci = attemptedMove
    ? attemptedMove.from + attemptedMove.to + (attemptedMove.promotion || "")
    : undefined;
  const recommendedMove = practice.moment.bestMove;
  const recommendedSan = practice.moment.alternatives[0]?.san;

  const restart = () => {
    goToMove(practice.moment.ply - 1, sourceGame);
    setResult(undefined);
  };
  const check = () => {
    const matchingOption = practice.moment.alternatives.find(
      (option) => option.move === attemptedUci
    );
    const topScore = practice.moment.alternatives[0]?.score;
    const scoreLoss =
      matchingOption?.score === undefined || topScore === undefined
        ? undefined
        : practice.moment.color === "white"
          ? topScore - matchingOption.score
          : matchingOption.score - topScore;

    if (attemptedUci === recommendedMove) {
      setResult("correct");
    } else if (matchingOption && (scoreLoss === undefined || scoreLoss <= 40)) {
      setResult("alternative");
    } else {
      setResult("other");
    }
  };
  const markSolved = () => {
    setSavedPositions((items) =>
      items.map((item) =>
        item.moment.fen === practice.moment.fen
          ? { ...item, solvedCount: item.solvedCount + 1 }
          : item
      )
    );
  };

  return (
    <Alert severity="info" icon={false} sx={{ alignItems: "start" }}>
      <Stack spacing={1} width="100%">
        <Typography fontWeight={700}>
          Practice position · {practice.moment.moveNumber}{practice.moment.color === "white" ? "." : "..."}
        </Typography>
        {!result && (
          <Typography variant="body2">
            The board is set just before the critical move. Find the strongest continuation before revealing the engine idea.
          </Typography>
        )}
        {result === "correct" && (
          <Typography variant="body2" color="#2e8b57">
            Good work — your move matches Stockfish&apos;s top recommendation. {practice.moment.lesson}
          </Typography>
        )}
        {result === "alternative" && (
          <Typography variant="body2" color="#2e8b57">
            Nice — that is a strong engine alternative. Compare it with the
            top line to see the difference in plan.
          </Typography>
        )}
        {result === "other" && (
          <Typography variant="body2">
            Your move was not Stockfish&apos;s top recommendation. Review the solution to compare the key idea.
          </Typography>
        )}
        {result === "solution" && (
          <Typography variant="body2">
            <b>Best move:</b> {recommendedSan || "See the engine line below"}. {practice.moment.whatYouMissed || practice.moment.lesson}
          </Typography>
        )}
        <Stack direction="row" gap={0.5} flexWrap="wrap">
          <Button size="small" disabled={!hasAttempt} onClick={check}>Check my move</Button>
          <Button size="small" onClick={() => setResult("solution")}>Reveal solution</Button>
          <Button size="small" onClick={restart}>Try again</Button>
          {(result === "correct" || result === "alternative") && <Button size="small" onClick={markSolved}>Mark solved</Button>}
          <Button size="small" onClick={() => setPractice(undefined)}>Exit practice</Button>
        </Stack>
      </Stack>
    </Alert>
  );
}

function TrainingTab({ review }: { review: FinalGameReview }) {
  const [savedPositions, setSavedPositions] = useAtom(savedPracticePositionsAtom);
  const [, setPractice] = useAtom(activePracticeAtom);
  const { goToMove } = useChessActions(boardAtom);

  const startSavedPractice = (item: SavedPracticePosition) => {
    const sourceGame = new Chess();
    sourceGame.loadPgn(item.pgn);
    setPractice({ moment: item.moment, sourcePgn: item.pgn } as PracticeSession);
    goToMove(item.moment.ply - 1, sourceGame);
  };

  return (
    <Stack spacing={2}>
      <ListCard title="Focus areas" items={review.weaknesses} color="#f19a52" />
      <ListCard title="Your next training steps" items={review.trainingRecommendations} color="#63c5f3" />
      <Paper sx={{ p: 2, bgcolor: "rgba(255,255,255,.035)", borderTop: "3px solid #ecb951" }}>
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={800} color="#ecb951">My Puzzles</Typography>
            <Chip size="small" label={savedPositions.length} />
          </Stack>
          {!savedPositions.length && <Typography variant="body2">Save an important turning point to practise it later.</Typography>}
          {savedPositions.slice(0, 5).map((item) => (
            <Stack key={item.id} direction="row" justifyContent="space-between" alignItems="center" gap={1}>
              <Typography variant="body2">{item.moment.moveNumber}{item.moment.color === "white" ? "." : "..."} {item.moment.san}</Typography>
              <Stack direction="row" gap={0.5}><Button size="small" onClick={() => startSavedPractice(item)}>Practice</Button><Button size="small" color="inherit" onClick={() => setSavedPositions((items) => items.filter((saved) => saved.id !== item.id))}>Remove</Button></Stack>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}

function Narrative({ title, text, color }: { title: string; text: string; color: string }) {
  const paragraphs = text.split("\n").filter(Boolean);
  return <Paper sx={{ p: 2, bgcolor: "rgba(255,255,255,.035)", borderTop: `3px solid ${color}` }}><Typography fontWeight={800} color={color} mb={1}>{title}</Typography>{paragraphs.map((paragraph, index) => <Typography key={index} variant="body2" paragraph={index < paragraphs.length - 1}>{paragraph}</Typography>)}</Paper>;
}

function ListCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return <Paper sx={{ p: 2, bgcolor: "rgba(255,255,255,.035)", borderTop: `3px solid ${color}` }}><Typography fontWeight={800} color={color} mb={1}>{title}</Typography><Stack spacing={1}>{items.map((item, index) => <Stack key={index} direction="row" gap={1}><Typography color={color}>●</Typography><Typography variant="body2">{item.replace(/^(Improve:\s*|•\s*)/, "")}</Typography></Stack>)}</Stack></Paper>;
}

function EmptyState() {
  return <Paper sx={{ p: 2, bgcolor: "rgba(255,255,255,.035)" }}><Typography fontWeight={700} mb={1}>A focused coaching breakdown</Typography><Stack spacing={0.5}><Typography variant="body2">• Critical mistakes and their impact</Typography><Typography variant="body2">• Turning points you can jump to on the board</Typography><Typography variant="body2">• Tactical themes and practical training steps</Typography></Stack></Paper>;
}

function LoadingState() {
  return <Stack spacing={1.25} flex={1} justifyContent="center"><Typography color="primary.light" fontWeight={700}>Analyzing your game…</Typography><Skeleton variant="rounded" height={18} /><Skeleton variant="rounded" height={18} width="78%" /><Skeleton variant="rounded" height={18} width="90%" /><Skeleton variant="rounded" height={84} /></Stack>;
}

const formatScore = (score: number) => `${score >= 0 ? "+" : ""}${(score / 100).toFixed(1)}`;
