import { GET_PATIENTS } from "@shared/action-types/action-types";
import { getPatients } from "@shared/constants/get-patients";

// State
const initialState = {
  // TODO should be an array
  patients: {},
};

// Actions
export const getAccountPatients = (id) => async (dispatch, getState) => {
  dispatch({
    type: GET_PATIENTS,
    payload: await getPatients(id),
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS: {
      return {
        ...state,
        patients: action.payload,
      };
    }
    default:
      return state;
  }
};
