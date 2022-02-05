import { memo } from "react";
import { IconButton, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import colors from "@config/colors";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item xs={6} sm={6} lg={6}>
        No Patient
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.btn}>
        <IconButton
          onClick={() => {
            navigate("/patient");
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
