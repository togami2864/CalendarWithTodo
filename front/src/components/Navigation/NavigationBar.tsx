import React from "react";

import { useStyles } from "./styles.js";

import { IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const NavigationBar = () => {
  const styles = useStyles();
  return (
    <Toolbar className={styles.toolbar}>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <Typography
        className={styles.typo}
        color="textPrimary"
        variant="h5"
        component="h1"
      >
        カレンダー
      </Typography>
      <IconButton size="small">
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};

export default NavigationBar;
