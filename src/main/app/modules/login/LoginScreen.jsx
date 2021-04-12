import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import "./login-style.css";
import SignUpContent from "./SignUpContent";
import SignInContent from "./SignInContent";

// Endpoints
const registerUserApi = process.env.REACT_APP_REGISTER_USER_API;

const LoginScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [user, setUser] = useState({
    activated: true,
    login: "true",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loginUser, setLoginUser] = useState({
    userName: "",
    password: "",
  });

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    await axios
      .post(registerUserApi, user)
      .then((res) => {
        if (res.status === 200 || 201) {
          enqueueSnackbar("User is created successfully.", {
            variant: "success",
          });
          setRegisterLoading(false);
          setUser({
            ...user,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        setRegisterLoading(false);
        console.log(err.response);
      });
  };

  const handleSignInUser = (e) => {
    e.preventDefault();
    alert("clicked");
  };

  const handleChangeSignUpCredentials = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleChangeLoginCredentials = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginUser({ ...user, [name]: value });
  };

  return (
    <div className="body">
      <div className="login-container" id="login-container">
        {/* Sign up Container */}
        <div className="form-container sign-up-container">
          <SignUpContent
            user={user}
            loading={registerLoading}
            handleChange={handleChangeSignUpCredentials}
            handleRegisterUser={handleRegisterUser}
          />
        </div>
        {/* Sign in Container */}
        <div className="form-container sign-in-container">
          <SignInContent
            user={loginUser}
            handleChange={handleChangeLoginCredentials}
            handleSignInUser={handleSignInUser}
          />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() =>
                  document
                    .querySelector(".login-container")
                    .classList.remove("right-panel-active")
                }
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() =>
                  document
                    .querySelector(".login-container")
                    .classList.add("right-panel-active")
                }
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;