import React from "react";

import {
  OPEN_DETAIL,
  CLOSE_DETAIL,
  SET_EVENTS_TO_ITEM,
} from "../actions/index";

const detail = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS_TO_ITEM:
      const event = {
        title: action.title,
        date: action.date,
        location: action.location,
        description: action.description,
      };
      return { ...state, item: { ...event } };
    case OPEN_DETAIL:
      return { ...state, isDetailOpen: true };
    case CLOSE_DETAIL:
      return { ...state, isDetailOpen: false };
    default:
      return state;
  }
};

export default detail;
