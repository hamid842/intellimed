import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemText from "@material-ui/core/ListItemText";
// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AiFillMedicineBox } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";
import { FaPrescription } from "react-icons/fa";
// ====
import { history } from "@shared/history";

const useStyles = makeStyles(() => ({}));

const MenuList = () => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
        {/* Dashboard */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => history.push("/dashboard")}
        >
          <ListItemIcon>
            <Tooltip title="Dashboard">
              <span>
                <DashboardIcon
                  className={classes.icon}
                //   onClick={handleDrawerOpen}
                />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Patient */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            history.push("/patient");
            //   handleDrawerOpen();
          }}
        >
          <ListItemIcon>
            <Tooltip title="Patient">
              <span>
                <PersonIcon className={classes.icon} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Patient" />
        </ListItem>
        {/* Medication */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            history.push("/medication");
            //   handleDrawerOpen();
          }}
        >
          <ListItemIcon>
            <Tooltip title="Medication">
              <span>
                <AiFillMedicineBox size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Medication" />
        </ListItem>
        {/* Doctors */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            history.push("/doctors");
          }}
        >
          <ListItemIcon>
            <Tooltip title="Doctors">
              <span>
                <GiDoctorFace size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Doctors" />
        </ListItem>
        {/* Prescription */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            history.push("/add-new-prescription");
          }}
        >
          <ListItemIcon>
            <Tooltip title="Prescription">
              <span>
                <FaPrescription size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Prescription" />
        </ListItem>
        {/* Profile */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            history.push("/profile");
            //   handleDrawerOpen();
          }}
        >
          <ListItemIcon>
            <Tooltip title="Profile">
              <span>
                <PersonIcon className={classes.icon} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        {/* Logout */}
        <ListItem
          button
          onClick={() => {
            history.push("/login");
          }}
        >
          <ListItemIcon>
            <Tooltip title="Logout">
              <span>
                <ExitToAppIcon className={classes.icon} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
};

export default MenuList;
