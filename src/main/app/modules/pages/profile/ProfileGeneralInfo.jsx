import React from "react";
import Grid from "@material-ui/core/Grid";
import AppTextField from "@components/AppTextField";


const ProfileGeneralInfo = ({
  data,
  onChange,
}) => {
  const {
    login,
    firstName,
    lastName,
    email,
    imageUrl,
    activated,
  } = data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          name="login"
          label="User Name"
          value={login}          
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          name="email"
          label="email"
          value={email}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          name="imageUrl"
          label="Image"
          value={imageUrl}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          name="activated"
          label="Is Active"
          value={activated}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileGeneralInfo;
