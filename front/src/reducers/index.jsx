import { combineReducers } from "redux";

import events from "./events";
import calendar from "./calendar";
import isDialogOpen from "./dialog";

export default combineReducers({ events, calendar, isDialogOpen });
