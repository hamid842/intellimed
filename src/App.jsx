import React from "react";
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";

import ErrorBoundary from "@shared/error/error-boundary";
import AppRoutes from "./AppRoutes";


function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <ErrorBoundary>
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </ErrorBoundary>
        </SnackbarProvider>
    );
}

export default App;
