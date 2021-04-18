import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import MedicationItem from "./MedicationItem";
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
        <Grid item xs={12} sm={4} lg={4}>
          <MedicationItem key={i} medicine={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Medication;
