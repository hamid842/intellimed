import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ProfileGeneralInfo from "./ProfileGeneralInfo";
import Devices from "./Devices";

const useStyles = makeStyles(() => ({
  titles: {
    borderBottom: "1px solid black",
  },
  divider: {
    color: "red",
    height: 3,
  },
}));

const ProfileRight = ({ accountInfo }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h5" className={classes.titles}>
            General Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-3 mb-3">
          <ProfileGeneralInfo accountInfo={accountInfo} />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h5" className={classes.titles}>
            Devices
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-3 mb-3">
          <Devices id={accountInfo?.id} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileRight;
