// import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
// import CheckIcon from "@material-ui/icons/Check";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { useSnackbar } from "notistack";

// import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
// import ProfileGeneralInfo from "./ProfileGeneralInfo";
// import ProfileExtraInfo from "./ProfileExtraInfo";
// import ProfileMobileDevicesInfo from "./ProfileMobileDevicesInfo";

// import AppButton from "@components/AppButton";
// import UploadButton from "@components/UploadButton";
// import axios from "axios";

// const useStyles = makeStyles(() => ({
//   box: {
//     backgroundColor: "#fff",
//     width: "100%",
//     padding: 20,
//   },
// }));

// // Endpoints
// const createPatientInfosApi = process.env.REACT_APP_CREATE_PATIENT_INFOS;

// const Profile = () => {
//   const classNamees = useStyles();
//   // const { enqueueSnackbar } = useSnackbar();
//   // const [loading, setLoading] = useState(false);
//   const [profileInfo, setProfileInfo] = useState({
//     login: "admin",
//     firstName: "Administrator",
//     lastName: "Administrator",
//     email: "admin@localhost",
//     imageUrl: "",
//     activated: true,
//     userCode: "0001",
//     phoneNumber1: "11231234567",
//     phoneNumber2: "11231234567",
//     address: "LA",
//     deviceInfos: [
//       { name: "samsung", os: "android", deviceId: "1", },
//       { name: "iphone", os: "ios", deviceId: "2", },
//     ],
//   });

//   const handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setProfileInfo({ ...profileInfo, [name]: value });
//   };

//   const handleChangePhone = (name, value) => {
//     setProfileInfo({ ...profileInfo, [name]: "+" + value });
//   };

//   // const handleCreatePatientInfo = (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   axios
//   //     .post(createPatientInfosApi, patientInfo)
//   //     .then((res) => {
//   //       if (res.status === 200 || 201) {
//   //         enqueueSnackbar("Profile is created successfully.", {
//   //           variant: "success",
//   //         });
//   //         setPatientInfo({
//   //           firstName: "",
//   //           lastName: "",
//   //           birthDate: null,
//   //           address: "",
//   //           age: "",
//   //           weight: "",
//   //           height: "",
//   //           phoneNumber1: null,
//   //           phoneNumber2: null,
//   //           bloodType: "",
//   //         });
//   //         console.log(res.data);
//   //         setLoading(false);
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       setLoading(false);
//   //       console.log(err.response);
//   //     });
//   // };
//   return (
//     <Box classNameName={classNamees.box}>
//       <ThemeProvider theme={formLabelsTheme}>
//         <form //onSubmit={handleCreatePatientInfo}
//         >
//           <Grid container spacing={1}>
//             <Grid item xs={12} sm={4} lg={4}>
//               <ProfileGeneralInfo
//                 data={profileInfo}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} lg={4}>
//               <ProfileExtraInfo
//                 data={profileInfo}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} lg={4}>
//               <ProfileMobileDevicesInfo
//                 data={profileInfo}
//                 onChange={handleChange}
//               />
//             </Grid>
//             {/* <Grid item xs={12} sm={4} lg={4}>
//               <Grid container>
//                 <Grid item xs={12} sm={12} lg={12} classNameName="text-center">
//                   <UploadButton />
//                 </Grid>
//               </Grid>
//             </Grid> */}
//           </Grid>
//           {/* <Grid container spacing={1}>
//             <Grid item xs={12} sm={12} lg={12} classNameName="text-right">
//               <AppButton
//                 type="submit"
//                 label="save"
//                 variant="outlined"
//                 color="green"
//                 width={100}
//                 icon={
//                   loading ? (
//                     <CircularProgress size="18px" color="inherit" />
//                   ) : (
//                     <CheckIcon color="inherit" />
//                   )
//                 }
//               />
//             </Grid>
//           </Grid> */}
//         </form>
//       </ThemeProvider>
//     </Box>
//   );
// };

// export default Profile;
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
const getDevicesListApi = process.env.REACT_APP_GET_DEVICES_LIST_API;
const getAccountInfoApi = process.env.REACT_APP_ACCOUNT_API;

const Profile = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [accountInfo, setAccountInfo] = useState();
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

  const getDevicesList = async () => {
    axios(`${getDevicesListApi}/${accountInfo.id}`).then((res) =>
      console.log(res.data)
    );
  };

  useEffect(() => {
    getAccountInfo();
    getDevicesList();
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
