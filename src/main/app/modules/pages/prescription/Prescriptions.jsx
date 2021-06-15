import { memo } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import PatientAccordion from "./PatientAccordion";
import Title from "@shared/components/Title";

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
}));

const Prescriptions = ({ account, patients }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Title title="Patient(s) and Prescription(s)" />
      {patients.map((item, i) => {
        return <PatientAccordion key={i} patient={item} />;
      })}
    </Paper>
  );
};

const mapStateToProps = ({ login, patients }) => ({
  account: login.account,
  patients: patients.patients,
});

export default connect(mapStateToProps, {})(memo(Prescriptions));
