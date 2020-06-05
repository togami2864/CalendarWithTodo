import { isSameDay } from "./calendar";
// import React from "react"

export const setSchedule = (calendar, events) => {
  return calendar.map((c) => ({
    date: c,
    events: events.filter((e) => isSameDay(e.date, c)),
  }));
};
