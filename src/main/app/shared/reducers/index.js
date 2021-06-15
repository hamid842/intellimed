import { combineReducers } from "redux";

import login from "@shared/reducers/login/login-reducer";
import patients from "@shared/reducers/patients/patient-reducer";
import userInfos from "@shared/reducers/user-infos/userInfo-reducer";

const rootReducer = combineReducers({
  login,
  patients,
  userInfos,
});

export default rootReducer;
