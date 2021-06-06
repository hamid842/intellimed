import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

import PrescriptionInformation from "./PrescriptionInfo";
import MedicineInformation from "./MedicineInfo";
import PharmacyAndRefill from "./PharmacyAndRefill";
import AppButton from "@shared/components/AppButton";
import colors from "@config/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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

function getSteps() {
  return [
    "Prescription Information",
    "Medicine Information",
    "Pharmacy & Refill",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PrescriptionInformation />;
    case 1:
      return <MedicineInformation />;
    case 2:
      return <PharmacyAndRefill />;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
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
                    label={activeStep === steps.length - 1 ? "Finish" : "Next"}
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
  );
}
