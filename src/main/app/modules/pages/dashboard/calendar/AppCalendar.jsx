// import { useState, useEffect } from "react";
import "./style.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import { getTimeTables } from "@shared/constants/get-time-tables";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: 450,
    borderRadius: 10,
  },
}));

const localizer = momentLocalizer(moment);

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: "lightblue",
//     },
//   });

// const timeFormat = (time) => {
//   const times = new moment(time).format("LT");
//   if (times === "12:00 AM") return "Morning";
//   if (times === "6:00 AM") return "Noon";
//   if (times === "12:00 PM") return "Evening";
//   if (times === "6:00 PM") return "Night";
// };

const formats = {
  dayFormat: "dddd",
  weekdayFormat: "dddd",
  // timeGutterFormat: timeFormat,
};

const AppCalendar = () => {
  const classes = useStyles();
  // const [timeTables, setTimeTables] = useState([]);

  // useEffect(() => {
  //   const fetchStates = async () => {
  //     setTimeTables(await getTimeTables());
  //   };
  //   fetchStates();
  // }, []);
  return (
    <Paper className={classes.container}>
      <Calendar
        culture="en-GB"
        // events={timeTables}
        events={([], [])}
        defaultView="month"
        views={["month", "week", "day"]}
        step={60}
        showMultiDayTimes
        //min={new Date(2021, 1, 1, 0, 0, 0)}
        // max={new Date(2022, 1, 0, 23, 59, 59)}
        defaultDate={new Date()}
        localizer={localizer}
        // timeslots={6}
        formats={formats}
      />
    </Paper>
  );
};

export default AppCalendar;
