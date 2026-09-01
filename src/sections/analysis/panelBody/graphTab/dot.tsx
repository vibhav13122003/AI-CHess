import { DotProps } from "recharts";
import { ChartItemData, GraphFilterOption } from "./types";
import { CLASSIFICATION_COLORS } from "@/constants";
import { MoveClassification } from "@/types/enums";

export interface CustomDotProps extends DotProps {
  payload?: ChartItemData;
  activeFilter?: GraphFilterOption;
}

export default function CustomDot({
  cx,
  cy,
  payload,
  activeFilter = "all",
}: CustomDotProps) {
  if (cx === undefined || cy === undefined || !payload) return <svg />;

  const isSelectedFilter = (item: ChartItemData, filter: GraphFilterOption): boolean => {
    switch (filter) {
      case "all":
        return true;
      case "turningPoints":
        return Boolean(item.isTurningPoint);
      case "tactics":
        return Boolean(item.isMissedTactic);
      case "blunders":
        return item.moveClassification === MoveClassification.Blunder;
      case "mistakes":
        return item.moveClassification === MoveClassification.Mistake;
      case "inaccuracies":
        return item.moveClassification === MoveClassification.Inaccuracy;
      case "bestMoves":
        return (
          item.moveClassification === MoveClassification.Best ||
          item.moveClassification === MoveClassification.Splendid ||
          item.moveClassification === MoveClassification.Perfect
        );
      default:
        return true;
    }
  };

  if (!isSelectedFilter(payload, activeFilter)) {
    return <svg />;
  }

  // 1. Turning Point Marker (Double ring with Cyan accent)
  if (payload.isTurningPoint && (activeFilter === "all" || activeFilter === "turningPoints")) {
    return (
      <g style={{ cursor: "pointer" }}>
        <circle
          cx={cx}
          cy={cy}
          r={7.5}
          stroke="#63c5f3"
          strokeWidth={2}
          fill="#ef6b73"
          fillOpacity={1}
        />
        <circle cx={cx} cy={cy} r={3} fill="#ffffff" />
      </g>
    );
  }

  // 2. Missed Tactical Opportunity Marker (Gold Diamond / Dot)
  if (payload.isMissedTactic && (activeFilter === "all" || activeFilter === "tactics")) {
    return (
      <g style={{ cursor: "pointer" }}>
        <circle
          cx={cx}
          cy={cy}
          r={6.5}
          stroke="#ffffff"
          strokeWidth={1.5}
          fill="#ecb951"
          fillOpacity={1}
        />
        <circle cx={cx} cy={cy} r={2.5} fill="#0d1a24" />
      </g>
    );
  }

  // 3. Move Classification Standard Dots
  const moveClass = payload.moveClassification;
  if (!moveClass) return <svg />;

  const moveColor = CLASSIFICATION_COLORS[moveClass] || "grey";

  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      stroke="#101c28"
      strokeWidth={1.5}
      fill={moveColor}
      fillOpacity={1}
      style={{ cursor: "pointer" }}
    />
  );
}
