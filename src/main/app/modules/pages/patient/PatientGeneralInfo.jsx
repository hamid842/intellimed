import { memo, useState, Suspense } from "react";
import { connect } from "react-redux";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";

import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import { getAccountPatients } from "@shared/reducers/patients/patient-reducer";
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

// Endpoints
const patientInfosApi = process.env.REACT_APP_CREATE_PATIENT_INFOS;

const PatientGeneralInfo = (props) => {
  const { account, editMode, setEditMode, setAddMode, selectedPatient } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [newPatientInfo, setNewPatientInfo] = useState({
    id: editMode ? selectedPatient?.id : null,
    firstName: editMode ? selectedPatient?.firstName : "",
    lastName: editMode ? selectedPatient?.lastName : "",
    birthDate: editMode ? selectedPatient?.birthDate : new Date(),
    idNo: editMode ? selectedPatient?.idNo : "",
    address: editMode ? selectedPatient?.address : "",
    phoneNumber1: editMode ? selectedPatient?.phoneNumber1 : "",
    phoneNumber2: editMode ? selectedPatient?.phoneNumber2 : "",
    email: editMode ? selectedPatient?.email : "",
    height: editMode ? selectedPatient?.height : "",
    age: editMode ? selectedPatient?.age : "",
    weight: editMode ? selectedPatient?.weight : "",
    bloodType: editMode ? selectedPatient?.bloodType : "",
    maritalStatus: editMode ? selectedPatient?.maritalStatus : "",
    relationshipWithUser: editMode ? selectedPatient?.relationshipWithUser : "",
    userInfo: {
      id: account?.id,
    },
  });
  const [loading, setLoading] = useState(false);

  const maritalStatusOptions = [
    { label: "Married", value: "MARRIED" },
    { label: "Single", value: "SINGLE" },
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
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewPatientInfo({ ...newPatientInfo, [name]: value });
  };

  const handleChangeDate = (date) => {
    setNewPatientInfo({
      ...newPatientInfo,
      birthDate: date,
    });
  };

  const handleChangePhone = (name, value) => {
    setNewPatientInfo({ ...newPatientInfo, [name]: "+" + value });
  };

  const handleEditPatientInfo = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`${patientInfosApi}/${selectedPatient?.id}`, newPatientInfo)
      .then((res) => {
        if (res.status === 200 || 201) {
          setLoading(false);
          enqueueSnackbar("Patient is updated successfully.", {
            variant: "success",
          });
          setEditMode(false);
          props.getAccountPatients(account?.id);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          enqueueSnackbar("Something went wrong!", { variant: "error" });
        }
      });
  };

  const handleCreatePatientInfo = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(patientInfosApi, newPatientInfo)
      .then((res) => {
        if (res.status === 200 || 201) {
          setLoading(false);
          enqueueSnackbar("Patient is created successfully.", {
            variant: "success",
          });
          setAddMode(false);
          props.getAccountPatients(account?.id);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          enqueueSnackbar("Something went wrong!", { variant: "error" });
        }
      });
  };

  return (
    selectedPatient && (
      <Suspense fallback={!selectedPatient && <div>Loading...</div>}>
        <ThemeProvider theme={formLabelsTheme}>
          <form
            onSubmit={
              editMode ? handleEditPatientInfo : handleCreatePatientInfo
            }
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={6}>
                <AppTextField
                  required
                  name="firstName"
                  label="First Name"
                  value={newPatientInfo.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <AppTextField
                  required
                  name="lastName"
                  label="Last Name"
                  value={newPatientInfo.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <AppTextField
                  required
                  name="idNo"
                  label="ID No"
                  value={newPatientInfo.idNo}
                  onChange={handleChange}
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
                    value={newPatientInfo.birthDate}
                    onChange={handleChangeDate}
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
                  value={newPatientInfo.address}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={6}>
                <PhoneInput
                  name="phoneNumber1"
                  label="Phone Number"
                  value={newPatientInfo.phoneNumber1}
                  onChange={(phone) => handleChangePhone("phoneNumber1", phone)}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <PhoneInput
                  name="phoneNumber2"
                  label="Mobile Number"
                  value={newPatientInfo.phoneNumber2}
                  onChange={(phone) => handleChangePhone("phoneNumber2", phone)}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <AppTextField
                  required
                  type="email"
                  name="email"
                  label="Email"
                  value={newPatientInfo.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <AppSelectField
                  name="maritalStatus"
                  label="Marital Status"
                  value={newPatientInfo.maritalStatus}
                  options={maritalStatusOptions}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <AppTextField
                  required
                  type="number"
                  name="age"
                  label="Age"
                  value={newPatientInfo.age}
                  onChange={handleChange}
                  endAdornment="Years Old"
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <AppTextField
                  required
                  type="number"
                  name="weight"
                  label="Weight"
                  value={newPatientInfo.weight}
                  onChange={handleChange}
                  endAdornment="Kg"
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <AppTextField
                  required
                  type="number"
                  name="height"
                  label="Height"
                  value={newPatientInfo.height}
                  onChange={handleChange}
                  endAdornment="Cm"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <AppSelectField
                  label="Blood Type"
                  name="bloodType"
                  value={newPatientInfo.bloodType}
                  options={bloodTypeOptions}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={6}>
                <AppTextField
                  required
                  name="relationshipWithUser"
                  label="Relationship With User"
                  value={newPatientInfo.relationshipWithUser}
                  onChange={handleChange}
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
                  startIcon={<CloseIcon />}
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
                  startIcon={
                    loading ? <CircularProgress size={15} /> : <CheckIcon />
                  }
                />
              </Grid>
            </Grid>
          </form>
        </ThemeProvider>
      </Suspense>
    )
  );
};

const mapStateToProps = ({ login, patients }) => ({
  account: login.account,
  selectedPatient: patients.selectedPatient,
});

export default connect(mapStateToProps, { getAccountPatients })(
  memo(PatientGeneralInfo)
);
