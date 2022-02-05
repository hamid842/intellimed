import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "antd/dist/antd.css";

import App from "./App";
import "./App.css";
import configureStore from "@config/store";
import ErrorBoundary from "@shared/error/error-boundary";
import AxiosInterceptors from "@shared/axios-interceptors";

const {store} = configureStore();

AxiosInterceptors();

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App/>
        </Provider>
    </ErrorBoundary>,
    document.getElementById("root")
);
