import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { makeStyles } from "@material-ui/styles";

import colors from "src/main/app/config/colors";

const useStyles = makeStyles(() => ({
  container: {
    width: 345,
    height: 220,
    padding: 5,
    marginTop: 10,
  },
  sideInput: {
    backgroundColor: colors.mainGrey,
  },
  icons: {
    backgroundColor: colors.mainGrey,
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={10} sm={10} lg={10}>
          <Typography>Side Effect Questions</Typography>
        </Grid>
        <Grid item xs={2} sm={2} lg={2}>
          <IconButton className={classes.icons}>
            <MicNoneOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        className={classes.sideInput}
      />
    </Paper>
  );
};

export default CurrentMedication;
