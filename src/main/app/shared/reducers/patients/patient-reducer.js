import {
  GET_PATIENTS,
  SELECT_PATIENT,
} from "@shared/action-types/action-types";
import { getPatients } from "@shared/constants/get-patients";

// State
const initialState = {
  // TODO should be an array
  patients: [],
  selectedPatient: {},
};

// Actions
export const getAccountPatients = (id) => async (dispatch) => {
  dispatch({
    type: GET_PATIENTS,
    payload: await getPatients(id),
  });
};

export const selectPatient = (id) => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  dispatch({
    type: SELECT_PATIENT,
    payload: state.patients?.patients?.find((item) => item.id === id),
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS: {
      // TODO remove this later
      const createArray = [];
      createArray.push(action.payload);
      createArray.push(action.payload);
      return {
        ...state,
        // TODO remove this
        patients: createArray,
      };
    }
    case SELECT_PATIENT: {
      return {
        ...state,
        selectedPatient: action.payload,
      };
    }
    default:
      return state;
  }
};
