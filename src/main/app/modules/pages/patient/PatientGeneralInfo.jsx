import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import AppTextField from "@components/AppTextField";
import PhoneInput from "@components/PhoneInput";

const PatientGeneralInfo = ({
  data,
  onChange,
  handleChangeDate,
  handleChangePhone,
}) => {
  const {
    firstName,
    lastName,
    birthDate,
    idNo,
    address,
    phoneNumber1,
    phoneNumber2,
    email,
    height,
    age,
    weight,
    bloodType,
    maritalStatus,
    relationshipWithUser,
    patientImageUrl,
  } = data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="id"
          label="ID No"
          value={idNo}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            required
            label="Birth Date"
            error={false}
            size="small"
            helperText={false}
            id="date-picker-dialog"
            inputVariant="outlined"
            format="yyyy-MM-dd"
            value={birthDate}
            onChange={(date) => handleChangeDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <AppTextField
          name="address"
          label="Address"
          value={address}
          onChange={onChange}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={6}>
        <PhoneInput
          name="phoneNumber1"
          label="Phone Number 1"
          value={phoneNumber1}
          onChange={(phone) => handleChangePhone("phoneNumber1", phone)}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <PhoneInput
          name="phoneNumber2"
          label="Phone Number 2"
          value={phoneNumber2}
          onChange={(phone) => handleChangePhone("phoneNumber2", phone)}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          name="email"
          label="email"
          value={email}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          type="number"
          name="age"
          label="Age"
          value={age}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
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
      <Grid item xs={12} sm={6} lg={6}>
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
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="bloodType"
          label="Blood Type"
          value={bloodType}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="maritalStatus"
          label="Marital Status"
          value={maritalStatus}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          required
          name="relationshipWithUser"
          label="Relationship With User"
          value={relationshipWithUser}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AppTextField
          name="patientImageUrl"
          label="Image"
          value={patientImageUrl}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default PatientGeneralInfo;
