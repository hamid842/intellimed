import { memo } from "react";
import { IconButton, Grid, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import colors from "@config/colors";
import { history } from "@shared/history";

const useStyles = makeStyles(() => ({
  btn: {
    textAlign: "end",
  },
  container: {
    backgroundColor: colors.mediumGrey,
    padding: 5,
  },
}));

const NoPatient = ({ closeMenu }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.container}
    >
      <Grid item xs={6} sm={6} lg={6}>
        No Patient
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.btn}>
        <IconButton
          onClick={() => {
            history.push("/patient");
            closeMenu(false);
          }}
        >
          <Tooltip title="Add Patient">
            <PersonAddIcon />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default memo(NoPatient);
