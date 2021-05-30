import axios from "axios";

// Endpoints
const getSideEffectsApi = process.env.REACT_APP_GET_SIDE_EFFECT_API;

export const getSideEffects = async (id) => {
  try {
    const { data } = await axios(`${getSideEffectsApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
