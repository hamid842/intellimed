import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { makeStyles } from "@material-ui/styles";

import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: 300,
    padding: 20,
    marginTop: 8,
    borderRadius: 10,
  },
  sideInput: {
    backgroundColor: colors.mainGrey,
    marginTop: 8,
  },
  icons: {
    backgroundColor: colors.mainGrey,
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs={10} sm={10} lg={10}>
          <Typography>Side Effect Questions</Typography>
        </Grid>
        <Grid item xs={2} sm={2} lg={2}>
          <IconButton className={classes.icons}>
            <VolumeUpIcon />
          </IconButton>
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        size="small"
        value="Atrovastatin"
        fullWidth
        className={classes.sideInput}
      />
      <Typography variant="body2" className="mt-1">
        Commonly reported side effects of atorvastatin include: hemorrhagic
        stroke, arthralgia, diarrhea, and nasopharyngitis. Other side effects
        include: urinary tract infection, insomnia, limb pain, muscle spasm,
        musculoskeletal pain, myalgia, and nausea. See below for a comprehensive
        list of adverse effects.
      </Typography>
    </Paper>
  );
};

export default CurrentMedication;
