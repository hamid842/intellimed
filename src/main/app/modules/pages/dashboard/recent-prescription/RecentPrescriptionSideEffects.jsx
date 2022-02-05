import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SideEffects = ({ medication: { sideEffects } }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle2">Side Effects</Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        {sideEffects?.map((item, i) => (
          <Typography variant="body2">-{item}</Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default SideEffects;
