import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SideEffects = ({ medication: { sideEffects } }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle2">Side Effects</Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        {sideEffects?.map((item, i) => (
          <Typography>-{item}</Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default SideEffects;
