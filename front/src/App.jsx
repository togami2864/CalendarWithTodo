import React, { useContext, useReducer } from "react";
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

const App = () => {
  const day = dayjs();
  const initialState = {
    events: [
      {
        title: "test",
        body: "test",
        id: 1,
        isChecked: false,
        count: 0,
        date: dayjs(),
      },
    ],
    calendar: formatMonth(day),
    toggleDialog: {
      isDialogOpen: false,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationBar />
      <CalendarBoard />
      <DialogBoard />
    </AppContext.Provider>
  );
};

export default App;
