import {useState, useRef, useEffect, useCallback} from "react";
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
    createTheme
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import PatientsListCollapse from "./PatientsListCollapse";
import {
    getAccountPatients,
    selectPatientFromTopMenu,
} from "@shared/reducers/patients/patient-reducer";
import NoPatient from "./NoPatient";
import colors from "@config/colors";

const theme = createTheme()

const useStyles = makeStyles(() => ({
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
    noImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: colors.mediumGrey,
    },
    nested: {
        paddingLeft: theme.spacing(5),
    },
}));
const UserInfo = (props) => {
    const {account, patients, selectedPatientFromTopMenu} = props;
    const classes = useStyles();
    const navigate = useNavigate();
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
    }, [account?.id]);

    const handleSelectPatient = useCallback(
        (id) => {
            props.selectPatientFromTopMenu(id);
            handleToggle();
        },
        [props]
    );

    useEffect(() => {
        if (patients?.length > 0) {
            const firstId = patients[0]?.id;
            firstId && handleSelectPatient(firstId);
        }
    }, [patients, handleSelectPatient]);

    return (
        <div className={classes.root}>
            <Button
                fullWidth
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                startIcon={
                    account?.imageUrl ? (
                        <img src={account?.imageUrl} alt="Pic" className={classes.image}/>
                    ) : (
                        <div className={classes.noImage}/>
                    )
                }
                endIcon={open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                className={classes.btn}
            >
                {selectedPatientFromTopMenu?.id ? (
                    <Typography variant="body2">
                        <strong>Patient:</strong> {selectedPatientFromTopMenu?.firstName}{" "}
                        {selectedPatientFromTopMenu?.lastName}
                    </Typography>
                ) : (
                    <Typography>No Patient Selected!</Typography>
                )}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className={classes.paper}
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom",
                        }}
                        timeout={800}
                    >
                        <Paper elevation={1}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem>
                                        <List
                                            style={{width: "100%"}}
                                            component="div"
                                            disablePadding
                                        >
                                            <ListItem button onClick={handleClick}>
                                                <ListItemIcon>
                                                    <GroupIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Patients"/>
                                                {openPatientsList ? <ExpandLess/> : <ExpandMore/>}
                                            </ListItem>
                                            <Collapse
                                                in={openPatientsList}
                                                timeout="auto"
                                                unmountOnExit
                                                className={classes.collapse}
                                            >
                                                <List component="div" disablePadding>
                                                    {!Array.isArray(patients) || !patients.length ? (
                                                        <NoPatient closeMenu={setOpen}/>
                                                    ) : (
                                                        patients?.map((patient, i) => {
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
                                                    )}
                                                </List>
                                            </Collapse>
                                            <ListItem button onClick={() => navigate("/login")}>
                                                <ListItemIcon>
                                                    <ExitToAppIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Logout"/>
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

const mapStateToProps = ({login, patients}) => ({
    patients: patients.patients,
    selectedPatientFromTopMenu: patients.selectedPatientFromTopMenu,
    account: login.account,
});

export default connect(mapStateToProps, {
    getAccountPatients,
    selectPatientFromTopMenu,
})(UserInfo);
