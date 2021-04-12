import axios from "axios";

import { history } from "@shared/history";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGOUT,
  TOGGLE_LOAD,
} from "@shared/action-types/action-types";

// Endpoints
const loginApi = process.env.REACT_APP_LOGIN_API;

// Initial state
const initialState = {
  isAuthenticated: false,
  errorMessage: "",
  status: false,
  loading: false,
  name: "",
};

// Actions
export const login = (username, password, rememberMe, toast) => async (
  dispatch
) => {
  dispatch({ type: TOGGLE_LOAD });
  const requestBody = {
    username,
    password,
    rememberMe,
  };

  var instance = axios.create();
  delete instance.defaults.headers.common["Authorization"];
  await instance
    .post(loginApi, requestBody)
    .then((response) => {
      const status = response?.status;
      if (status === 200 || 201) {
        localStorage.setItem("token", response.data.id_token);
        dispatch({
          type: LOGIN,
          payload: response,
        });
        dispatch({ type: TOGGLE_LOAD });
        history.push("/dashboard");
      }
    })
    .catch((err) => {
      dispatch({ type: TOGGLE_LOAD });
      if (err) {
        toast(err.response.data?.detail, { variant: "error" });
      }
    });
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
  history.push("/login");
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOAD: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case LOGIN: {
      const status = action.payload.status === 200 || 201;

      return {
        ...state,
        status,
        errorMessage: "",
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
