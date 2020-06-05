import React, { useContext } from "react";

import { useStyles } from "./styles";
import AppContext from "../../context/AppContext";
import { OPEN_DETAIL } from "../../actions/index";

const Schedules = ({ event }) => {
  const styles = useStyles();
  const { dispatch } = useContext(AppContext);
  const openDetail = (e) => {
    e.stopPropagation();
    dispatch({ type: OPEN_DETAIL });
  };
  return (
    <div className={styles.schedules} onClick={openDetail}>
      {event.title}
    </div>
  );
};

export default Schedules;
