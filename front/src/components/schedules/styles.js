import React from "react";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  schedules: {
    width: "90%",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "14px",
    padding: "1px 4px",
    margin: "1px auto",
    cursor: "pointer",
    backgroundColor: "rgb(121, 134, 203)",
  },
  closeButton: {
    textAlign: "right",
  },
  box: {
    backgroundColor: "rgb(121, 134, 203)",
    width: "16px",
    height: "16px",
    display: "block",
    marginLeft: "6px",
    borderRadius: "4px",
  },
}));
