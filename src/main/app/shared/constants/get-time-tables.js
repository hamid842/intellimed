import axios from "axios";

// Endpoints
const getTimeTablesApi = process.env.REACT_APP_GET_TIME_TABLES;

export const getTimeTables = async () => {
  let instance = axios.create();
  delete instance.defaults.headers.common["Authorization"];
  try {
    const { data } = await instance(getTimeTablesApi);

    return data.sort((a, b) =>
      a.startDatetime > b.startDatetime
        ? 1
        : b.startDatetime > a.startDatetime
        ? -1
        : 0
    );
  } catch (error) {
    console.log(error);
  }
};
