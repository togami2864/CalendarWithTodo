import { isSameDay } from "./calendar";

export const setSchedule = (calendar, events) => {
  return calendar.map((c) => ({
    date: c,
    events: events.filter((e) => isSameDay(e.date, c)),
  }));
};
