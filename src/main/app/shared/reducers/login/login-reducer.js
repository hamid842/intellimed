import axios from "axios";

import { history } from "@shared/history";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGOUT,
  TOGGLE_LOAD,
  GET_ACCOUNT_INFO,
} from "@shared/action-types/action-types";

// Endpoints
const loginApi = process.env.REACT_APP_LOGIN_API;
const getAccountInfoApi = process.env.REACT_APP_ACCOUNT_API;

// Initial state
const initialState = {
  isAuthenticated: false,
  errorMessage: "",
  account: {},
  userInfos: {},
  status: false,
  loading: false,
};

// Actions
export const login =
  (username, password, rememberMe, toast) => async (dispatch) => {
    dispatch({ type: TOGGLE_LOAD });
    const getAccountInfo = async () => {
      await axios(getAccountInfoApi)
        .then((res) => {
          if (res.status === 200 || 201) {
            dispatch({
              type: GET_ACCOUNT_INFO,
              payload: res.data,
            });
          }
        })
        .catch((err) => {
          if (err) {
            toast("Could not get account info!", { variant: "error" });
          }
        });
    };
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
      .then(async () => await getAccountInfo())
      .catch((err) => {
        dispatch({ type: TOGGLE_LOAD });
        if (err) {
          toast(err.response?.data?.detail, { variant: "error" });
        } else {
          toast("Something went wrong!", { variant: "error" });
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
    case GET_ACCOUNT_INFO: {
      return {
        ...state,
        account: action.payload,
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
