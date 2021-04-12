import React from "react";
import Grid from "@material-ui/core/Grid";

import AppTextField from "@components/AppTextField";

const GeneralInfo = ({ data, onChange }) => {
  const { age, weight, height, bloodType } = data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          type="number"
          name="age"
          label="Age"
          value={age}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          type="number"
          name="weight"
          label="Weight"
          value={weight}
          onChange={onChange}
          endAdornment="Kg"
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          type="number"
          name="height"
          label="Height"
          value={height}
          onChange={onChange}
          endAdornment="Cm"
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          required
          name="bloodType"
          label="Blood Type"
          value={bloodType}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default GeneralInfo;
