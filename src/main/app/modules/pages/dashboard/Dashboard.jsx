import React from "react";
import Grid from "@material-ui/core/Grid";

import AppCalendar from "@pages/dashboard/calendar/AppCalendar";
// import CurrentMedication from "@pages/dashboard/recent-prescription/RecentPrescription";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} lg={4}>
          {/* <CurrentMedication /> */}
          {/* <SideEffectQuestions /> */}
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <AppCalendar />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
