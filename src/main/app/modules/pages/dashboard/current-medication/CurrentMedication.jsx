import React from "react";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: 300,
    height: 300,
    padding: 5,
  },
  divider: {
    color: "grey",
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography>Current Medication</Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={2} sm={2} lg={2}>
              <img
                src={require("src/main/content/images/atorvastatin.jpg")}
                width="50px"
                height="50px"
                alt="Current Med Pic"
              />
            </Grid>
            <Grid item xs={8} sm={8} lg={8}>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <Typography>Atrovastatin 10 mg</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography>Take 1 tablet by mouth</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={2} lg={2}>
              <MicNoneOutlinedIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" className={classes.divider} />
      <Grid container>
        <Grid item xs={2}>
          <AccessTimeIcon />
        </Grid>
        <Grid item xs={8}>
          <Typography>Bedtime[time]</Typography>
        </Grid>
        <Grid item xs={2}>
          <MoreHorizIcon />
        </Grid>
      </Grid>
      <Divider variant="middle" className={classes.divider} />
      <Grid container>
        <Grid item>
          <Typography>Important information</Typography>
        </Grid>
        <Grid item>
          <Typography>-Avoid eating or drinking grapefruit</Typography>
        </Grid>
        <Grid item>
          <Typography>
            -This medicine maybe taken with or without food
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="middle" className={classes.divider} />
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          {" "}
          <Typography>Rifill status</Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          {" "}
          <Typography>QTY:43 out of 60</Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          {" "}
          <Typography>refill by 03/10/2020</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentMedication;