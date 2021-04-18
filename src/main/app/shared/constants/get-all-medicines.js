import axios from "axios";

// Endpoints
const getAllMedicinesApi = process.env.REACT_APP_GET_ALL_MEDICINES;

export const getAllMedicines = async () => {
  let instance = axios.create();
  delete instance.defaults.headers.common["Authorization"];
  try {
    const { data } = await instance(getAllMedicinesApi);

    return data.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  } catch (error) {
    console.log(error);
  }
};
