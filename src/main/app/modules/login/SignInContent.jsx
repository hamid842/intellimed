import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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
  forgotPassBtn: {
    color: "grey",
    fontSize: 12,
    margin: "auto",
  },
}));

const SignInContent = ({
  user,
  handleSignInUser,
  handleChange,
  handleCheck,
  loading,
}) => {
  const classes = useStyles();
  const { userName, password, rememberMe } = user;
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form onSubmit={handleSignInUser}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={12}>
            <img src={logo} alt="Logo" />
            <Typography variant="h5" noWrap>
              Sign in
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <AppTextField
              required={true}
              name="userName"
              label="Username"
              value={userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <PasswordField value={password} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} className="text-left">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={rememberMe}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  onChange={handleCheck}
                />
              }
              label="Remember Me"
            />
          </Grid>
          <a href="!#" className={classes.forgotPassBtn}>
            Forgot your password?
          </a>
          <Grid item xs={12} sm={12} lg={12}>
            <AppButton
              type="submit"
              label="Sign IN"
              variant="contained"
              color={colors.white}
              backgroundColor={colors.mainBlue}
              hoverColor={colors.mainBlue}
              className={classes.registerBtn}
              icon={loading && <CircularProgress size="18px" color="inherit" />}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ login }) => ({
  loading: login.loading,
});

export default connect(mapStateToProps, {})(SignInContent);
