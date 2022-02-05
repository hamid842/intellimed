import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CircularProgress from "@mui/material/CircularProgress";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import axios from "axios";
import dayjs from "dayjs";

import PrescriptionInformation from "./PrescriptionInfo";
import MedicineInformation from "./MedicineInfo";
import PharmacyAndRefill from "./PharmacyAndRefill";
import AppButton from "@shared/components/AppButton";
import colors from "@config/colors";
import Title from "@shared/components/Title";
import NoPatient from "./NoPatient";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    padding: 15,
    borderRadius: 10,
  },
  button: {
    width: 110,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  alert: {
    marginTop: 20,
  },
}));

// Endpoints
const createNewPrescriptionApi = process.env.REACT_APP_GET_ALL_PRESCRIPTION;
const uploadImageApi = process.env.REACT_APP_UPLOAD_FILE_API;

const NewDescription = ({ patients, selectedPatientFromTopMenu }) => {
  const classes = useStyles();
  const initialState = {
    issueDate: new Date(),
    hasRefill: false,
    importantInfo: "",
    barCode: "",
    qty: "1",
    prescriptionImageUrl: null,
    medicine: {},
    medicType: "",
    usageDescription: "",
    cron: "",
    pharmacy: {},
    loading: false,
    refillTime: new Date(),
    patientInfo: selectedPatientFromTopMenu,
    status: "ACTIVE",
  };
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [newDescription, setNewDescription] = useState(initialState);
  const [prescriptionImageUrl, setPrescriptionImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewDescription({ ...newDescription, [name]: value });
  };

  const handleChangeDate = (date, name) => {
    setNewDescription({
      ...newDescription,
      [name]: dayjs(date),
    });
  };

  const handleChangeFile = async (e, type) => {
    setLoading(true);
    type === "prescription" && setPrescriptionImageUrl(e.target.files[0]);
    let data = new FormData();
    data.append("file", e.target.files[0]);
    let config = {
      method: "post",
      url: `${uploadImageApi}?imageSourceType=${type}`,
      data,
    };
    await axios(config)
      .then(async (res) => {
        if (res.status === 200 || 201) {
          enqueueSnackbar(
            `${e.target.files[0]?.name} file is Uploaded successfully.`,
            {
              variant: "success",
            }
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          enqueueSnackbar("Something went wrong!", { variant: "error" });
        }
      });
  };

  const handleChangeCron = (value) => {
    setNewDescription({ ...newDescription, cron: value });
  };

  const getSteps = () => {
    return [
      "Prescription Information",
      "Medicine Information",
      "Pharmacy & Refill",
    ];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PrescriptionInformation
            value={newDescription}
            image={prescriptionImageUrl}
            loading={loading}
            onChange={handleChange}
            onChangeDate={handleChangeDate}
            onChangeFile={handleChangeFile}
          />
        );
      case 1:
        return (
          <MedicineInformation
            value={newDescription}
            onChange={handleChange}
            onChangeCron={handleChangeCron}
          />
        );
      case 2:
        return (
          <PharmacyAndRefill
            value={newDescription}
            onChange={handleChange}
            onChangeDate={handleChangeDate}
          />
        );
      default:
        return "Unknown step";
    }
  };
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      axios
        .post(createNewPrescriptionApi, newDescription)
        .then((res) => {
          if (res.status === 200 || 201) {
            setLoading(false);
            enqueueSnackbar("Prescription Created Successfully.", {
              variant: "success",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper elevation={1} className={classes.container}>
      <Title title="Add New Description" />
      {patients?.length > 0 ? (
        <div className={classes.root}>
          <div className={classes.alert}>
            <Alert severity="warning">
              You are adding a new prescription for{" "}
              <strong>
                {selectedPatientFromTopMenu?.firstName}{" "}
                {selectedPatientFromTopMenu?.lastName}
              </strong>
              ! If you want to add for another patient, please select from top
              menu.
            </Alert>
          </div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <AppButton
                        label="back"
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        startIcon={<ArrowLeftIcon />}
                      />
                      <AppButton
                        label={
                          activeStep === steps.length - 1 ? "Finish" : "Next"
                        }
                        variant="outlined"
                        color={
                          activeStep === steps.length - 1
                            ? "green"
                            : colors.darkBlue
                        }
                        onClick={handleNext}
                        className={classes.button}
                        endIcon={
                          activeStep === steps.length - 1 ? (
                            loading ? (
                              <CircularProgress />
                            ) : (
                              <CheckIcon />
                            )
                          ) : (
                            <ArrowRightIcon />
                          )
                        }
                      />
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      ) : (
        <NoPatient />
      )}
    </Paper>
  );
};

const mapStateToProps = ({ patients }) => ({
  patients: patients.patients,
  selectedPatientFromTopMenu: patients.selectedPatientFromTopMenu,
});

export default connect(mapStateToProps, {})(NewDescription);
