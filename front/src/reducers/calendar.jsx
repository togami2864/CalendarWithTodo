import React from "react";

import { SCHEDULE_NEXT_MONTH, SCHEDULE_PREV_MONTH } from "../actions/index";

const calendar = (state = [], action) => {
  switch (action.type) {
    case SCHEDULE_NEXT_MONTH:
      return state;
    case SCHEDULE_PREV_MONTH:
      return state;
    default:
      return state;
  }
};

export default calendar;
