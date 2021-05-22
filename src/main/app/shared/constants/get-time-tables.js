import axios from "axios";
import moment from "moment";

// Endpoints
const getTimeTablesApi = process.env.REACT_APP_GET_TIME_TABLES;

export const getTimeTables = async () => {
  let instance = axios.create();
    
  try {
    const { data } = await instance(getTimeTablesApi);

    return data
      .map(({ id, startDatetime, endDateTime, isTaken }) => ({
        id,
        title: isTaken,
        allDay: true,
        start: moment(startDatetime).format("YYYYY-MM-DD HH:mm"),
        end: moment(endDateTime).format("YYYYY-MM-DD HH:mm"),
      }))
      .sort((a, b) =>
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
