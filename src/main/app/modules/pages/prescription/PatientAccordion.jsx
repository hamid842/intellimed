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
import colors from "@config/colors";

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
    display: "grid",
    gridTemplateRows: "auto",
    padding: 20,
    backgroundColor: colors.mainGrey,
  },
}));

const PatientAccordion = ({ patient, prescriptions }) => {
  const classes = useStyles();

  const items = [];
  items.push(prescriptions);
  items.push(prescriptions);
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={4} lg={4}>
            <img src={hamid} alt="Patient Pic" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Typography variant="subtitle2">
              <strong>Name: </strong>
              {patient?.firstName + " " + patient?.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Typography variant="body2">
              <strong>Age: </strong>
              {patient?.age}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {items.map((item, i) => (
          <Prescription key={i} prescription={item} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientAccordion;
