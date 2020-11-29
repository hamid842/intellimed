import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, CircularProgress } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import PasswordField from "../../shared/components/PasswordField";
import colors from "../../config/colors";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#2e3191",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2e3191",
    },
  },
})(TextField);

const LoginButton = withStyles((theme) => ({
  root: {
    color: colors.darkBlue,
    borderColor: colors.darkBlue,
    fontWeight: "bold",
    backgroundColor: colors.white,
    borderRadius: "25px",
    width: 150,
  },
}))(Button);

const LoginTab = (props) => {
  const { errorMessage } = props;
  const [loading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {};

  return (
    <>
      <form onSubmit={handleLogin}>
        <Grid container spacing={errorMessage ? 4 : 5} justify="center">
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="flex-end" justify="center">
              <Grid item>
                <Person />
              </Grid>
              <Grid item>
                <CssTextField
                  required
                  name="userName"
                  value={userInfo.userName}
                  id="custom-css-standard-password"
                  label="Username"
                  onChange={handleChange}
                  style={{ width: "250px" }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="flex-end" justify="center">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <PasswordField />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ color: "red", textAlign: "center" }}
            xs={12}
          ></Grid>
          <Grid item>
            <LoginButton variant="outlined" type="submit">
              {loading && <CircularProgress size={26} color="inherit" />}
              {!loading && "Login"}
            </LoginButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginTab;
