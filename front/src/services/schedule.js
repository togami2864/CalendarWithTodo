import { isSameDay } from "./calendar";
// import React from "react"

export const setSchedule = (calendar, events) => {
  let same = null;
  calendar.map((c) => {
    events.map((e) => {
      if (e.date.format("YYYYMMDD") === c.format("YYYYMMDD")) {
        same = e;
        console.log(same);
      }
    });
  });

  return calendar.map((c) => ({
    date: c,
    events: same,
  }));
};
