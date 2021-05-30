import { useState, useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import axios from "axios";

import colors from "@config/colors";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import EditProfile from "./EditProfile";
import ResetPass from "./ResetPass";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    height: "100%",
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
    backgroundColor: colors.mainBlue,
    color: colors.white,
  },
  right: {
    padding: 20,
  },
}));
// Endpoints
const getAccountInfoApi = process.env.REACT_APP_ACCOUNT_API;

const Profile = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [accountInfo, setAccountInfo] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const [showResetPass, setShowResetPass] = useState(false);

  const getAccountInfo = async () => {
    await axios(getAccountInfoApi)
      .then((res) => {
        if (res.status === 200 || 201) {
          setAccountInfo(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          enqueueSnackbar("Could not get account info!", { variant: "error" });
        }
      });
  };

  useEffect(() => {
    getAccountInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={3} className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={4} lg={4} className={classes.left}>
          <ProfileLeft
            accountInfo={accountInfo}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
            showResetPass={showResetPass}
            setShowResetPass={setShowResetPass}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={8} className={classes.right}>
          {editProfile && (
            <EditProfile
              accountInfo={accountInfo}
              setEditProfile={setEditProfile}
            />
          )}
          {showResetPass && <ResetPass setShowResetPass={setShowResetPass} />}
          {!editProfile && !showResetPass && (
            <ProfileRight accountInfo={accountInfo} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
