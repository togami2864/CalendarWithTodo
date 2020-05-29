import React from "react";

// import shortid from "shortid";

import {
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
  CREATE_EVENT,
  REVERSE_CHECKED,
} from "../actions/index";

// import { Task, CalendarAction } from "../Types/Types";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = {
        title: action.title,
        body: action.body,
        isChecked: action.isChecked,
        count: action.count,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case DELETE_EVENT:
      state.map((event) =>
        event.id !== action.id ? event.count : (event.count -= 1)
      );
      return state.filter((event) => action.id !== event.id);

    case DELETE_ALL_EVENTS:
      return [];

    case REVERSE_CHECKED:
      state = state.map((event) => {
        return {
          ...event,
          isChecked:
            event.id === action.id ? !event.isChecked : event.isChecked,
        };
      });
      const checked = state.filter((event) => event.isChecked); //checkがtrueのものもに残し、配列に格納
      state.map((event) => (event.count = checked.length));

      return state;
    default:
      return state;
  }
};

export default events;
