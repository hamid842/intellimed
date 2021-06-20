import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Prescription from "./Prescription";
import RadioButton from "./RadioButton";
import NoPrescription from "./NoPrescription";
import { getAllPrescriptions } from "@shared/constants/get-prescriptions";
import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  accordion: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  noImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.mediumGrey,
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
}));

const PatientAccordion = ({ patient }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("ACTIVE");
  const [prescriptions, setPrescriptions] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (patient) {
      const fetchPrescriptions = async () => {
        setPrescriptions(await getAllPrescriptions(patient.id));
      };
      fetchPrescriptions();
    }
  }, [patient]);

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={2} lg={2}>
            {patient?.patientImageUrl ? (
              <img
                src={patient?.patientImageUrl}
                alt="Pic"
                className={classes.image}
              />
            ) : (
              <div className={classes.noImage} />
            )}
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography variant="subtitle2">
              <strong>Name: </strong>
              {patient?.firstName + " " + patient?.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} lg={2}>
            <Typography variant="body2">
              <strong>Age: </strong>
              {patient?.age}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} className="text-center">
            <Typography variant="body2">
              <strong>Phone No.: </strong>
              {patient?.phoneNumber1}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <RadioButton value={selectedValue} onChange={handleChange} />
        {prescriptions.length > 0 ? (
          prescriptions.map((item, i) => (
            <Prescription key={i} prescription={item} />
          ))
        ) : (
          <NoPrescription />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientAccordion;
