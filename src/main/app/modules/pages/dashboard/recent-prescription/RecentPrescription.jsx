import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getAllPrescription } from "@shared/constants/get-prescriptions";

import MedicationItem from "./RecentPrescriptionItem";

const useStyles = makeStyles(() => ({
  carouselContainer: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  navButtons: {
    backgroundColor: "transparent",
    color: "black",
    "&:hover": {
      background: "none !important",
    },
  },
  container: {
    height: 300,
  },
}));

const CurrentMedication = ({ account, selectedPatient }) => {
  const classes = useStyles();

  const [medications, setMedications] = useState(null);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      setMedications(await getAllPrescription(account?.id));
    };
    fetchPrescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPatient?.id]);

  const medicines = [];
  medicines.push(medications);

  return (
    <>
      <Paper className={classes.carouselContainer}>
        <Carousel
          navButtonsAlwaysVisible
          fullHeightHover={false}
          indicators={false}
          animation="slide"
          autoPlay={false}
          navButtonsProps={{ className: classes.navButtons }}
          navButtonsWrapperProps={{
            style: {
              height: 5,
              top: 10,
            },
          }}
        >
          {medicines.map((item, i) => (
            <MedicationItem key={i} medication={item} />
          ))}
        </Carousel>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ login, patients }) => ({
  account: login.account,
  selectedPatient: patients.selectedPatient,
});
export default connect(mapStateToProps, {})(CurrentMedication);
