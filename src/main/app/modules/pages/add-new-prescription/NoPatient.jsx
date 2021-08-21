import colors from "@config/colors";
import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { history } from "@shared/history";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.mainGrey,
    padding: 10,
    marginTop: 20,
    margin: "auto",
    borderRadius: 10,
    textAlign: "center",
    width: 500,
  },
}));

const NoPatient = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} lg={12} className={classes.emptyIcon}>
        <HourglassEmptyIcon color="primary" fontSize="large" />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} className={classes.text}>
        <Typography variant="subtitle1">
          Have to define a patient first. You can add using button below.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} className={classes.btn}>
        <IconButton onClick={() => history.push("/patient")}>
          <Tooltip title="Add Patient">
            <AddCircleIcon
              color="primary"
              className={classes.addBtn}
              fontSize="large"
            />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoPatient;
