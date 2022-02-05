import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import MedicationItem from "../medicine/MedicationItem";
import { getAllMedicines } from "@shared/constants/get-all-medicines";

const Medication = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      setMedicines(await getAllMedicines());
    };
    fetchStates();
  }, []);
  return (
    <Grid container spacing={2}>
      {medicines.map((item, i) => (
        <Grid item xs={12} sm={12} lg={6}>
          <MedicationItem key={i} medicine={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Medication;
