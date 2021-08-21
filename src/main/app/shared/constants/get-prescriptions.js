import axios from "axios";

// Endpoints
const getAllPrescriptionApi = process.env.REACT_APP_GET_ALL_PRESCRIPTIONS_API;

export const getAllPrescriptions = async (id, setPrescriptions) => {
  try {
    const result = await axios(`${getAllPrescriptionApi}/${id}`);
    if (setPrescriptions && result.data && result.data.length > 0) {
      setPrescriptions([result.data]);
    } else {
      setPrescriptions([result.data]);
    }
  } catch (error) {
    console.log(error);
  }
};
