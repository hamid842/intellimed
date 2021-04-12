import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import AppTextField from "@components/AppTextField";
import PhoneInput from "@components/PhoneInput";

const GeneralInfo = ({
  data,
  onChange,
  handleChangeDate,
  handleChangePhone,
}) => {
  const {
    firstName,
    lastName,
    birthDate,
    address,
    phoneNumOne,
    phoneNumTwo,
  } = data;
  return (
    <Grid container spacing={2}>
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
          name="address"
          label="Address"
          value={address}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
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
        <PhoneInput
          name="phoneNumber1"
          label="Phone Number 1"
          value={phoneNumOne}
          onChange={(phone) => handleChangePhone("phoneNumber1", phone)}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <PhoneInput
          name="phoneNumber2"
          label="Phone Number 2"
          value={phoneNumTwo}
          onChange={(phone) => handleChangePhone("phoneNumber2", phone)}
        />
      </Grid>
    </Grid>
  );
};

export default GeneralInfo;
