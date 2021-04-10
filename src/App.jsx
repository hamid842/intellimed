// import { hot } from "react-hot-loader/root";
// import React from "react";
// import { Router, Route, Switch } from "react-router-dom";

// import LoginScreen from "@pages/login/LoginScreen";
// import { history } from "src/main/app/shared/history";
// import Layout from "src/main/app/shared/layout/Navigation";
// import NewPrescription from "src/main/app/modules/pages/add-new-prescription/NewPrescription";
// import Dashboard from "src/main/app/modules/pages/dashboard/Dashboard";
// import Medication from "src/main/app/modules/pages/medication/Medication";
// import Doctors from "src/main/app/modules/pages/doctors/Doctors";
// import Profile from "src/main/app/modules/pages/profile/Profile";
// import SampleScheduler from "src/main/app/modules/pages/SampleScheduler";

// const App = (props) => {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route exact path="/" component={LoginScreen} />
//         <Route exact path="/login" component={LoginScreen} />
//         <Layout>
//           <Route exact path="/dashboard" component={Dashboard} />
//           <Route
//             exact
//             path="/add-new-prescription"
//             component={NewPrescription}
//           />
//           <Route exact path="/profile" component={Profile} />
//           <Route exact path="/medication" component={Medication} />
//           <Route exact path="/doctors" component={Doctors} />
//           <Route
//             exact
//             path="/sample-full-calendar"
//             component={SampleScheduler}
//           />
//         </Layout>
//       </Switch>
//     </Router>
//   );
// };

// export default hot(App);
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
