import React, { useContext } from "react";

import { useStyles } from "./styles.js";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { SCHEDULE_NEXT_MONTH, SCHEDULE_PREV_MONTH } from "../../actions/index";
import AppContext from "../../context/AppContext";

import { IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const NavigationBar = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const nextMonth = () => {
    dispatch({ type: SCHEDULE_NEXT_MONTH });
  };
  const prevMonth = () => {
    dispatch({ type: SCHEDULE_PREV_MONTH });
  };

  return (
    <Toolbar className={styles.toolbar}>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <Typography
        className={styles.typo}
        color="textPrimary"
        variant="h5"
        component="h1"
      >
        カレンダー
      </Typography>
      <IconButton size="small" onClick={prevMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={nextMonth}>
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};

export default NavigationBar;
