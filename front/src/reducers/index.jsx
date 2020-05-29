import { combineReducers } from "redux";

import events from "./events";
import calendar from "./calendar";

export default combineReducers({ events, calendar });
