import React from "react";

import { OPEN_DIALOG, CLOSE_DIALOG } from "../actions/index";

const toggleDialog = (state = {}, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};

export default toggleDialog;
