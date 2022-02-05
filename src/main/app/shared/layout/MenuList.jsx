import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import ListItemText from "@mui/material/ListItemText";
// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AiFillMedicineBox } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";
import { FaPrescription } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
// ====

const useStyles = makeStyles(() => ({}));

const MenuList = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <>
      <List className={classes.root}>
        {/* Dashboard */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => navigate("/dashboard")}
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
           navigate("/patient");
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
        {/* Prescription */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            navigate("/prescriptions");
            //   handleDrawerOpen();
          }}
        >
          <ListItemIcon>
            <Tooltip title="Prescriptions">
              <span>
                <AiFillMedicineBox size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Prescriptions" />
        </ListItem>
        {/* Prescriber */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            navigate("/prescriber");
          }}
        >
          <ListItemIcon>
            <Tooltip title="Prescriber">
              <span>
                <GiDoctorFace size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Prescriber" />
        </ListItem>
        {/* Prescription */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            navigate("/add-new-prescription");
          }}
        >
          <ListItemIcon>
            <Tooltip title="Add Prescription">
              <span>
                <FaPrescription size={24} />
              </span>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Add Prescription" />
        </ListItem>
        {/* Profile */}
        <ListItem
          button
          className={classes.menu}
          onClick={() => {
            navigate("/profile");
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
            navigate("/login");
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
