import React from "react";
import "./style.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: 450,
    borderRadius: 10,
  },
}));

const localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const timeFormat = (time) => {
  const times = new moment(time).format("LT");
  if (times === "12:00 AM") return "Morning";
  if (times === "6:00 AM") return "Noon";
  if (times === "12:00 PM") return "Evening";
  if (times === "6:00 PM") return "Night";
};

const formats = {
  dayFormat: "dddd",
  weekdayFormat: "dddd",
  // timeGutterFormat: timeFormat,
};

const AppCalendar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Calendar
        culture="en-GB"
        events={[{}, {}]}
        defaultView="week"
        views={["month", "week", "day"]}
        step={60}
        showMultiDayTimes
        min={new Date(2020, 1, 0, 0, 0, 0)}
        max={new Date(2020, 1, 0, 23, 59, 59)}
        // max={dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours")}
        defaultDate={new Date(2015, 3, 1)}
        localizer={localizer}
        timeslots={4}
        formats={formats}
      />
    </Paper>
  );
};

export default AppCalendar;
