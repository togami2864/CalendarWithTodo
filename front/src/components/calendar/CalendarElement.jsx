import React, { useContext } from "react";

import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import Schedules from "../schedules/Schedules";

import { useStyles } from "./styles.js";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";
import AppContext from "../../context/AppContext";

import { OPEN_DIALOG } from "../../actions/index";

const CalendarElement = ({ day, events }) => {
  const styles = useStyles();
  const { dispatch, calendar } = useContext(AppContext);

  const today = dayjs(); //現在の日付を取得

  //今月以外グレーダウン
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  //１日のみ月情報も
  const format = isFirstDay(day) ? "M月D日" : "D";

  //当日かどうかの判断
  const isToday = isSameDay(day, today);

  const openDialog = () => {
    dispatch({ type: OPEN_DIALOG });
  };

  return (
    <div className={styles.element} onClick={openDialog}>
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
      <div>
        {events.map((e) => {
          if (events.length !== 0) {
            return <Schedules event={e} />;
          }
        })}
      </div>
    </div>
  );
};
export default CalendarElement;
