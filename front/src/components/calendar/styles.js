import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
  },
  element: {
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    height: "18vh",
  },
  grid: {
    borderLeft: "1px solid #ccc",
    borderTop: "1px solid #ccc",
  },
  days: {
    borderRight: "1px solid #ccc",
    paddingTop: "1px solid #ccc",
  },
  date: {
    padding: "5px 0",
    height: "24px",
  },
  today: {
    display: "inline-block",
    lineHeight: "24px",
    width: "24px",
    backgroundColor: "#1a73e8",
    color: "#fff",
    borderRadius: "50%",
  },
}));
