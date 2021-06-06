import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import hamid from "@images/hamid.png";
import Prescription from "./Prescription";
import RadioButton from "./RadioButton";

const useStyles = makeStyles((theme) => ({
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
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    // backgroundColor: colors.mainGrey,
  },
}));

const PatientAccordion = ({ patient, prescriptions }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("ACTIVE");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const items = [];
  items.push(prescriptions);
  items.push(prescriptions);
  items.push({ prescriptionCode: "Hello", status: "INACTIVE" });
  const filteredItems = items.filter((item) => item?.status === "ACTIVE");
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={2} lg={2}>
            <img src={hamid} alt="Patient Pic" className={classes.image} />
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
        {selectedValue === "ACTIVE"
          ? filteredItems.map((item, i) => (
              <Prescription key={i} prescription={item} />
            ))
          : items.map((item, i) => (
              <Prescription key={i} prescription={item} />
            ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientAccordion;
