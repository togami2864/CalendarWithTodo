import React from "react";

import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles.js";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";

const CalendarElement = ({ day }) => {
  const styles = useStyles();

  const today = dayjs(); //現在の日付を取得

  //今月以外グレーダウン
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  //１日のみ月情報も
  const format = isFirstDay(day) ? "M月D日" : "D";

  //当日かどうかの判断
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};
export default CalendarElement;
