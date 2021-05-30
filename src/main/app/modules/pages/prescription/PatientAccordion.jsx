import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Carousel from "react-material-ui-carousel";

import hamid from "@images/hamid.png";
import Prescription from "./Prescription";
import colors from "@config/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
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
  detailsContainer: {
    width: "100%",
  },
  accordionDetals: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.mainGrey,
  },
}));

const PatientAccordion = ({ patient, prescriptions }) => {
  const classes = useStyles();

  const items = [];
  items.push(prescriptions);
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <Grid item xs={4} sm={4} lg={4}>
            <img src={hamid} alt="Patient Pic" className={classes.image} />
          </Grid>
          <Grid item xs={4} sm={4} lg={4}>
            <Typography variant="subtitle2">
              {patient?.firstName + " " + patient?.lastName}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} lg={4}>
            <Typography variant="subtitle2">{patient?.email}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetals}>
        <Carousel className={classes.detailsContainer}>
          {items.map((item, i) => (
            <Prescription key={i} item={item} id={item?.id} />
          ))}
        </Carousel>
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientAccordion;
