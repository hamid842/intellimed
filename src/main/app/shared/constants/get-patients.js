import axios from "axios";

// Endpoints
const getPatientInfosApi = process.env.REACT_APP_CREATE_PATIENT_INFOS;

export const getPatients = async (id) => {
  try {
    const { data } = await axios(`${getPatientInfosApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
