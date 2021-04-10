import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import PasswordStrengthBar from "react-password-strength-bar";

import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import AppTextField from "@components/AppTextField";
import PasswordField from "@components/PasswordField";
import AppButton from "@components/AppButton";
import colors from "@config/colors";
import logo from "@images/logo.png";

const useStyles = makeStyles(() => ({
  registerBtn: {
    width: 120,
    height: 40,
  },
}));

const SignUpContent = ({ handleRegisterUser, handleChange, user, loading }) => {
  const classes = useStyles();
  const { firstName, lastName, email, password } = user;
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form onSubmit={handleRegisterUser}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={12}>
            <img src={logo} alt="Logo" />
            <Typography variant="h5" noWrap>
              Create Account
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <AppTextField
              required={true}
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <AppTextField
              required={true}
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <AppTextField
              required={true}
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <PasswordField value={password} onChange={handleChange} />
            <PasswordStrengthBar password={password} minLength={8} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <AppButton
              icon={loading && <CircularProgress size="18px" color="inherit" />}
              type="submit"
              label="Register"
              variant="contained"
              color={colors.white}
              backgroundColor={colors.mainBlue}
              hoverColor={colors.mainBlue}
              className={classes.registerBtn}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default SignUpContent;
