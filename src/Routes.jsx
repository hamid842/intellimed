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

const Doctors = Loadable({
  loader: () => import("@pages/doctors/Doctors"),
  loading: () => <AppLoading />,
});

const Medication = Loadable({
  loader: () => import("@pages/medication/Medication"),
  loading: () => <AppLoading />,
});

const Routes = () => (
  <Router history={history}>
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Login} />
      <ErrorBoundaryRoute exact path="/login" component={Login} />
      <Layout>
        <ErrorBoundaryRoute exact path="/dashboard" component={Dashboard} />
        <ErrorBoundaryRoute
          exact
          path="/add-new-prescription"
          component={NewPrescription}
        />
        <ErrorBoundaryRoute exact path="/profile" component={Profile} />
        <ErrorBoundaryRoute exact path="/medication" component={Medication} />
        <ErrorBoundaryRoute exact path="/doctors" component={Doctors} />
      </Layout>
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
