import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./App.css";
import configureStore from "@config/store";
import ErrorBoundary from "@shared/error/error-boundary";

const { store, persistor } = configureStore();

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
