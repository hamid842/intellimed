import React from "react";
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from "react-big-calendar";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment, { weekdays, weekdaysMin } from "moment";

const useStyles = makeStyles(() => ({
  container: {
    width: 820,
    height: 400,
  },
}));
// import events from "../events";
// import * as dates from "../../src/utils/dates";

// let allViews = Object.keys(Views).map((k) => Views[k]);
const localizer = momentLocalizer(moment);
const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const formats = {
  dayFormat: "dddd",
  weekdayFormat: "dddd",
  timeGutterFormat: (time) => (time >= 12 <= 6 ? "Morning" : null),
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
