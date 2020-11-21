import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/styles";

import colors from "src/main/app/config/colors";

const useStyles = makeStyles(() => ({
  container: {
    width: 360,
    height: 100,
    padding: 5,
    marginTop: 130,
  },
  sideInput: {
    backgroundColor: colors.mainGrey,
  },
  icons: {
    backgroundColor: colors.mainGrey,
  },
  addIcon: {
    fontSize: 50,
    color: colors.darkBlue,
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} className="text-center">
          <Typography>Add New Prescription</Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className="text-center">
          <AddCircleIcon className={classes.addIcon} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentMedication;
