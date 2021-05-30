import { Grid } from "@material-ui/core";

import ProfileGeneralInfo from "./ProfileGeneralInfo";
import Devices from "./Devices";
import Title from "@shared/components/Title";

const ProfileRight = ({ accountInfo }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Title title="General Information" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-3 mb-3">
          <ProfileGeneralInfo />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Title title="Devices" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-3 mb-3">
          <Devices />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileRight;
