import { Grid, Typography } from "@material-ui/core";

const Devices = ({ accountInfo }) => {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">Device Name:</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.name}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">OS:</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.os}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">Devise ID:</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.deviceId}</Typography>
      </Grid>
    </Grid>
  );
};

export default Devices;
