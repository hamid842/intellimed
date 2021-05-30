import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
// import CircularProgress from "@material-ui/core/CircularProgress";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import AppTextField from "@components/AppTextField";
import PhoneInput from "@components/PhoneInput";
import AppSelectField from "@components/AppSelectField";
import AppButton from "@components/AppButton";
import UploadButton from "@components/UploadButton";

const useStyles = makeStyles(() => ({
  btnContainer: {
    textAlign: "end",
  },
  saveBtn: {
    textAlign: "end",
  },
  cancelBtn: {
    textAlign: "end",
    marginRight: 10,
  },
  header: {
    borderBottom: "1px solid grey",
    paddingBottom: 10,
  },
}));

const PatientGeneralInfo = ({
  data,
  editMode,
  setEditMode,
  setAddMode,
  onChange,
  onSubmit,
  handleChangeDate,
  handleChangePhone,
}) => {
  const classes = useStyles();
  const [newPatientInfo] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    idNo: "",
    address: "",
    phoneNumber1: "",
    phoneNumber2: "",
    email: "",
    height: "",
    age: "",
    weight: "",
    bloodType: "",
    maritalStatus: "",
    relationshipWithUser: "",
  });
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
  } = data;

  const maritalStatusOptions = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
  ];

  const bloodTypeOptions = [
    { label: "B+", value: "B_p" },
    { label: "A+", value: "A_p" },
    { label: "B-", value: "B_n" },
    { label: "A-", value: "A_n" },
    { label: "AB+", value: "AB_p" },
    { label: "AB-", value: "AB_n" },
    { label: "O+", value: "O_p" },
    { label: "O-", value: "O_n" },
  ];

  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={6}>
            <AppTextField
              required
              name="firstName"
              label="First Name"
              value={editMode ? firstName : newPatientInfo.firstName}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AppTextField
              required
              name="lastName"
              label="Last Name"
              value={editMode ? lastName : newPatientInfo.lastName}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AppTextField
              required
              name="id"
              label="ID No"
              value={editMode ? idNo : newPatientInfo.idNo}
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
                value={editMode ? birthDate : newPatientInfo.birthDate}
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
              value={editMode ? address : newPatientInfo.address}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <PhoneInput
              name="phoneNumber1"
              label="Phone Number"
              value={editMode ? phoneNumber1 : newPatientInfo.phoneNumber1}
              onChange={(phone) => handleChangePhone("phoneNumber1", phone)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <PhoneInput
              name="phoneNumber2"
              label="Mobile Number"
              value={editMode ? phoneNumber2 : newPatientInfo.phoneNumber2}
              onChange={(phone) => handleChangePhone("phoneNumber2", phone)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AppTextField
              required
              type="email"
              name="email"
              label="Email"
              value={editMode ? email : newPatientInfo.email}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AppSelectField
              name="maritalStatus"
              label="Marital Status"
              value={editMode ? maritalStatus : newPatientInfo.maritalStatus}
              options={maritalStatusOptions}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <AppTextField
              required
              type="number"
              name="age"
              label="Age"
              value={editMode ? age : newPatientInfo.age}
              onChange={onChange}
              endAdornment="Years Old"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <AppTextField
              required
              type="number"
              name="weight"
              label="Weight"
              value={editMode ? weight : newPatientInfo.weight}
              onChange={onChange}
              endAdornment="Kg"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <AppTextField
              required
              type="number"
              name="height"
              label="Height"
              value={editMode ? height : newPatientInfo.height}
              onChange={onChange}
              endAdornment="Cm"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AppSelectField
              label="Blood Type"
              name="bloodType"
              value={editMode ? bloodType : newPatientInfo.bloodType}
              options={bloodTypeOptions}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <AppTextField
              required
              name="relationshipWithUser"
              label="Relationship With User"
              value={
                editMode
                  ? relationshipWithUser
                  : newPatientInfo.relationshipWithUser
              }
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <UploadButton title="Upload image" />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className={classes.btnContainer}>
            <AppButton
              label="cancel"
              variant="outlined"
              color="red"
              width={100}
              icon={<CloseIcon />}
              className={classes.cancelBtn}
              onClick={() => {
                setAddMode(false);
                setEditMode(false);
              }}
            />
            <AppButton
              type="submit"
              label="save"
              variant="outlined"
              color="green"
              className={classes.saveBtn}
              width={100}
              icon={<CheckIcon />}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default PatientGeneralInfo;
