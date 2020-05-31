import React, { useState, useContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";

import CalendarBoard from "./components/Calendar/CalendarBoard";
import NavigationBar from "./components/Navigation/NavigationBar";
import EventForm from "./components/Todo/EventForm";
import EventTable from "./components/Todo/EventTable";
import DialogBoard from "./components/Dialog/DialogBoard";

import { formatMonth } from "./services/calendar";
import reducer from "./reducers";
import AppContext from "./context/AppContext";
import { setSchedule } from "./services/schedule";
import { createCalendar } from "./services/calendar";

const App = () => {
  const day = dayjs();
  const initialState = {
    events: [],
    calendar: formatMonth(day),
    toggleDialog: {
      isDialogOpen: false,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState({});
  const calendar = setSchedule(createCalendar(state.calendar), state.events);
  return (
    <AppContext.Provider value={{ state, dispatch, date, setDate, calendar }}>
      <NavigationBar />
      <CalendarBoard />
      <DialogBoard />
    </AppContext.Provider>
  );
};

export default App;
