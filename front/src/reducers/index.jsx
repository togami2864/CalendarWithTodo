import { combineReducers } from "redux";

import events from "./events";
import calendar from "./calendar";
import toggleDialog from "./toggleDialog";
import detail from "./detail";

export default combineReducers({ events, calendar, toggleDialog, detail });
