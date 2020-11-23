import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "axios-progress-bar/dist/nprogress.css";

import Login from "src/main/app/modules/login/Login";
import { history } from "src/main/app/shared/history";
import Layout from "src/main/app/shared/layout/Navigation";
import NewPrescription from "src/main/app/modules/pages/add-new-prescription/NewPrescription";
import Dashboard from 'src/main/app/modules/pages/dashboard/Dashboard'

const App = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    loadProgressBar();
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  }, [props]);

  return (
    <Router history={history}>
      <ToastContainer
        position={toast.POSITION.TOP_LEFT}
        className="toastify-container"
        toastClassName="toastify-toast"
      />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Layout>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-new-prescription" component={NewPrescription} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default hot(App);
