import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/styles";

import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: 200,
    padding: 10,
    marginTop: 8,
  },
  sideInput: {
    backgroundColor: colors.mainGrey,
  },
  icons: {
    backgroundColor: colors.mainGrey,
  },
  addIcon: {
    fontSize: 70,
    color: colors.darkBlue,
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} className="text-center">
          <Typography variant="h6" className="mt-2">
            Add New Prescription
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="mt-4 text-center">
          <AddCircleIcon className={classes.addIcon} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentMedication;
