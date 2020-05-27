import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CalendarBoard from "./components/Calendar/CalendarBoard";
import NavigationBar from "./components/Navigation/NavigationBar";
import EventForm from "./components/Todo/EventForm";
import EventTable from "./components/Todo/EventTable";

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <CalendarBoard />
      <div className="container-fluid">
        <EventForm />
        <EventTable />
      </div>
    </>
  );
};

export default App;
