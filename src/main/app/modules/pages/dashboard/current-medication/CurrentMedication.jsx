import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

import MedicationItem from "./MedicationItem";

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

// Endpoints
const getCurrentMedicinesApi = process.env.REACT_APP_CURRENT_MEDICINES_INFOS;

const CurrentMedication = () => {
  const classes = useStyles();

  const [medications, setMedications] = useState([]);

  const getCurrentMedication = async () => {
    axios(getCurrentMedicinesApi)
      .then((res) => setMedications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentMedication();
  }, []);

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
          {medications.map((item, i) => (
            <MedicationItem key={i} medication={item} />
          ))}
        </Carousel>
      </Paper>
    </>
  );
};
export default CurrentMedication;
