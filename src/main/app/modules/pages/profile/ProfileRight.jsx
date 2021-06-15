import { Grid } from "@material-ui/core";

import ProfileGeneralInfo from "./ProfileGeneralInfo";
import Devices from "./Devices";
import Title from "@shared/components/Title";

const ProfileRight = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Title title="General Information" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProfileGeneralInfo />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Title title="Mobile Devices" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Devices />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileRight;
