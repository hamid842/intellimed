import axios from "axios";

// Endpoints
const getPatientInfosApi = process.env.REACT_APP_GET_ALL_PATIENTS_API;

export const getPatients = async (id) => {
  try {
    const { data } = await axios(`${getPatientInfosApi}/${id}`);
    if (data && data.length > 0) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
