import React, { useState, useContext } from "react";

import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./styles";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../../actions/index";
import AppContext from "../../context/AppContext";

const EventForm = () => {
  const styles = useStyles();
  const { state, dispatch, date } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
      isChecked: false,
      count: 0,
      date: date,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
    }
  };

  const unCreatable = title === "" || body === "";
  const unDeletable = state.events.length === 0;

  return (
    <>
      <h4>EventCreationForm</h4>

      <div>
        <h3>Title</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h3>Body</h3>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          className={styles.textarea}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <Button
        startIcon={<CreateIcon />}
        color="primary"
        className={styles.button}
        variant="contained"
        onClick={addEvent}
        disabled={unCreatable}
      >
        Create Event
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        color="secondary"
        className={styles.button}
        variant="contained"
        onClick={deleteAllEvent}
        disabled={unDeletable}
      >
        Delete All Event
      </Button>
    </>
  );
};
export default EventForm;
