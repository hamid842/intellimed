import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

import MedicationItem from "./MedicationItem";

const useStyles = makeStyles(() => ({
  navButtons: {
    backgroundColor: "#b5b5b5",
    opacity: 0.5,
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
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      autoPlay={false}
      navButtonsProps={{ className: classes.navButtons }}
    >
      {medications.map((item, i) => (
        <MedicationItem key={i} medication={item} />
      ))}
    </Carousel>
  );
};

export default CurrentMedication;
