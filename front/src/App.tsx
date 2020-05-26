import React from "react";

import CalendarBoard from "./components/Calendar/CalendarBoard";
import NavigationBar from "./components/Navigation/NavigationBar";

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <CalendarBoard />
    </>
  );
};

export default App;
