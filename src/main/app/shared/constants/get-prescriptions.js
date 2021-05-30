import axios from "axios";

// Endpoints
const getAllPrescriptionApi = process.env.REACT_APP_GET_ALL_PRESCRIPTION;

export const getAllPrescription = async (id) => {
  try {
    const { data } = await axios(`${getAllPrescriptionApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
