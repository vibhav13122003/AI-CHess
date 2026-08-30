import React from "react";
import { Box, Typography, TypographyProps } from "@mui/material";
import { useGameNavigation } from "@/sections/analysis/hooks/useGameNavigation";

interface Props {
  text: string;
  typographyProps?: TypographyProps;
  component?: React.ElementType;
}

// Regex to capture numbered moves (e.g. "16. Nxf7", "16... Qh2+") or standard chess SAN notations
const MOVE_REGEX =
  /(\b\d{1,3}\s*(?:\.{1,3})\s*(?:[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?|O-O(?:-O)?)[+#!?]*|\b(?:[KQRBN][a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?|[a-h]x[a-h][1-8](?:=[QRBN])?|O-O(?:-O)?)[+#!?]*)/g;

export default function InteractiveChessText({
  text,
  typographyProps,
  component = "div",
}: Props) {
  const { goToPly, findPlyForMove } = useGameNavigation();

  if (!text) return null;

  const paragraphs = text.split("\n\n").filter(Boolean);

  const renderSegment = (segmentText: string, key: string | number) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    // Reset regex index
    MOVE_REGEX.lastIndex = 0;

    while ((match = MOVE_REGEX.exec(segmentText)) !== null) {
      const matchIndex = match.index;
      const matchedString = match[0];

      // Add preceding plain text
      if (matchIndex > lastIndex) {
        parts.push(segmentText.slice(lastIndex, matchIndex));
      }

      const ply = findPlyForMove(matchedString);
      const isKnownMove = ply !== null;

      parts.push(
        <Box
          component="span"
          key={`${key}-${matchIndex}`}
          onClick={(e: React.MouseEvent) => {
            if (isKnownMove) {
              e.stopPropagation();
              goToPly(ply);
            }
          }}
          sx={{
            display: "inline-block",
            px: isKnownMove ? 0.6 : 0.2,
            py: 0.1,
            mx: 0.3,
            borderRadius: "4px",
            fontWeight: 700,
            cursor: isKnownMove ? "pointer" : "default",
            color: isKnownMove ? "#63c5f3" : "inherit",
            bgcolor: isKnownMove ? "rgba(99, 197, 243, 0.12)" : "transparent",
            border: isKnownMove
              ? "1px solid rgba(99, 197, 243, 0.3)"
              : "none",
            transition: "all 0.15s ease",
            "&:hover": isKnownMove
              ? {
                  bgcolor: "rgba(99, 197, 243, 0.25)",
                  borderColor: "#63c5f3",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }
              : undefined,
          }}
          title={isKnownMove ? `Jump to move ${matchedString}` : undefined}
        >
          {matchedString}
        </Box>
      );

      lastIndex = matchIndex + matchedString.length;
    }

    // Add trailing plain text
    if (lastIndex < segmentText.length) {
      parts.push(segmentText.slice(lastIndex));
    }

    return parts;
  };

  return (
    <Box component={component}>
      {paragraphs.map((paragraph, pIdx) => (
        <Typography
          key={pIdx}
          variant="body2"
          paragraph={pIdx < paragraphs.length - 1}
          sx={{ lineHeight: 1.6, ...typographyProps?.sx }}
          {...typographyProps}
        >
          {renderSegment(paragraph, pIdx)}
        </Typography>
      ))}
    </Box>
  );
}
