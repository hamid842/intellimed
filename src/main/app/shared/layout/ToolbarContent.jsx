import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import UserInfo from "./user-info-btn/UserInfo";

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

  return (
    <>
      <Grid
        container
        spacing={1}
        justify="space-between"
        alignItems="center"
        className={classes.topDetails}
      >
        <Grid item xs={6} sm={6} lg={6}>
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
        <Grid item xs={6} sm={6} lg={6}>
          <Grid container spacing={1} alignItems="center" justify="flex-end">
            <Grid item>
              <NotificationsNoneOutlinedIcon className={classes.notification} />
            </Grid>
            <Grid item>
              <UserInfo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tool;
