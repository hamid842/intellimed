// import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import AppTextField from "@components/AppTextField";
import PhoneInput from "@components/PhoneInput";
import AppButton from "@components/AppButton";
import UploadButton from "@shared/components/UploadButton";

const useStyles = makeStyles(() => ({
  titles: {
    borderBottom: "1px solid black",
  },
}));

const EditProfile = ({ setEditProfile, accountInfo }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12} className="mt-1">
          <Typography variant="h5" className={classes.titles}>
            Edit Profile
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className="mt-1">
          <AppTextField name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className="mt-1">
          <AppTextField name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-1">
          <AppTextField name="address" label="Address" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <PhoneInput label="Phone Number" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <PhoneInput label="Mobile Number" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-1">
          <AppTextField name="email" label="Email" type="email" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="text-center">
          <UploadButton title="Upload Image" />
        </Grid>
        <Grid item xs={6} sm={6} lg={6} className="text-center">
          <AppButton
            label="Cancel"
            variant="outlined"
            color="red"
            icon={<CloseIcon />}
            onClick={() => setEditProfile(false)}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={6} className="text-center">
          <AppButton
            label="Save"
            variant="outlined"
            color="green"
            icon={<CheckIcon />}
            width={85}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;