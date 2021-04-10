import React from "react";
import { setConfig } from "react-hot-loader";
import { SnackbarProvider } from "notistack";

import ErrorBoundary from "@shared/error/error-boundary";
import AppRoutes from "./Routes";

setConfig({
  showReactDomPatchNotification: false,
});

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </SnackbarProvider>
    </>
  );
}

export default App;
