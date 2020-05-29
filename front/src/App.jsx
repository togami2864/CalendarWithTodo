import React, { useContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";

import CalendarBoard from "./components/Calendar/CalendarBoard";
import NavigationBar from "./components/Navigation/NavigationBar";
import EventForm from "./components/Todo/EventForm";
import EventTable from "./components/Todo/EventTable";

import { formatMonth } from "./services/calendar";
import reducer from "./reducers";
import AppContext from "./context/AppContext";

// type States = {
//   events: Task[];
//   calendar: Calendar;
// };

const App = () => {
  const day = dayjs();
  const initialState = {
    events: [],
    calendar: formatMonth(day),
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationBar />
      <CalendarBoard />
      <div className="container-fluid">
        <EventForm />
        <EventTable />
      </div>
    </AppContext.Provider>
  );
};

export default App;
