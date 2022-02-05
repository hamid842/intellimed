import { memo, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BusinessIcon from "@mui/icons-material/Business";
import axios from "axios";
import PhoneInput from "@components/PhoneInput";

const useStyles = makeStyles(() => ({
  container: {
    margin: 10,
  },
  icons: {
    marginRight: 5,
    marginBottom: 5,
    fontSize: 20,
    color: "grey",
  },
  rows: {
    display: "flex",
    padding: 2,
  },
  rowsValue: {
    paddingLeft: 10,
  },
  phone: {
    border: "none",
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
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">First Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{account?.firstName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">Last Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{account?.lastName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <AlternateEmailIcon className={classes.icons} />
        <Typography variant="subtitle2">Email :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{account?.email}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <HowToRegIcon className={classes.icons} />
        <Typography variant="subtitle2">Username :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{account?.login}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <HowToRegIcon className={classes.icons} />
        <Typography variant="subtitle2">UseCode :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{userInfos?.userCode}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <PhoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Phone Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <PhoneInput
          label=""
          disabled={true}
          height={10}
          value={userInfos?.phoneNumber1}
          disableDropdown={true}
          inputStyle={{ border: "none" }}
        />
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <PhoneIphoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Mobile Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <PhoneInput
          label=""
          height={10}
          disabled={true}
          value={userInfos?.phoneNumber2}
          disableDropdown={true}
          inputStyle={{ border: "none" }}
        />
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rows}>
        <BusinessIcon className={classes.icons} />
        <Typography variant="subtitle2">Address :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className={classes.rowsValue}>
        <Typography variant="subtitle2">{userInfos?.address}</Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(ProfileGeneralInfo));
