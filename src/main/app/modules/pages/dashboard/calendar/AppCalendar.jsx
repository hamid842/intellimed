import React from "react";
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

// const timeFormat = (time) => {
//   console.log(time);
// };

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
        events={["", ""]}
        defaultView="week"
        views={["month", "week", "day"]}
        step={60}
        showMultiDayTimes
        // max={dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours")}
        defaultDate={new Date(2015, 3, 1)}
        // components={{
        //   timeSlotWrapper: ColoredDateCellWrapper,
        // }}
        localizer={localizer}
        timeslots={6}
        formats={formats}
      />
    </Paper>
  );
};

export default AppCalendar;
