import React from "react";
import dayjs from "dayjs";

// import shortid from "shortid";

import {
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
  CREATE_EVENT,
} from "../actions/index";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = {
        title: action.title,
        date: action.date,
        location: action.location,
        description: action.description,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case DELETE_EVENT:
      return state.filter((event) => action.id !== event.id);

    case DELETE_ALL_EVENTS:
      return [];

    default:
      return state;
  }
};

export default events;
