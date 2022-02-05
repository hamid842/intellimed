import {memo} from "react";
import {connect} from "react-redux";
import {makeStyles} from "@mui/styles";
import {Paper, createTheme} from "@mui/material";

import PatientAccordion from "./PatientAccordion";
import Title from "@shared/components/Title";
import NoPrescription from "./NoPrescription";

const theme = createTheme()

const useStyles = makeStyles({
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
});

const Prescriptions = ({patients}) => {
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.root}>
            <Title title="Patient(s) and Prescription(s)"/>
            {patients?.length > 0 ? (
                patients?.map((patient) => (
                    <PatientAccordion key={patient.id} patient={patient}/>
                ))
            ) : (
                <NoPrescription/>
            )}
        </Paper>
    );
};

const mapStateToProps = ({patients}) => ({
    patients: patients.patients,
});

export default connect(mapStateToProps, {})(memo(Prescriptions));
