import React from "react";

import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./styles";

const EventForm = () => {
  const styles = useStyles();
  return (
    <>
      <h4>EventCreationForm</h4>

      <div>
        <h3>Title</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={styles.input}
        />
      </div>
      <div>
        <h3>Body</h3>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          className={styles.textarea}
        />
      </div>

      <Button
        startIcon={<CreateIcon />}
        color="primary"
        className={styles.button}
        variant="contained"
      >
        Create Event
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        color="secondary"
        className={styles.button}
        variant="contained"
      >
        Delete All Event
      </Button>
    </>
  );
};
export default EventForm;
