import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import CheckIcon from "@material-ui/icons/Check";
import axios from "axios";
import dayjs from "dayjs";

import PrescriptionInformation from "./PrescriptionInfo";
import MedicineInformation from "./MedicineInfo";
import PharmacyAndRefill from "./PharmacyAndRefill";
import AppButton from "@shared/components/AppButton";
import colors from "@config/colors";
import Title from "@shared/components/Title";

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
}));

const initialState = {
  issueDate: new Date(),
  barCode: "",
  prescriptionImageUrl: null,
  medicImageUrl: null,
  genericName: "",
  medicType: "",
  usageDescription: "",
  cron: "",
  pharmacy: "",
  refillTime: new Date(),
};

// Endpoints
const createNewPrescriptionApi = process.env.REACT_APP_GET_ALL_PRESCRIPTION;
const uploadImageApi = process.env.REACT_APP_UPLOAD_FILE_API;

const NewDescription = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [newDescription, setNewDescription] = useState(initialState);
  const [prescriptionImageUrl, setPrescriptionImageUrl] = useState(null);
  const [medicineImageUrl, setMedicineImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewDescription({ ...newDescription, [name]: value });
  };

  const handleChangeDate = (date, name) => {
    setNewDescription({
      ...newDescription,
      [name]: dayjs(date).format("YYYY-MM-DD HH:mm"),
    });
  };

  const handleChangeFile = async (e, type) => {
    setLoading(true);
    type === "prescription" && setPrescriptionImageUrl(e.target.files[0]);
    type === "medicine" && setMedicineImageUrl(e.target.files[0]);
    var data = new FormData();
    data.append("file", e.target.files[0]);
    var config = {
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
            image={medicineImageUrl}
            onChange={handleChange}
            onChangeFile={handleChangeFile}
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
      axios
        .post(createNewPrescriptionApi, newDescription)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
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
    <Paper className={classes.container}>
      <Title title="Add New Description" />
      <div className={classes.root}>
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
                          <CheckIcon />
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
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </Paper>
  );
};

export default NewDescription;
