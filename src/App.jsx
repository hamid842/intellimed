import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import { toast, ToastContainer } from "react-toastify";
import { history } from "./main/app/shared/history";
import PrivateRoute from "./main/app/shared/auth/private-route";
import axios from "axios";
import Layout from "./main/app/modules/pages/dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import "axios-progress-bar/dist/nprogress.css";

import Login from "./main/app/modules/login/Login";

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
        <Route exact path="/dashboard" component={Layout} />
        <Layout></Layout>
      </Switch>
    </Router>
  );
};

export default hot(App);
