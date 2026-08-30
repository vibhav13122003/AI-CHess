import { TooltipProps } from "recharts";
import { ChartItemData } from "./types";
import { getLineEvalLabel } from "@/lib/chess";
import { Box, Chip, Typography } from "@mui/material";
import { CLASSIFICATION_COLORS } from "@/constants";

export default function CustomTooltip({
  active,
  payload,
}: TooltipProps<number, number>) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload as ChartItemData;
  const evalLabel = getLineEvalLabel(data);
  const color = data.moveClassification
    ? CLASSIFICATION_COLORS[data.moveClassification]
    : "#ffffff";

  const moveText = data.san
    ? `${data.moveNumber ? `${data.moveNumber}${data.color === "w" ? "." : "..."} ` : ""}${data.san}`
    : `Move ${data.moveNb}`;

  return (
    <Box
      sx={{
        bgcolor: "#101c28",
        border: "1px solid #238fc4",
        borderRadius: 1.5,
        p: 1.25,
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        minWidth: 140,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} mb={0.5}>
        <Typography variant="body2" fontWeight={800} color="#ffffff">
          {moveText}
        </Typography>
        {data.phase && (
          <Chip
            size="small"
            label={data.phase.toUpperCase()}
            sx={{
              height: 18,
              fontSize: "0.65rem",
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.secondary",
            }}
          />
        )}
      </Box>

      <Typography variant="subtitle2" fontWeight={800} color="#63c5f3">
        Eval: {evalLabel}
      </Typography>

      {data.moveClassification && (
        <Typography variant="caption" display="block" sx={{ color, fontWeight: 700, mt: 0.25 }}>
          {data.isTurningPoint ? "★ TURNING POINT · " : ""}
          {data.moveClassification.toUpperCase()}
        </Typography>
      )}
    </Box>
  );
}

