import React, { useContext } from "react";

import { GridList, Typography } from "@material-ui/core";
import { useStyles } from "./styles.js";

import CalendarElement from "./CalendarElement";
import { createCalendar } from "../../services/calendar";
import { setSchedule } from "../../services/schedule";
import AppContext from "../../context/AppContext";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const CalendarBoard = () => {
  const styles = useStyles();
  const { state, dispatch, date, setDate } = useContext(AppContext);
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const calendar = setSchedule(createCalendar(state.calendar), state.events);

  console.log(calendar);
  // console.log()
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((c) => (
          <li key={c.date.toISOString()} onClick={() => setDate(c)}>
            <CalendarElement day={c.date} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
