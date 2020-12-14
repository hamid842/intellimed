import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default class DemoApp extends React.Component {
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  render() {
    return (
      <FullCalendar
        dayHeaderFormat={{ weekday: "long" }}
        firstDay={1}
        customButtons={{
          thisWeekBtn: {
            text: "This Week",
            // TODO implement for this week
            click: () => alert("this week"),
          },
        }}
        headerToolbar={{
          start: "",
          center: "",
          end: "dayGridWeek dayGridMonth dayGridDay prev thisWeekBtn next",
        }}
        buttonText={{
          today: "Today",
          week: "Week",
          day: "Day",
          month: "Month",
        }}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        dateClick={this.handleDateClick}
        eventContent={renderEventContent}
        weekends={true}
        events={[
          { title: "event 1", date: "2019-04-01" },
          { title: "event 2", date: "2019-04-02" },
        ]}
        slotDuration={{ hours: 4 }}
        allDaySlot={false}
        slotLabelInterval={2}
      />
    );
  }
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
