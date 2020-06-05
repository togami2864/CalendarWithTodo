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

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

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
  const calendar = setSchedule(createCalendar(state.calendar), state.events);
  return (
    <AppContext.Provider value={{ state, dispatch, calendar }}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <NavigationBar />
        <CalendarBoard />
        <DialogBoard />
      </MuiPickersUtilsProvider>
    </AppContext.Provider>
  );
};

export default App;
