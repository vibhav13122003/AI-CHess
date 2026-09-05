import { Grid2 as Grid } from "@mui/material";
import { PageTitle } from "@/components/pageTitle";
import CurriculumDashboard from "@/sections/curriculum/CurriculumDashboard";

export default function CurriculumPage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      size={12}
      sx={{ px: { xs: 2, sm: 4 }, py: { xs: 2, sm: 4 } }}
    >
      <PageTitle title="My Mistake Curriculum — ChessAi" />
      <CurriculumDashboard />
    </Grid>
  );
}
