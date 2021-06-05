import { combineReducers } from "redux";

import login from "@shared/reducers/login/login-reducer";
import patients from "@shared/reducers/patients/patient-reducer";

const rootReducer = combineReducers({
  login,
  patients,
});

export default rootReducer;
