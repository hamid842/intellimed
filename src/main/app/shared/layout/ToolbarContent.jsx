import React from "react";
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  Slider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import colors from "src/main/app/config/colors";
import hamid from "src/main/content/images/hamid.png";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  textField: {
    // British pallete
    backgroundColor: "#f5f6fa",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  downDetails: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  userPic: {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
  },
  topDetails: {
    width: "100%",
    marginTop: 10,
  },
  slider: {
    width: 180,
    marginTop: 20,
  },
}));

const Tool = ({ handleDrawerToggle }) => {
  const classes = useStyles();

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <Grid
        container
        spacing={1}
        justify="space-between"
        alignItems="center"
        className={classes.topDetails}
      >
        <Grid item>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Grid>

        <Grid item sm={6} lg={6} className="text-left">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            style={{ width: "60%" }}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={8} sm={6} lg={4}>
          <Grid container spacing={1} alignItems="center">
            <Grid item sm={2}>
              <NotificationsNoneOutlinedIcon className={classes.notification} />
            </Grid>
            <Grid item sm={3} lg={3}>
              <img src={hamid} alt="Hamid Pic" className={classes.userPic} />
            </Grid>
            <Grid item sm={6} lg={6}>
              <Typography noWrap style={{ color: "grey" }}>
                Hamid Mohamadi
              </Typography>
            </Grid>
            <Grid item sm={1}>
              <KeyboardArrowDownOutlinedIcon className={classes.notification} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8} lg={8} className={classes.downDetails}>
          <Typography className="mt-3">Hamid's Dashboard</Typography>
        </Grid>
        <Grid item sm={1} lg={1} className={classes.downDetails}>
          <Typography className="mt-3">Font size</Typography>
        </Grid>
        <Grid item sm={2} lg={2} className={classes.downDetails}>
          <Slider
            className={classes.slider}
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Tool;
