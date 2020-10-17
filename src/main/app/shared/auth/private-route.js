import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import * as React from "react";

const redirectToLogin = <Redirect to="/login" />;
const PrivateRoute = ({ path, component, ...options }) => {
  const token = localStorage.getItem("token");
  if (token) {
    const parts = token.split(".");
    const content = JSON.parse(new Buffer(parts[1], "base64").toString());
    if (content.exp * 1000 >= Date.now()) {
      return <Route exact path={path} {...options} component={component} />;
    }
    return redirectToLogin;
  } else {
    return redirectToLogin;
  }
};

export default PrivateRoute;
