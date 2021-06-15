import { GET_USER_INFOS } from "@shared/action-types/action-types";
import { getUserInfo } from "@shared/constants/get-user-infos";

// State
const initialState = {
  userInfos: {},
};

// Actions
export const getUserInfos = (id) => async (dispatch) => {
  dispatch({
    type: GET_USER_INFOS,
    payload: await getUserInfo(id),
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFOS: {
      return {
        ...state,
        userInfos: action.payload,
      };
    }

    default:
      return state;
  }
};
