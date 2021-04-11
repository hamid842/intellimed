import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";

import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import GeneralInfo from "./GeneralInfo";
import SpecialInfo from "./SpecialInfo";
import AppButton from "@components/AppButton";
import UploadButton from "@components/UploadButton";
import axios from "axios";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
}));

// Endpoints
const createPatientInfosApi = process.env.REACT_APP_CREATE_PATIENT_INFOS;

const Profile = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    birthDate: null,
    address: "",
    age: "",
    weight: "",
    height: "",
    phoneNumber1: null,
    phoneNumber2: null,
    bloodType: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleChangeDate = (date) => {
    setPatientInfo({ ...patientInfo, birthDate: date });
  };

  const handleChangePhone = (name, value) => {
    setPatientInfo({ ...patientInfo, [name]: "+" + value });
  };

  const handleCreatePatientInfo = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(createPatientInfosApi, patientInfo)
      .then((res) => {
        if (res.status === 200 || 201) {
          enqueueSnackbar("Profile is created successfully.", {
            variant: "success",
          });
          setPatientInfo({
            firstName: "",
            lastName: "",
            birthDate: null,
            address: "",
            age: "",
            weight: "",
            height: "",
            phoneNumber1: null,
            phoneNumber2: null,
            bloodType: "",
          });
          console.log(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  };
  return (
    <Box className={classes.box}>
      <ThemeProvider theme={formLabelsTheme}>
        <form onSubmit={handleCreatePatientInfo}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} lg={4}>
              <GeneralInfo
                data={patientInfo}
                onChange={handleChange}
                handleChangeDate={handleChangeDate}
                handleChangePhone={handleChangePhone}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <SpecialInfo data={patientInfo} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Grid container>
                <Grid item xs={12} sm={12} lg={12} className="text-center">
                  <UploadButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} lg={12} className="text-right">
              <AppButton
                type="submit"
                label="save"
                variant="outlined"
                color="green"
                width={100}
                icon={
                  loading ? (
                    <CircularProgress size="18px" color="inherit" />
                  ) : (
                    <CheckIcon color="inherit" />
                  )
                }
              />
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default Profile;
