import { combineReducers } from "redux";

import login from "@shared/reducers/login/login-reducer";

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
