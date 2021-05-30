import { memo, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PhoneIcon from "@material-ui/icons/Phone";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BusinessIcon from "@material-ui/icons/Business";
import axios from "axios";

const useStyles = makeStyles(() => ({
  icons: {
    marginRight: 5,
    marginBottom: 5,
    fontSize: 20,
    color: "grey",
  },
}));

// Endpoints
const getUserInfosApi = process.env.REACT_APP_GET_USER_INFOS_API;

const ProfileGeneralInfo = ({ account }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [userInfos, setUserInfos] = useState();

  const getUserInfos = async () => {
    account?.id &&
      (await axios(`${getUserInfosApi}/${account?.id}`)
        .then((res) => {
          if (res.status === 200 || 201) {
            setUserInfos(res.data);
          }
        })
        .catch((err) => {
          if (err) {
            enqueueSnackbar("Could not get user infos!", { variant: "error" });
          }
        }));
  };

  useEffect(() => {
    getUserInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container alignItems="center">
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">First Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{account?.firstName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">Last Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{account?.lastName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <AlternateEmailIcon className={classes.icons} />
        <Typography variant="subtitle2">Email :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{account?.email}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <HowToRegIcon className={classes.icons} />
        <Typography variant="subtitle2">Username :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{account?.username}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <HowToRegIcon className={classes.icons} />
        <Typography variant="subtitle2">UseCode :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{userInfos?.userCode}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PhoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Phone Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{userInfos?.phoneNumber1}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PhoneIphoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Mobile Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{userInfos?.phoneNumber2}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <BusinessIcon className={classes.icons} />
        <Typography variant="subtitle2">Address :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{userInfos?.address}</Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(ProfileGeneralInfo));
