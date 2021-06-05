import { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import GroupIcon from "@material-ui/icons/Group";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import PatientsListCollapse from "./PatientsListCollapse";
import { getAccountPatients } from "@shared/reducers/patients/patient-reducer";

import hamid from "@images/hamid.png";
import { history } from "@shared/history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    width: 270,
    marginRight: theme.spacing(2),
  },
  btn: {
    color: "grey",
    border: "none !important",
    textTransform: "capitalize",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
}));
const UserInfo = (props) => {
  const { account, patients } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [openPatientsList, setOpenPatientsList] = useState(true);

  const handleClick = () => {
    setOpenPatientsList(!openPatientsList);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    props.getAccountPatients(account?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const patientsArray = [];
  patientsArray.push(patients);
  console.log(patients);

  return (
    <div className={classes.root}>
      <Button
        fullWidth
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        startIcon={<img src={hamid} alt="Pic" className={classes.image} />}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        className={classes.btn}
      >
        {`${account?.firstName} ${account?.lastName}`}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.paper}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
            timeout={800}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>
                    <List style={{ width: "100%" }}>
                      <ListItem onClick={handleClick}>
                        <ListItemIcon>
                          <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patients" />
                        {openPatientsList ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={openPatientsList}
                        timeout="auto"
                        unmountOnExit
                      >
                        {patientsArray.length > 0 &&
                          patientsArray.map((patient, i) => {
                            return (
                              <PatientsListCollapse key={i} patient={patient} />
                            );
                          })}
                      </Collapse>
                      <ListItem onClick={() => history.push("/login")}>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItem>
                    </List>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

const mapStateToProps = ({ login, patients }) => ({
  patients: patients.patients,
  account: login.account,
});

export default connect(mapStateToProps, { getAccountPatients })(UserInfo);
