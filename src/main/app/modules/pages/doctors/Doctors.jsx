// import React, { useState } from "react";
// import { ReCron, Tab } from "@sbzen/re-cron";
// import "./style.scss";

// const Medication = () => {
//   const [cronValue, setCronValue] = useState("");
//   return (
//     <>
//       <div className="py-2">
//         <b>Cron Value: </b>
//         <code>{cronValue}</code>
//       </div>
//       <ReCron
//         tabs={[Tab.MINUTES, Tab.HOURS, Tab.DAY, Tab.MONTH]}
//         value={cronValue}
//         onChange={(value) => setCronValue(value)}
//       />
//     </>
//   );
// };
// export default Medication;
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
        <Grid item xs={12} sm={12} lg={6}>
          <MedicationItem key={i} medicine={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Medication;
