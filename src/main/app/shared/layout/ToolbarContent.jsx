import {connect} from "react-redux";
import {Grid, IconButton, Typography, createTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {makeStyles} from "@mui/styles";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import UserInfo from "./user-info-btn/UserInfo";

const theme = createTheme()

const useStyles = makeStyles({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
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
    name: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    notification: {
        color: 'gray'
    }
});

const ToolbarContent = ({handleDrawerToggle, account}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={classes.topDetails}
        >
            <Grid item xs={4} sm={4} lg={4} className={classes.name}>
                <Typography variant="body2"
                            color={'gray'}>{`${account?.firstName}'s Dashboard`}</Typography>
            </Grid>
            <Grid item xs={2} sm={2} lg={2}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
            </Grid>

            <Grid item xs={6} sm={6} lg={6}>
                <Grid container spacing={1} alignItems="center" justifyContent="flex-end">
                    <Grid item>
                        <NotificationsNoneOutlinedIcon className={classes.notification}/>
                    </Grid>
                    <Grid item>
                        <UserInfo/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = ({login}) => ({
    account: login.account,
});

export default connect(mapStateToProps, {})(ToolbarContent);
