import {useState} from "react";
import {Paper, Grid, createTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";

import colors from "@config/colors";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import EditProfile from "./EditProfile";
import ResetPass from "./ResetPass";

const theme = createTheme()

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden",
        height: "95%",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column-reverse",
        },
    },
    left: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        placeItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: colors.bgGrey,
        color: colors.white,
    },
    right: {
        padding: 20,
    },
});

const Profile = () => {
    const classes = useStyles();
    const [editProfile, setEditProfile] = useState(false);
    const [showResetPass, setShowResetPass] = useState(false);

    const onCancelClick = () => {
        setEditProfile(false);
    };

    return (
        <Paper elevation={3} >
            <Grid container>
                <Grid item xs={12} sm={4} lg={4} className={classes.left}>
                    <ProfileLeft
                        editProfile={editProfile}
                        setEditProfile={setEditProfile}
                        showResetPass={showResetPass}
                        setShowResetPass={setShowResetPass}
                    />
                </Grid>
                <Grid item xs={12} sm={8} lg={8} className={classes.right}>
                    {editProfile && <EditProfile onCancelClick={onCancelClick}/>}
                    {showResetPass && <ResetPass setShowResetPass={setShowResetPass}/>}
                    {!editProfile && !showResetPass && <ProfileRight/>}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Profile;
