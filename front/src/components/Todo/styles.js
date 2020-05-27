import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
  },
  textarea: {
    margin: theme.spacing(1),
    width: "85vw",
  },
  table: {
    minWidth: 650,
  },
}));
