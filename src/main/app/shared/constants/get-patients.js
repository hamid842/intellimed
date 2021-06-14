import axios from "axios";

// Endpoints
const getPatientInfosApi = process.env.REACT_APP_GET_ALL_PATIENTS_API;

export const getPatients = async (id) => {
  try {
    const { data } = await axios(`${getPatientInfosApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
