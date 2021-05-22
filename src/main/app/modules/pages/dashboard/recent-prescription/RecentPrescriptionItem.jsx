import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

import atorvastatin from "@images/atorvastatin.jpg";

const useStyles = makeStyles(() => ({
  container: {
    height: 300,
    padding: 10,
    backgroundColor: "white",
  },
  divider: {
    color: "grey",
    height: 1,
    width: "100%",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  sideEffectContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  titles: {
    color: "red",
  },
}));

const MedicationItem = ({ medication }) => {
  const {
    name,
    imageUrl,
    sideEffects,
    importantInfo,
    refillTime,
    appearance,
  } = medication;
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} lg={12} className="text-center">
            <Typography variant="subtitle2">Current Medications</Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container alignItems="center">
              <Grid item xs={4} sm={4} lg={4}>
                <img
                  src={atorvastatin || imageUrl}
                  alt="Drug Pic"
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={8} sm={8} lg={8}>
                <Typography color="primary">{name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <span className={classes.titles}>Appearance</span>
            <Typography variant="subtitle2">{appearance}</Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <span className={classes.titles}>Important Information</span>
            <Typography variant="subtitle2">{importantInfo}</Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <span className={classes.titles}>Refill Time</span>
            <Typography variant="subtitle2">
              {dayjs(refillTime).format("YYYY-MM-DD")}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Side Effect Part */}
      <Paper className={classes.sideEffectContainer}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="subtitle2">Side Effects</Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            {sideEffects?.map((item, i) => (
              <Typography>-{item}</Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MedicationItem;
