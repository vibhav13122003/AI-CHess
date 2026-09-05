import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Chip,
  Divider,
  Grid2 as Grid,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { analyzeSavedGamesForCurriculum } from "@/lib/curriculum/patternEngine";
import {
  PatternCategory,
  PatternInstance,
  RecurringPatternGroup,
} from "@/types/curriculum";
import InteractiveMoveChip from "@/components/InteractiveMoveChip";
import { useEngine } from "@/hooks/useEngine";
import { useAtomValue } from "jotai";
import { engineNameAtom } from "@/sections/analysis/states";
import { Chess } from "chess.js";
import { getEvaluateGameParams } from "@/lib/chess";

const categoryTabs: { label: string; value: PatternCategory | "all" }[] = [
  { label: "All Patterns", value: "all" },
  { label: "Tactics", value: "tactics" },
  { label: "King Safety", value: "king-safety" },
  { label: "Opening Traps", value: "opening" },
  { label: "Endgame", value: "endgame" },
  { label: "Piece Activity", value: "piece-activity" },
  { label: "Back Rank", value: "back-rank" },
];

export default function CurriculumDashboard() {
  const { games, setGameEval } = useGameDatabase(true);
  const router = useRouter();
  const engineName = useAtomValue(engineNameAtom);
  const engine = useEngine(engineName);

  const [selectedCategory, setSelectedCategory] = useState<
    PatternCategory | "all"
  >("all");
  const [perspective, setPerspective] = useState<"auto" | "white" | "black">(
    "auto"
  );
  const [expandedPattern, setExpandedPattern] = useState<string | null>(null);

  // Username search / filter state
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [searchedUsername, setSearchedUsername] = useState<string>("");

  // Retrieve stored usernames from localStorage on mount
  const [storedUsernames, setStoredUsernames] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const names: string[] = [];
    try {
      const lc = localStorage.getItem("lichess-username");
      if (lc) {
        const parsed = JSON.parse(lc);
        if (Array.isArray(parsed) && parsed[0]) names.push(parsed[0]);
      }
    } catch {}
    try {
      const cc = localStorage.getItem("chesscom-username");
      if (cc) {
        const parsed = JSON.parse(cc);
        if (Array.isArray(parsed) && parsed[0]) names.push(parsed[0]);
      }
    } catch {}

    const filtered = names.filter(Boolean);
    setStoredUsernames(filtered);
    if (filtered[0] && !searchedUsername && !router.query.username) {
      setSearchedUsername(filtered[0]);
      setUsernameInput(filtered[0]);
    }
  }, [searchedUsername, router.query.username]);

  // Sync state from URL query on initial load or URL change
  useEffect(() => {
    if (!router.isReady) return;
    const qUser = router.query.username;
    if (typeof qUser === "string" && qUser.trim()) {
      setSearchedUsername(qUser.trim());
      setUsernameInput(qUser.trim());
    }
    const qCat = router.query.category;
    if (
      typeof qCat === "string" &&
      [
        "all",
        "tactics",
        "king-safety",
        "opening",
        "endgame",
        "piece-activity",
        "back-rank",
      ].includes(qCat)
    ) {
      setSelectedCategory(qCat as PatternCategory | "all");
    }
    const qPat = router.query.pattern;
    if (typeof qPat === "string" && qPat.trim()) {
      setExpandedPattern(qPat.trim());
    }
  }, [
    router.isReady,
    router.query.username,
    router.query.category,
    router.query.pattern,
  ]);

  const updateQueryParams = useCallback(
    (updates: {
      username?: string;
      category?: PatternCategory | "all";
      pattern?: string | null;
    }) => {
      if (!router.isReady) return;
      const nextQuery: Record<string, string> = {};
      const u =
        updates.username !== undefined ? updates.username : searchedUsername;
      const c =
        updates.category !== undefined ? updates.category : selectedCategory;
      const p =
        updates.pattern !== undefined ? updates.pattern : expandedPattern;

      if (u) nextQuery.username = u;
      if (c && c !== "all") nextQuery.category = c;
      if (p) nextQuery.pattern = p;

      router.replace(
        {
          pathname: "/curriculum",
          query: nextQuery,
        },
        undefined,
        { shallow: true }
      );
    },
    [router, searchedUsername, selectedCategory, expandedPattern]
  );

  const handleApplyUsername = (name: string) => {
    const trimmed = name.trim();
    setSearchedUsername(trimmed);
    updateQueryParams({ username: trimmed });
  };

  const handleCategoryChange = (val: PatternCategory | "all") => {
    setSelectedCategory(val);
    updateQueryParams({ category: val });
  };

  const handleToggleExpand = (typeId: string) => {
    const next = expandedPattern === typeId ? null : typeId;
    setExpandedPattern(next);
    updateQueryParams({ pattern: next });
  };

  // Batch analysis state
  const [isBatchAnalyzing, setIsBatchAnalyzing] = useState(false);
  const [batchProgress, setBatchProgress] = useState<{
    current: number;
    total: number;
    currentGameTitle?: string;
  }>({ current: 0, total: 0 });

  // Analyze saved games ONLY for the user's mistakes using searched username
  const summary = useMemo(() => {
    return analyzeSavedGamesForCurriculum(games, {
      username: searchedUsername || storedUsernames[0] || "You",
      perspective,
      storedUsernames,
    });
  }, [games, searchedUsername, perspective, storedUsernames]);

  const filteredPatterns = useMemo(() => {
    if (selectedCategory === "all") return summary.patterns;
    return summary.patterns.filter((p) => p.category === selectedCategory);
  }, [summary.patterns, selectedCategory]);

  const handlePracticeInstance = (instance: PatternInstance) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("active-curriculum-drill");
    }
    const query: Record<string, string> = {
      gameId: String(instance.gameId),
      ply: String(instance.ply),
      practice: "true",
      origin: "curriculum",
    };
    if (searchedUsername) query.username = searchedUsername;
    if (selectedCategory !== "all") query.category = selectedCategory;
    if (instance.typeId || instance.category) {
      query.pattern = instance.typeId || instance.category;
    }
    router.push({
      pathname: "/",
      query,
    });
  };

  const handleStartThemeDrill = (pattern: RecurringPatternGroup) => {
    if (pattern.instances.length === 0) return;

    const queue = pattern.instances.map((i) => ({
      gameId: i.gameId,
      ply: i.ply,
    }));

    const originQuery: Record<string, string> = {};
    if (searchedUsername) originQuery.username = searchedUsername;
    if (selectedCategory !== "all") originQuery.category = selectedCategory;
    originQuery.pattern = pattern.typeId;

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "active-curriculum-drill",
        JSON.stringify({
          themeTitle: pattern.title,
          queue,
          index: 0,
          origin: {
            pathname: "/curriculum",
            query: originQuery,
          },
        })
      );
    }

    const query: Record<string, string> = {
      gameId: String(queue[0].gameId),
      ply: String(queue[0].ply),
      practice: "true",
      drillTheme: pattern.typeId,
      origin: "curriculum",
      ...originQuery,
    };

    router.push({
      pathname: "/",
      query,
    });
  };

  // One-click local engine evaluation for unevaluated saved games
  const handleEvaluateAllGames = useCallback(async () => {
    if (!engine || isBatchAnalyzing) return;

    const unevaluated = games.filter(
      (g) =>
        !g.eval ||
        !Array.isArray(g.eval.positions) ||
        g.eval.positions.length === 0
    );

    if (unevaluated.length === 0) return;

    setIsBatchAnalyzing(true);
    setBatchProgress({ current: 0, total: unevaluated.length });

    for (let i = 0; i < unevaluated.length; i++) {
      const g = unevaluated[i];
      const title =
        g.white?.name && g.black?.name
          ? `${g.white.name} vs ${g.black.name}`
          : `Game #${g.id || i + 1}`;

      setBatchProgress({
        current: i + 1,
        total: unevaluated.length,
        currentGameTitle: title,
      });

      try {
        const chess = new Chess();
        chess.loadPgn(g.pgn);
        const params = getEvaluateGameParams(chess);

        if (params.fens.length > 0) {
          const gameEval = await engine.evaluateGame({
            ...params,
            depth: 14,
            multiPv: 3,
            workersNb: 2,
          });

          await setGameEval(g.id, gameEval);
        }
      } catch (err) {
        console.error("Error evaluating game in batch:", err);
      }
    }

    setIsBatchAnalyzing(false);
  }, [engine, games, isBatchAnalyzing, setGameEval]);

  const { analytics } = summary;

  return (
    <Stack spacing={3.5} width="100%" maxWidth="1200px" mx="auto" pb={6}>
      {/* 1. HEADER & USERNAME SEARCH BAR */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3.5 },
          borderRadius: 3,
          bgcolor: "#101c28",
          border: "1px solid #238fc4",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <Stack spacing={2.5}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ md: "center" }}
            gap={2}
          >
            <Box>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                mb={0.75}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(99, 197, 243, 0.15)",
                    color: "#63c5f3",
                    p: 1,
                    borderRadius: 2,
                    display: "flex",
                  }}
                >
                  <Icon icon="streamline:graduation-cap-solid" width={28} />
                </Box>
                <Typography variant="h5" fontWeight={800} color="#ffffff">
                  My Mistake Curriculum
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" maxWidth={680}>
                Analyzed strictly from <b>your player perspective</b>. Opponent
                blunders are excluded. Patterns are grouped from factual chess
                geometry and engine evaluations across your saved games.
              </Typography>
            </Box>

            <Button
              variant="outlined"
              onClick={() => router.push("/database")}
              startIcon={<Icon icon="streamline:database" />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontWeight: 700,
                textTransform: "none",
                alignSelf: { xs: "flex-start", md: "center" },
              }}
            >
              Saved Games ({games.length})
            </Button>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />

          {/* Username Search & Perspective Row */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              flex={1}
              maxWidth={480}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Search by your Chess.com / Lichess username..."
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleApplyUsername(usernameInput);
                  }
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon="mdi:account-search"
                          color="#63c5f3"
                          width={20}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 1.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={() => handleApplyUsername(usernameInput)}
                sx={{
                  bgcolor: "#238fc4",
                  fontWeight: 700,
                  textTransform: "none",
                  px: 2.5,
                  whiteSpace: "nowrap",
                }}
              >
                Filter Player
              </Button>
            </Box>

            {/* Perspective Selector */}
            <Box>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  variant={perspective === "auto" ? "contained" : "outlined"}
                  onClick={() => setPerspective("auto")}
                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    bgcolor: perspective === "auto" ? "#238fc4" : undefined,
                  }}
                >
                  Both Colors
                </Button>
                <Button
                  variant={perspective === "white" ? "contained" : "outlined"}
                  onClick={() => setPerspective("white")}
                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    bgcolor: perspective === "white" ? "#238fc4" : undefined,
                  }}
                >
                  As White
                </Button>
                <Button
                  variant={perspective === "black" ? "contained" : "outlined"}
                  onClick={() => setPerspective("black")}
                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    bgcolor: perspective === "black" ? "#238fc4" : undefined,
                  }}
                >
                  As Black
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>

          {/* Counts & Status Chips */}
          <Stack
            direction="row"
            spacing={1.5}
            flexWrap="wrap"
            gap={1}
            alignItems="center"
          >
            <Chip
              size="small"
              icon={<Icon icon="mdi:database" />}
              label={`${summary.totalSavedGames} games found`}
              sx={{
                bgcolor: "rgba(255,255,255,0.06)",
                color: "#ffffff",
                fontWeight: 700,
              }}
            />
            <Chip
              size="small"
              icon={<Icon icon="mdi:account-check" />}
              label={`${summary.identifiedGamesCount} games identified as yours`}
              sx={{
                bgcolor: "rgba(99, 197, 243, 0.15)",
                color: "#63c5f3",
                fontWeight: 700,
              }}
            />
            <Chip
              size="small"
              icon={<Icon icon="mdi:check-circle" />}
              label={`${summary.evaluatedGamesCount} games already evaluated`}
              sx={{
                bgcolor: "rgba(140, 219, 172, 0.15)",
                color: "#8cdbac",
                fontWeight: 700,
              }}
            />
            {summary.unevaluatedGamesCount > 0 && (
              <Chip
                size="small"
                icon={<Icon icon="mdi:clock-alert-outline" />}
                label={`${summary.unevaluatedGamesCount} games need engine analysis`}
                sx={{
                  bgcolor: "rgba(236, 185, 81, 0.15)",
                  color: "#ecb951",
                  fontWeight: 700,
                }}
              />
            )}
            {summary.unknownIdentityGamesCount > 0 && (
              <Chip
                size="small"
                icon={<Icon icon="mdi:help-circle-outline" />}
                label={`${summary.unknownIdentityGamesCount} games skipped (username not found in headers)`}
                sx={{
                  bgcolor: "rgba(239, 107, 115, 0.15)",
                  color: "#ef6b73",
                  fontWeight: 700,
                }}
              />
            )}
          </Stack>
        </Stack>
      </Paper>

      {/* 2. BATCH EVALUATION BANNER (If unevaluated games exist) */}
      {summary.unevaluatedGamesCount > 0 && (
        <Alert
          severity="warning"
          icon={<Icon icon="mdi:alert-circle-outline" width={24} />}
          action={
            <Button
              color="inherit"
              size="small"
              variant="outlined"
              disabled={isBatchAnalyzing}
              onClick={handleEvaluateAllGames}
              sx={{ fontWeight: 800, textTransform: "none" }}
            >
              {isBatchAnalyzing
                ? `Evaluating (${batchProgress.current}/${batchProgress.total})...`
                : `Evaluate ${summary.unevaluatedGamesCount} Game${summary.unevaluatedGamesCount > 1 ? "s" : ""}`}
            </Button>
          }
          sx={{
            bgcolor: "rgba(236, 185, 81, 0.1)",
            color: "#ffffff",
            border: "1px solid #ecb951",
            borderRadius: 2,
          }}
        >
          <Typography variant="body2">
            <b>
              {summary.unevaluatedGamesCount} saved game
              {summary.unevaluatedGamesCount > 1 ? "s" : ""} need engine
              analysis:
            </b>{" "}
            Run local Stockfish evaluation to extract all move-level tactical
            opportunities and build your recurring curriculum.
          </Typography>
          {isBatchAnalyzing && (
            <Box mt={1} width="100%">
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={0.5}
              >
                Evaluating {batchProgress.currentGameTitle || "Game"} (
                {batchProgress.current}/{batchProgress.total})...
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(batchProgress.current / batchProgress.total) * 100}
                sx={{ borderRadius: 1 }}
              />
            </Box>
          )}
        </Alert>
      )}

      {/* 3. INSUFFICIENT DATA ALERT (If < 5 identified games) */}
      {summary.identifiedGamesCount < 5 && (
        <Alert
          severity="info"
          icon={<Icon icon="mdi:information-outline" width={24} />}
          sx={{
            bgcolor: "rgba(99, 197, 243, 0.08)",
            color: "#ffffff",
            border: "1px solid #63c5f3",
            borderRadius: 2,
          }}
        >
          <Typography variant="body2">
            We found{" "}
            <b>
              {summary.identifiedGamesCount} identifiable game
              {summary.identifiedGamesCount === 1 ? "" : "s"}
            </b>{" "}
            for player &quot;{searchedUsername || "You"}&quot;. Save at least 5
            games to build high-confidence recurring pattern cards.
          </Typography>
        </Alert>
      )}

      {/* 4. EXECUTIVE COACHING SUMMARY: WHAT YOU LACK VS YOUR STRENGTHS ACROSS ALL GAMES */}
      <Grid container spacing={2.5}>
        {/* Left Column: What You Lack Across Games */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              height: "100%",
              borderRadius: 2.5,
              bgcolor: "#101c28",
              border: "1.5px solid rgba(239, 107, 115, 0.4)",
              borderTop: "4px solid #ef6b73",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box color="#ef6b73" display="flex">
                  <Icon icon="mdi:alert-octagon" width={22} />
                </Box>
                <Typography variant="h6" fontWeight={800} color="#ffffff">
                  What You Lack Across Games
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Recurring tactical and positional deficiencies extracted from
                your game history:
              </Typography>

              {analytics.userWeaknesses.length > 0 ? (
                <Stack spacing={1.5}>
                  {analytics.userWeaknesses.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        p: 1.5,
                        bgcolor: "rgba(239, 107, 115, 0.06)",
                        borderRadius: 1.5,
                        border: "1px solid rgba(239, 107, 115, 0.15)",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={0.5}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={800}
                          color="#ffffff"
                        >
                          {item.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={`${item.evidenceGamesCount} GAMES`}
                          sx={{
                            height: 20,
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            bgcolor: "rgba(239, 107, 115, 0.2)",
                            color: "#ef6b73",
                          }}
                        />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No repeated mistake pattern meets the threshold (at least 3
                  occurrences across 3 games) yet. Save and evaluate more games
                  to reveal patterns.
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* Right Column: Your Strengths Across Games */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              height: "100%",
              borderRadius: 2.5,
              bgcolor: "#101c28",
              border: "1.5px solid rgba(140, 219, 172, 0.4)",
              borderTop: "4px solid #8cdbac",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box color="#8cdbac" display="flex">
                  <Icon icon="mdi:shield-check" width={22} />
                </Box>
                <Typography variant="h6" fontWeight={800} color="#ffffff">
                  Your Strengths Across Games
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Consistent positive qualities and solid habits observed in your
                play:
              </Typography>

              {analytics.userStrengths.length > 0 ? (
                <Stack spacing={1.5}>
                  {analytics.userStrengths.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        p: 1.5,
                        bgcolor: "rgba(140, 219, 172, 0.06)",
                        borderRadius: 1.5,
                        border: "1px solid rgba(140, 219, 172, 0.15)",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={0.5}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={800}
                          color="#ffffff"
                        >
                          {item.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={item.tag}
                          sx={{
                            height: 20,
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            bgcolor: "rgba(140, 219, 172, 0.2)",
                            color: "#8cdbac",
                          }}
                        />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Evaluate at least 2 games to populate your positive strengths
                  profile.
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* 5. CROSS-GAME MISTAKE BREAKDOWN METRICS */}
      <Grid container spacing={2}>
        {/* Game Phase Distribution */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.035)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              MISTAKE PHASE DISTRIBUTION
            </Typography>
            <Stack spacing={1} mt={1.5}>
              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="#ffffff">
                    Opening
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {analytics.phaseDistribution.openingPercent}% (
                    {analytics.phaseDistribution.openingCount})
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={analytics.phaseDistribution.openingPercent}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    "& .MuiLinearProgress-bar": { bgcolor: "#63c5f3" },
                  }}
                />
              </Box>

              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="#ffffff">
                    Middlegame
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {analytics.phaseDistribution.middlegamePercent}% (
                    {analytics.phaseDistribution.middlegameCount})
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={analytics.phaseDistribution.middlegamePercent}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    "& .MuiLinearProgress-bar": { bgcolor: "#ecb951" },
                  }}
                />
              </Box>

              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="#ffffff">
                    Endgame
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {analytics.phaseDistribution.endgamePercent}% (
                    {analytics.phaseDistribution.endgameCount})
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={analytics.phaseDistribution.endgamePercent}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    "& .MuiLinearProgress-bar": { bgcolor: "#ef6b73" },
                  }}
                />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/* Error Type Distribution */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.035)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              TACTICAL VS POSITIONAL ERRORS
            </Typography>
            <Stack spacing={1} mt={1.5}>
              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="#ffffff">
                    Tactical Errors (Pins, Loose Pieces, Forks)
                  </Typography>
                  <Typography variant="caption" color="#ecb951">
                    {analytics.errorTypeDistribution.tacticalPercent}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={analytics.errorTypeDistribution.tacticalPercent}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    "& .MuiLinearProgress-bar": { bgcolor: "#ecb951" },
                  }}
                />
              </Box>

              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="#ffffff">
                    Positional Errors (King Shelter, Passivity)
                  </Typography>
                  <Typography variant="caption" color="#63c5f3">
                    {analytics.errorTypeDistribution.positionalPercent}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={analytics.errorTypeDistribution.positionalPercent}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    "& .MuiLinearProgress-bar": { bgcolor: "#63c5f3" },
                  }}
                />
              </Box>

              <Typography variant="caption" color="text.secondary" mt={0.5}>
                {analytics.errorTypeDistribution.tacticalPercent >= 50
                  ? "Tactical calculation is your primary area of rating loss."
                  : "Positional and strategic planning need primary focus."}
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        {/* Severity Breakdown */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.035)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              YOUR ERROR SEVERITY
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              mt={1.5}
              justifyContent="space-between"
            >
              <Box textAlign="center" flex={1}>
                <Typography variant="h5" fontWeight={800} color="#ef6b73">
                  {analytics.severityDistribution.blunders}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Blunders
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box textAlign="center" flex={1}>
                <Typography variant="h5" fontWeight={800} color="#ecb951">
                  {analytics.severityDistribution.mistakes}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Mistakes
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box textAlign="center" flex={1}>
                <Typography variant="h5" fontWeight={800} color="#63c5f3">
                  {analytics.severityDistribution.inaccuracies}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Inaccuracies
                </Typography>
              </Box>
            </Stack>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mt={1}
            >
              Based on {summary.evaluatedGamesCount} evaluated user games.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 6. CATEGORY FILTER TABS */}
      {summary.patterns.length > 0 && (
        <Box>
          <Tabs
            value={selectedCategory}
            onChange={(_, val) => handleCategoryChange(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              "& .MuiTab-root": {
                fontWeight: 700,
                textTransform: "none",
                fontSize: "0.85rem",
              },
            }}
          >
            {categoryTabs.map((t) => (
              <Tab key={t.value} label={t.label} value={t.value} />
            ))}
          </Tabs>
        </Box>
      )}

      {/* 7. RECURRING PATTERN CARDS */}
      {filteredPatterns.length > 0 ? (
        <Stack spacing={2.5}>
          {filteredPatterns.map((pattern) => {
            const isExpanded = expandedPattern === pattern.typeId;
            const severityColor =
              pattern.severity === "high"
                ? "#ef6b73"
                : pattern.severity === "medium"
                  ? "#ecb951"
                  : "#63c5f3";

            return (
              <Paper
                key={pattern.typeId}
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  bgcolor: "#101c28",
                  borderRadius: 2.5,
                  border: `1.5px solid ${severityColor}44`,
                  borderLeft: `5px solid ${severityColor}`,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <Stack spacing={2}>
                  {/* Card Header */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ sm: "center" }}
                    gap={1}
                  >
                    <Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        flexWrap="wrap"
                        gap={0.5}
                        mb={0.5}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={800}
                          color="#ffffff"
                        >
                          {pattern.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={pattern.category.toUpperCase()}
                          sx={{
                            bgcolor: "rgba(255, 255, 255, 0.08)",
                            color: "text.secondary",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                          }}
                        />
                      </Stack>

                      <Typography
                        variant="body1"
                        fontWeight={700}
                        color={severityColor}
                      >
                        {pattern.insight}
                      </Typography>
                    </Box>

                    {/* Supporting facts badge pill */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        size="small"
                        label={`${pattern.occurrencesCount} occurrences across ${pattern.gamesCount} games · average evaluation drop: ${pattern.averageWinDrop}%`}
                        sx={{
                          bgcolor: `${severityColor}22`,
                          color: severityColor,
                          fontWeight: 800,
                          fontSize: "0.72rem",
                        }}
                      />
                      <Chip
                        size="small"
                        label={`${pattern.confidence.toUpperCase()} CONFIDENCE`}
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.06)",
                          color: "text.secondary",
                          fontWeight: 700,
                          fontSize: "0.68rem",
                        }}
                      />
                    </Stack>
                  </Stack>

                  {/* Coach diagnosis & Actionable Tip */}
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "rgba(0, 0, 0, 0.25)",
                      borderRadius: 1.5,
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="#8cdbac"
                      fontWeight={800}
                      display="block"
                      mb={0.25}
                    >
                      COACH DIAGNOSIS & TRAINING TIP:
                    </Typography>
                    <Typography variant="body2" color="#ffffff">
                      {pattern.coachingTip}
                    </Typography>
                  </Box>

                  {/* Interactive Example List */}
                  <Stack spacing={1}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={800}
                    >
                      EXACT POSITIONS FROM YOUR GAMES:
                    </Typography>

                    {(isExpanded
                      ? pattern.instances
                      : pattern.instances.slice(0, 3)
                    ).map((instance) => {
                      const isWhite = instance.color === "white";
                      const moveStr = `${instance.moveNumber}${isWhite ? "." : "..."}`;

                      return (
                        <Paper
                          key={instance.id}
                          sx={{
                            p: 1.5,
                            bgcolor: "rgba(255, 255, 255, 0.025)",
                            borderRadius: 1.5,
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            alignItems: { sm: "center" },
                            gap: 1.5,
                          }}
                        >
                          <Stack spacing={0.5} flex={1}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                              flexWrap="wrap"
                            >
                              <Typography
                                variant="subtitle2"
                                fontWeight={800}
                                color="#ffffff"
                              >
                                {instance.gameTitle}
                              </Typography>
                              {instance.openingName && (
                                <Chip
                                  size="small"
                                  label={instance.openingName}
                                  sx={{
                                    height: 18,
                                    fontSize: "0.65rem",
                                    bgcolor: "rgba(255, 255, 255, 0.05)",
                                  }}
                                />
                              )}
                              <InteractiveMoveChip
                                san={`${moveStr} ${instance.san}`}
                                ply={instance.ply}
                                color={instance.color}
                              />
                            </Stack>

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {instance.explanation}
                            </Typography>
                          </Stack>

                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => handlePracticeInstance(instance)}
                            startIcon={<Icon icon="mdi:target" />}
                            sx={{
                              bgcolor: "#238fc4",
                              "&:hover": { bgcolor: "#1a709c" },
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              textTransform: "none",
                              alignSelf: { xs: "flex-start", sm: "center" },
                              px: 2,
                            }}
                          >
                            Practice Position
                          </Button>
                        </Paper>
                      );
                    })}

                    {pattern.instances.length > 3 && (
                      <Button
                        size="small"
                        onClick={() => handleToggleExpand(pattern.typeId)}
                        sx={{
                          fontSize: "0.75rem",
                          color: "#63c5f3",
                          textTransform: "none",
                          alignSelf: "flex-start",
                        }}
                      >
                        {isExpanded
                          ? "Show fewer positions"
                          : `+ View ${pattern.instances.length - 3} more positions in this theme`}
                      </Button>
                    )}
                  </Stack>

                  <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.06)" }} />

                  {/* Action Bar */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      {pattern.blundersCount} blunders, {pattern.mistakesCount}{" "}
                      mistakes
                    </Typography>

                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleStartThemeDrill(pattern)}
                      startIcon={<Icon icon="mdi:play" />}
                      sx={{
                        bgcolor: severityColor,
                        color: "#0a1926",
                        fontWeight: 800,
                        fontSize: "0.75rem",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#ffffff",
                          color: "#0a1926",
                        },
                      }}
                    >
                      Start Theme Drill ({pattern.instances.length} Positions)
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            );
          })}
        </Stack>
      ) : summary.evaluatedGamesCount > 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: "center",
            bgcolor: "#101c28",
            borderRadius: 2.5,
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Stack spacing={1.5} alignItems="center">
            <Box color="#63c5f3">
              <Icon icon="mdi:shield-search" width={36} />
            </Box>
            <Typography variant="subtitle1" fontWeight={700} color="#ffffff">
              {selectedCategory !== "all"
                ? `No recurring patterns found in "${categoryTabs.find((t) => t.value === selectedCategory)?.label || selectedCategory}"`
                : "No recurring mistake patterns detected yet"}
            </Typography>
            <Typography variant="body2" color="text.secondary" maxWidth={600}>
              {selectedCategory !== "all"
                ? `Patterns require at least 3 occurrences across at least 3 distinct games to qualify as a recurring habit. We do not invent patterns without factual chess evidence. Check "All Patterns" or analyze more games to see emerging themes.`
                : `A pattern requires at least 3 occurrences across at least 3 distinct games. As you play and evaluate more games with Stockfish, your recurring tactical and positional patterns will appear here automatically.`}
            </Typography>
            {selectedCategory !== "all" && (
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleCategoryChange("all")}
                sx={{
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "rgba(99, 197, 243, 0.4)",
                  color: "#63c5f3",
                }}
              >
                View All Categories
              </Button>
            )}
          </Stack>
        </Paper>
      ) : null}
    </Stack>
  );
}
