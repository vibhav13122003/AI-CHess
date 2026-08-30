import {
  Grid2 as Grid,
  Grid2Props as GridProps,
  Paper,
  Typography,
} from "@mui/material";
import MovesPanel from "./classificationTab/movesPanel";
import AiGameReview from "./analysisTab/aiGameReview";
import { useAtomValue } from "jotai";
import { activePracticeAtom } from "../states";

export default function AiReviewTab(props: GridProps) {
  const practice = useAtomValue(activePracticeAtom);

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
      {!practice?.isActive && (
        <Paper
          elevation={0}
          sx={{
            flex: "1 1 19rem",
            minWidth: "17rem",
            minHeight: 0,
            display: "flex",
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
      )}
      <AiGameReview />
    </Grid>
  );
}
