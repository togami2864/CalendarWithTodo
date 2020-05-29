import React from "react";

import { GridList, Typography } from "@material-ui/core";
import { useStyles } from "./styles.js";

import CalendarElement from "./CalendarElement";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const days = ["日", "月", "火", "水", "木", "金", "土"];

const createCalendar = () => {
  const firstDay = dayjs().startOf("month"); //５月1日についての全てのデータ
  const firstDayIndex = firstDay.day(); //5月なら金曜日→５ *日曜が0 土曜は6
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
};

const calendar = createCalendar();

const CalendarBoard = () => {
  const styles = useStyles();
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
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
