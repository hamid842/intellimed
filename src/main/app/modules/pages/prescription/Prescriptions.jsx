import { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import { getPatients } from "@shared/constants/get-patients";
import PatientAccordion from "./PatientAccordion";
import { getAllPrescription } from "@shared/constants/get-prescriptions";
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

const Prescriptions = ({ account }) => {
  const classes = useStyles();

  const [patientInfo, setPatientInfo] = useState();
  const [prescriptions, setPrescriptions] = useState();

  useEffect(() => {
    const fetchPatients = async () => {
      setPatientInfo(await getPatients(account?.id));
    };
    fetchPatients();
    const fetchPrescriptions = async () => {
      setPrescriptions(await getAllPrescription(account?.id));
    };
    fetchPrescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const patients = [];
  patients.push(patientInfo);

  return (
    <Paper className={classes.root}>
      <Title title="Patient(s) and Prescription(s)" />
      {patients.map((item, i) => {
        return (
          <PatientAccordion
            key={i}
            patient={item}
            prescriptions={prescriptions}
          />
        );
      })}
    </Paper>
  );
};

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(Prescriptions));
