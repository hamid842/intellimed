// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import AppTextField from "@components/AppTextField";
// import PhoneInput from "@components/PhoneInput";

// const ProfileExtraInfo = ({
//   data,
//   onChange,
//   handleChangePhone,
// }) => {
//   const {
//     userCode,
//     phoneNumber1,
//     phoneNumber2,
//     address,
//   } = data;
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           required
//           name="userCode"
//           label="User Code"
//           value={userCode}
//           onChange={onChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <PhoneInput
//           name="phoneNumber1"
//           label="Phone Number"
//           value={phoneNumber1}
//           onChange={(phone) => handleChangePhone("phoneNumber1", phone)}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <PhoneInput
//           name="phoneNumber2"
//           label="Phone Number"
//           value={phoneNumber2}
//           onChange={(phone) => handleChangePhone("phoneNumber2", phone)}
//         />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={12}>
//         <AppTextField
//           name="address"
//           label="Address"
//           value={address}
//           onChange={onChange}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default ProfileExtraInfo;
