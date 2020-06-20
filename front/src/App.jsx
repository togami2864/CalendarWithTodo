import React, { useState, useContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";

import CalendarBoard from "./components/Calendar/CalendarBoard";
import NavigationBar from "./components/Navigation/NavigationBar";
import DialogBoard from "./components/Dialog/DialogBoard";
import Detail from "./components/schedules/Detail";

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
    detail: {
      isDetailOpen: false,
      items: [],
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
        <Detail />
      </MuiPickersUtilsProvider>
    </AppContext.Provider>
  );
};

export default App;
