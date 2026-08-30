import React from "react";
import { Chip, ChipProps } from "@mui/material";
import { useGameNavigation } from "@/sections/analysis/hooks/useGameNavigation";
import PrettyMoveSan from "./prettyMoveSan";

interface Props {
  san: string;
  ply?: number;
  color?: "white" | "black" | "w" | "b";
  classification?: string;
  score?: number;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  label?: string;
  chipProps?: Partial<ChipProps>;
  onClick?: () => void;
}

export default function InteractiveMoveChip({
  san,
  ply,
  color,
  score,
  size = "small",
  variant = "outlined",
  label,
  chipProps,
  onClick,
}: Props) {
  const { goToPly, findPlyForMove } = useGameNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
      return;
    }

    if (ply !== undefined) {
      goToPly(ply);
      return;
    }

    const matchedPly = findPlyForMove(san);
    if (matchedPly !== null) {
      goToPly(matchedPly);
    }
  };

  const moveColor =
    color === "black" || color === "b"
      ? "b"
      : color === "white" || color === "w"
        ? "w"
        : "w";

  const scoreText =
    score !== undefined
      ? ` ${score >= 0 ? "+" : ""}${(score / 100).toFixed(1)}`
      : "";

  const displayLabel = label || `${san}${scoreText}`;

  return (
    <Chip
      size={size}
      variant={variant}
      clickable
      onClick={handleClick}
      label={
        <PrettyMoveSan
          san={displayLabel}
          color={moveColor}
          typographyProps={{
            fontSize: size === "small" ? "0.75rem" : "0.85rem",
            fontWeight: 600,
          }}
        />
      }
      sx={{
        cursor: "pointer",
        transition: "all 0.15s ease",
        borderColor: "rgba(99, 197, 243, 0.4)",
        bgcolor: "rgba(99, 197, 243, 0.08)",
        "&:hover": {
          bgcolor: "rgba(99, 197, 243, 0.2)",
          borderColor: "#63c5f3",
          transform: "translateY(-1px)",
        },
        ...chipProps?.sx,
      }}
      {...chipProps}
    />
  );
}
