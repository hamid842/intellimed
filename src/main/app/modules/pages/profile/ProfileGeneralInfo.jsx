// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import AppTextField from "@components/AppTextField";

// const ProfileGeneralInfo = ({
//   data,
//   onChange,
// }) => {
//   const {
//     login,
//     firstName,
//     lastName,
//     email,
//     imageUrl,
//     activated,
//   } = data;
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           required
//           name="login"
//           label="User Name"
//           value={login}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           required
//           name="firstName"
//           label="First Name"
//           value={firstName}
//           onChange={onChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           required
//           name="lastName"
//           label="Last Name"
//           value={lastName}
//           onChange={onChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           name="email"
//           label="email"
//           value={email}
//           onChange={onChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           name="imageUrl"
//           label="Image"
//           value={imageUrl}
//           onChange={onChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           name="activated"
//           label="Is Active"
//           value={activated}
//           onChange={onChange}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default ProfileGeneralInfo;
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PhoneIcon from "@material-ui/icons/Phone";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles(() => ({
  icons: {
    marginRight: 5,
    marginBottom: 5,
    fontSize: 20,
    color: "grey",
  },
}));

const ProfileGeneralInfo = ({ accountInfo }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">First Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.firstName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PersonIcon className={classes.icons} />
        <Typography variant="subtitle2">Last Name :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.lastName}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <AlternateEmailIcon className={classes.icons} />
        <Typography variant="subtitle2">Email :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.email}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <HowToRegIcon className={classes.icons} />
        <Typography variant="subtitle2">Username :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.username}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PhoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Phone Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.phoneNumber1}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <PhoneIphoneIcon className={classes.icons} />
        <Typography variant="subtitle2">Mobile Number :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.phoneNumber2}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} className="d-flex">
        <BusinessIcon className={classes.icons} />
        <Typography variant="subtitle2">Address :</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Typography variant="subtitle2">{accountInfo?.address}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileGeneralInfo;
