import { DotProps } from "recharts";
import { ChartItemData } from "./types";
import { CLASSIFICATION_COLORS } from "@/constants";

export default function CustomDot({
  cx,
  cy,
  payload,
}: DotProps & { payload?: ChartItemData }) {
  if (cx === undefined || cy === undefined) return <svg />;

  if (payload?.isTurningPoint) {
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={7}
          stroke="#63c5f3"
          strokeWidth={2}
          fill="#ef6b73"
          fillOpacity={1}
        />
        <circle cx={cx} cy={cy} r={3} fill="#ffffff" />
      </g>
    );
  }

  if (payload?.isMissedTactic) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke="#ffffff"
        strokeWidth={1.5}
        fill="#ecb951"
        fillOpacity={1}
      />
    );
  }

  const moveColor = payload?.moveClassification
    ? CLASSIFICATION_COLORS[payload.moveClassification]
    : "grey";

  return (
    <circle
      cx={cx}
      cy={cy}
      r={4.5}
      stroke="#19191c"
      strokeWidth={1.5}
      fill={moveColor}
      fillOpacity={1}
    />
  );
}

