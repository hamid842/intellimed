import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";

import colors from "@config/colors";
import { history } from "@shared/history";

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.mainGrey,
    marginTop: 20,
  },
  btnContainer: {
    textAlign: "end",
  },
}));

const NoPrescription = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={8} sm={8} lg={8}>
        <Typography>
          No Prescription yet. To add a new one please press "+" button
        </Typography>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} className={classes.btnContainer}>
        <IconButton onClick={() => history.push("/add-new-prescription")}>
          <Tooltip title="Add Prescription">
            <AddBoxIcon color="primary" fontSize="large" />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoPrescription;
