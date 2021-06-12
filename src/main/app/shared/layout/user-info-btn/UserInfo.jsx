import { useState, useRef, useEffect } from "react";
import {
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import PatientsListCollapse from "./PatientsListCollapse";
import {
  getAccountPatients,
  selectPatient,
} from "@shared/reducers/patients/patient-reducer";
import hamid from "@images/hamid.png";
import { history } from "@shared/history";
import NoPatient from "./NoPatient";

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
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));
const UserInfo = (props) => {
  const { account, patients, selectedPatient } = props;
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

  const handleSelectPatient = (id) => {
    alert(id);
    props.selectPatient(id);
  };

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
        <Typography variant="body2">
          <strong>Patient:</strong> {selectedPatient?.firstName}{" "}
          {selectedPatient?.lastName}
        </Typography>
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
                    <List
                      style={{ width: "100%" }}
                      component="div"
                      disablePadding
                    >
                      <ListItem button onClick={handleClick}>
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
                        className={classes.collapse}
                      >
                        <List component="div" disablePadding>
                          {patients.length > 0 ? (
                            patients.map((patient, i) => {
                              return (
                                <ListItem
                                  button
                                  key={i}
                                  className={classes.nested}
                                  onClick={() =>
                                    handleSelectPatient(patient.id)
                                  }
                                >
                                  <PatientsListCollapse
                                    patient={patient}
                                    onClock={() =>
                                      handleSelectPatient(patient.id)
                                    }
                                  />
                                </ListItem>
                              );
                            })
                          ) : (
                            <NoPatient closeMenu={setOpen} />
                          )}
                        </List>
                      </Collapse>
                      <ListItem button onClick={() => history.push("/login")}>
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
  selectedPatient: patients.selectedPatient,
  account: login.account,
});

export default connect(mapStateToProps, { getAccountPatients, selectPatient })(
  UserInfo
);
