import { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import dayjs from "dayjs";

import { getSideEffects } from "@shared/constants/get-sideEffects";
import atorvastatin from "@images/atorvastatin.jpg";
import colors from "@config/colors";

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
    height: 190,
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  titles: {
    color: "red",
  },
  title: {
    textAlign: "center",
  },
  name: {
    color: colors.darkBlue,
    fontWeight: 700,
    fontStyle: "italic",
  },
}));

const MedicationItem = ({ medication, selectedPatientFromTopMenu }) => {
  const classes = useStyles();

  const [sideEffect, setSideEffect] = useState(null);

  useEffect(() => {
    const fetchSideEffects = async () => {
      if (medication?.id) {
        setSideEffect(await getSideEffects(medication?.id));
      }
    };
    fetchSideEffects();
  }, [medication?.id]);

  return (
    <>
      <Paper className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="subtitle2" className={classes.title}>
              Current Medications of{" "}
              <strong className={classes.name}>
                {selectedPatientFromTopMenu?.firstName}
              </strong>
            </Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container alignItems="center">
              <Grid item xs={4} sm={4} lg={4}>
                <img
                  src={atorvastatin || medication?.prescriptionImageUrl}
                  alt="Drug Pic"
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={8} sm={8} lg={8}>
                <Typography color="primary">
                  {medication?.prescriptionCode}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="body2">
              {medication?.usageDescription}
            </Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <span className={classes.titles}>Important Information</span>
            <Typography variant="body2">{medication?.importantInfo}</Typography>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} sm={12} lg={12}>
            <span className={classes.titles}>Refill Time</span>
            <Typography variant="body2">
              {dayjs(medication?.refillTime).format("YYYY-MM-DD")}
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
            <Typography variant="body2">{sideEffect?.sideEffect}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ patients }) => ({
  selectedPatientFromTopMenu: patients.selectedPatientFromTopMenu,
});

export default connect(mapStateToProps, {})(memo(MedicationItem));
