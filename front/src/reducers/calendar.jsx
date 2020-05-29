import React from "react";

import { SCHEDULE_NEXT_MONTH, SCHEDULE_PREV_MONTH } from "../actions/index";

import { getNextMonth, getPreviousMonth } from "../services/calendar";

const calendar = (state = [], action) => {
  switch (action.type) {
    case SCHEDULE_NEXT_MONTH:
      state = getNextMonth(state);
      return state;
    case SCHEDULE_PREV_MONTH:
      state = getPreviousMonth(state);
      return state;
    default:
      return state;
  }
};

export default calendar;
