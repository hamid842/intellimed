import React from "react";
import { Switch } from "react-router-dom";
import { Router } from "react-router";
import Loadable from "react-loadable";

import ErrorBoundaryRoute from "@shared/error/error-boundry-route";
import PageNotFound from "@shared/error/page-not-found";
import { history } from "@shared/history";
// import PrivateRoute from "@shared/auth/private-route";

const Login = Loadable({
  loader: () => import("@login/LoginScreen"),
  loading: () => <div style={{ textAlign: "center" }}>Just a sec ...</div>,
});

const Routes = () => (
  <Router history={history}>
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Login} />
      <ErrorBoundaryRoute exact path="/login" component={Login} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
