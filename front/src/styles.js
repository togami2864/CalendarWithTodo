import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";

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
}));
