import React from "react";

import { useStyles } from "./styles";

const Schedules = ({ event }) => {
  const styles = useStyles();
  return <div className={styles.schedules}>{event.title}</div>;
};

export default Schedules;
