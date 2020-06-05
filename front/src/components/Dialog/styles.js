import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  spacer: {
    margin: "4px 0",
  },
  input: {
    marginBottom: "32",
    fontSize: "22",
  },
  closeButton: {
    textAlign: "right",
  },
  date: {
    color: "red",
  },
}));
