import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { getAllPrescriptions } from "@shared/constants/get-prescriptions";

import MedicationItem from "./RecentPrescriptionItem";
import NoPrescription from "./NoPrescription";

const useStyles = makeStyles({
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
  noPrescription: {
    height: 300,
    padding: 10,
    backgroundColor: "white",
    display: "flex",
    placeItems: "center",
  },
});

const CurrentMedication = ({ selectedPatientFromTopMenu }) => {
  const classes = useStyles();

  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      selectedPatientFromTopMenu?.id &&
        setMedications(
          await getAllPrescriptions(selectedPatientFromTopMenu?.id)
        );
    };
    fetchPrescriptions();
  }, [selectedPatientFromTopMenu?.id]);

  return (
      <Paper elevation={1}>
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
          {medications?.length > 0 ? (
            medications?.map((item, i) => (
              <MedicationItem key={i} medication={item} />
            ))
          ) : (
            <NoPrescription />
          )}
        </Carousel>
      </Paper>
  );
};

const mapStateToProps = ({ patients }) => ({
  selectedPatientFromTopMenu: patients?.selectedPatientFromTopMenu,
});
export default connect(mapStateToProps, {})(CurrentMedication);
