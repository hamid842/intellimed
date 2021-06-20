import { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import AppTextField from "@components/AppTextField";
import PhoneInput from "@components/PhoneInput";
import AppButton from "@components/AppButton";
import Title from "@shared/components/Title";
import { getUserInfos } from "@shared/reducers/user-infos/userInfo-reducer";

const useStyles = makeStyles(() => ({
  saveBtn: {
    textAlign: "end",
  },
}));

// Endpoints
const editProfileApi = process.env.REACT_APP_GET_USER_INFOS_API;

const EditProfile = (props) => {
  const { onCancelClick, account, userInfos } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [editProfileData, setEditProfileData] = useState({
    id: userInfos.id,
    userCode: userInfos.userCode,
    user: userInfos.user,
    address: userInfos.address,
    phoneNumber1: userInfos.phoneNumber1,
    phoneNumber2: userInfos.phoneNumber2,
  });

  const handleSaveClick = async () => {
    setLoading(true);
    axios
      .put(`${editProfileApi}/${account?.id}`, editProfileData)
      .then((res) => {
        if (res.status === 200 || 201) {
          setLoading(false);
          onCancelClick();
          enqueueSnackbar("Your profile is updated successfully.", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          enqueueSnackbar("Something went wrong!", {
            variant: "error",
          });
        }
      });
  };

  useEffect(() => {
    props.getUserInfos(account?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12}>
          <Title title="Edit Profile" />
        </Grid>
        {/* <Grid item xs={12} sm={6} lg={6}>
          <AppTextField name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <AppTextField name="lastName" label="Last Name" />
        </Grid> */}
        <Grid item xs={12} sm={12} lg={12}>
          <AppTextField
            multiline={true}
            name="address"
            label="Address"
            value={editProfileData.address}
            onChange={(e) =>
              setEditProfileData({
                ...editProfileData,
                address: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <PhoneInput
            label="Phone Number"
            value={editProfileData.phoneNumber1}
            onChange={(phone) =>
              setEditProfileData({
                ...editProfileData,
                phoneNumber1: "+" + phone,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <PhoneInput
            label="Mobile Number"
            value={editProfileData.phoneNumber2}
            onChange={(phone) =>
              setEditProfileData({
                ...editProfileData,
                phoneNumber2: "+" + phone,
              })
            }
          />
        </Grid>
        {/* <Grid item xs={12} sm={12} lg={12}>
          <AppTextField name="email" label="Email" type="email" />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <UploadButton title="Upload Image" />
        </Grid> */}
        <Grid item xs={6} sm={6} lg={6}>
          <AppButton
            label="Cancel"
            variant="outlined"
            color="red"
            startIcon={<CloseIcon />}
            onClick={onCancelClick}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={6} className={classes.saveBtn}>
          <AppButton
            label="Save"
            variant="outlined"
            color="green"
            startIcon={
              loading ? <CircularProgress size="small" /> : <CheckIcon />
            }
            width={85}
            onClick={handleSaveClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ login, userInfos }) => ({
  account: login.account,
  userInfos: userInfos.userInfos,
});

export default connect(mapStateToProps, { getUserInfos })(memo(EditProfile));
