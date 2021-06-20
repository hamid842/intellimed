import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Barcode from "react-barcode";
import dayjs from "dayjs";

import PrescriptionItem from "./PrescriptionItem";

const useStyles = makeStyles(() => ({
  accordion: {
    backgroundColor: "#bfa734",
    borderRadius: 10,
    margin: 5,
  },
  container: {
    boxShadow: "none",
    border: "none",
  },
}));

const PrescriptionDetail = ({ prescription }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.container}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordion}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography variant="body2">
              <strong>Name: </strong>
              {prescription?.prescriptionCode}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Typography variant="body2">
              <strong>Promised: </strong>
              {dayjs(prescription?.issueDate).format("YYYY-MM-DD HH:mm")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={5}>
            <Barcode
              value={prescription?.barCode}
              width={0.7}
              height={30}
              fontSize={14}
              background="transparent"
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <PrescriptionItem prescription={prescription} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PrescriptionDetail;
