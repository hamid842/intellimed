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
    width: 360,
    height: 100,
    padding: 5,
    marginTop: 130,
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
  return <Paper className={classes.container}>prescriber</Paper>;
};

export default CurrentMedication;
