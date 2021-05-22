import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import PrescriptionDetail from "./PrescriptionDetail";
import { getAllPrescription } from "@shared/constants/get-prescriptions";

const Prescription = () => {
  const [prescription, setPrescription] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      setPrescription(await getAllPrescription());
    };
    fetchStates();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} lg={4}>
        <PrescriptionDetail prescription={prescription} />
      </Grid>
      {/* {prescription.map((item, i) => (
        <Grid item xs={12} sm={4} lg={4}>
          <PrescriptionDetail key={i} prescription={item} />
        </Grid>
      ))} */}
    </Grid>
  );
};

export default Prescription;
