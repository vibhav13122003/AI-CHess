import { TooltipProps } from "recharts";
import { ChartItemData } from "./types";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { CLASSIFICATION_COLORS } from "@/constants";

export default function CustomTooltip({
  active,
  payload,
}: TooltipProps<number, number>) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload as ChartItemData;
  if (!data) return null;

  const color = data.moveClassification
    ? CLASSIFICATION_COLORS[data.moveClassification]
    : "#ffffff";

  const isWhite = data.color === "w";
  const moveText = data.san
    ? `${data.moveNumber ? `${data.moveNumber}${isWhite ? "." : "..."} ` : ""}${data.san}`
    : `Move ${data.moveNb}`;

  const phaseLabel = data.phase
    ? data.phase.charAt(0).toUpperCase() + data.phase.slice(1)
    : undefined;

  const evalChangeStr =
    data.evalBeforeLabel && data.evalAfterLabel && data.evalBeforeLabel !== data.evalAfterLabel
      ? `${data.evalBeforeLabel} → ${data.evalAfterLabel}`
      : data.evalAfterLabel || "0.0";

  return (
    <Box
      sx={{
        bgcolor: "#101c28",
        border: "1px solid #238fc4",
        borderRadius: 2,
        p: 1.5,
        boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
        minWidth: 180,
        maxWidth: 260,
        pointerEvents: "none",
      }}
    >
      {/* Header: Move SAN + Phase */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1} mb={0.75}>
        <Typography variant="subtitle2" fontWeight={800} color="#ffffff">
          {moveText}
        </Typography>
        {phaseLabel && (
          <Chip
            size="small"
            label={phaseLabel}
            sx={{
              height: 18,
              fontSize: "0.65rem",
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.secondary",
              fontWeight: 700,
            }}
          />
        )}
      </Stack>

      {/* Badges: Classification & Turning Point */}
      <Stack direction="row" spacing={0.75} alignItems="center" flexWrap="wrap" mb={0.75}>
        {data.isTurningPoint && (
          <Chip
            size="small"
            label="TURNING POINT"
            sx={{
              height: 20,
              fontSize: "0.65rem",
              bgcolor: "#ef6b73",
              color: "#ffffff",
              fontWeight: 800,
            }}
          />
        )}
        {data.isMissedTactic && (
          <Chip
            size="small"
            label="MISSED TACTIC"
            sx={{
              height: 20,
              fontSize: "0.65rem",
              bgcolor: "#ecb951",
              color: "#0d1a24",
              fontWeight: 800,
            }}
          />
        )}
        {data.moveClassification && (
          <Chip
            size="small"
            label={data.moveClassification.toUpperCase()}
            sx={{
              height: 20,
              fontSize: "0.65rem",
              bgcolor: `${color}22`,
              color,
              fontWeight: 800,
            }}
          />
        )}
      </Stack>

      {/* Evaluation */}
      <Box mb={0.75}>
        <Typography variant="caption" color="text.secondary" fontWeight={700}>
          EVAL:
        </Typography>
        <Typography variant="body2" fontWeight={800} color="#63c5f3" display="inline" ml={0.75}>
          {evalChangeStr}
        </Typography>
      </Box>

      {/* Better Move if available */}
      {data.betterMoveSan && (
        <Box mb={0.75}>
          <Typography variant="caption" color="#8cdbac" fontWeight={700}>
            BETTER:
          </Typography>
          <Typography variant="body2" fontWeight={800} color="#8cdbac" display="inline" ml={0.75}>
            {data.betterMoveSan}!
          </Typography>
        </Box>
      )}

      {/* Explanation */}
      {data.explanation && (
        <>
          <Divider sx={{ my: 0.75, borderColor: "rgba(255,255,255,0.08)" }} />
          <Typography variant="caption" color="text.secondary" display="block" lineHeight={1.4}>
            {data.explanation}
          </Typography>
        </>
      )}
    </Box>
  );
}
