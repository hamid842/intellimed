import axios from "axios";

// Endpoints
const getAllPrescriptionApi = process.env.REACT_APP_GET_ALL_PRESCRIPTION;

export const getAllPrescription = async () => {
  let instance = axios.create();
  try {
    const { data } = await instance(getAllPrescriptionApi);
    console.log(data)
    return data.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
  } catch (error) {
    console.log(error);
  }
};
