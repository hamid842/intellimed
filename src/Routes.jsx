import React from "react";
import { Switch } from "react-router-dom";
import { Router } from "react-router";
import Loadable from "react-loadable";

import ErrorBoundaryRoute from "@shared/error/error-boundry-route";
import PageNotFound from "@shared/error/page-not-found";
import { history } from "@shared/history";
import Layout from "@shared/layout/Navigation";
import AppLoading from "@components/AppLoading";
// import PrivateRoute from "@shared/auth/private-route";

const Login = Loadable({
  loader: () => import("@login/LoginScreen"),
  loading: () => <AppLoading />,
});

const Dashboard = Loadable({
  loader: () => import("@pages/dashboard/Dashboard"),
  loading: () => <AppLoading />,
});

const NewPrescription = Loadable({
  loader: () => import("@pages/add-new-prescription/NewPrescription"),
  loading: () => <AppLoading />,
});

const Profile = Loadable({
  loader: () => import("@pages/profile/Profile"),
  loading: () => <AppLoading />,
});

const Patient = Loadable({
  loader: () => import("@pages/patient/Patient"),
  loading: () => <AppLoading />,
});

const Prescriber = Loadable({
  loader: () => import("@pages/prescriber/Prescriber"),
  loading: () => <AppLoading />,
});

const Prescriptions = Loadable({
  loader: () => import("@pages/prescription/Prescriptions"),
  loading: () => <AppLoading />,
});

const Routes = () => (
  <Router history={history}>
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Login} />
      <ErrorBoundaryRoute exact path="/login" component={Login} />
      <Layout>
        <ErrorBoundaryRoute exact path="/patient" component={Patient} />
        <ErrorBoundaryRoute exact path="/profile" component={Profile} />
        <ErrorBoundaryRoute exact path="/dashboard" component={Dashboard} />
        <ErrorBoundaryRoute exact path="/prescriber" component={Prescriber} />
        <ErrorBoundaryRoute
          exact
          path="/prescription"
          component={Prescriptions}
        />
        <ErrorBoundaryRoute
          exact
          path="/add-new-prescription"
          component={NewPrescription}
        />
      </Layout>
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
