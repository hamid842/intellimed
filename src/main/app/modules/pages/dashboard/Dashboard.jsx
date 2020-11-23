import React from "react";
import Grid from "@material-ui/core/Grid";

import CurrentMedication from "src/main/app/modules/pages/dashboard/current-medication/CurrentMedication";
import AppCalendar from "src/main/app/modules/pages/dashboard/calendar/AppCalendar";
import SideEffectQuestions from "src/main/app/modules/pages/dashboard/sideEffect-questions/SideEffectQuestions";
import Prescriber from "src/main/app/modules/pages/dashboard/prescriber/Prescriber";
import AddNewPrescription from "src/main/app/modules/pages/dashboard/add-prescription/AddNewPrescription";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} lg={4}>
          <CurrentMedication />
          <SideEffectQuestions />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <AppCalendar />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={6}>
              <Prescriber />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              {" "}
              <AddNewPrescription />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={4} lg={4}>
          <CurrentMedication />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <AppCalendar />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start">
        <Grid item xs={12} sm={4} lg={4}>
          <SideEffectQuestions />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Prescriber />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <AddNewPrescription />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Dashboard;
