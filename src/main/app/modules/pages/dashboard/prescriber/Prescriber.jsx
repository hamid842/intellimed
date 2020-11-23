import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkIcon from "@material-ui/icons/Link";

import { makeStyles } from "@material-ui/styles";

import colors from "src/main/app/config/colors";

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
  prescriberBtns: {
    textTransform: "capitalize",
    fontSize: 10,
    borderRadius: 25,
    background: colors.mainGrey,
    border: "none",
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography className="mt-2">Prescriber Name</Typography>
      <Grid container spacing={1} className="mt-2">
        <Grid item>
          <LinkIcon />
        </Grid>
        <Grid item>
          <Typography color="primary">Nell Pearson</Typography>
        </Grid>
      </Grid>
      <Typography className="mt-2">[Date of prescription]</Typography>
      <Grid container spacing={1} className="mt-4">
        <Grid item xs={4} sm={4} lg={4} className="text-left">
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.prescriberBtns}
          >
            details
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} lg={4}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.prescriberBtns}
          >
            contact doctor
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} className="text-right">
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.prescriberBtns}
          >
            appointnment
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentMedication;
