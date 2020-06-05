import React, { useState, useContext } from "react";

import dayjs from "dayjs";

import EventForm from "../Todo/EventForm";
import EventTable from "../Todo/EventTable";

import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";

import {
  CLOSE_DIALOG,
  CREATE_EVENT,
  SET_EVENTS_TO_ITEM,
} from "../../actions/index";
import AppContext from "../../context/AppContext";
import { useStyles } from "./styles";

const AddScheduleDialog = () => {
  const styles = useStyles();
  const { state, dispatch, calendar } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(dayjs());

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_EVENT, title, location, description, date });
    dispatch({ type: SET_EVENTS_TO_ITEM, title, location, description, date });
    setTitle("");
    setLocation("");
    setDescription("");
  };
  const closeDialog = () => {
    dispatch({ type: CLOSE_DIALOG });
  };
  return (
    <Dialog
      open={state.toggleDialog.isDialogOpen}
      onClose={closeDialog}
      maxWidth="xl"
      fullWidth
    >
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        <DialogContent>
          <h3>
            <span className={styles.date}>日付</span>
            を設定し、詳細を入力してください
          </h3>
          <input
            placeholder="タイトルと日時を追加"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <AccessTime />
            </Grid>
            <Grid item xs={10}>
              <DatePicker
                variant="inline"
                format="YYYY年M月D日"
                animateYearScrolling
                disableToolbar
                fullWidth
                className={styles.spacer}
                value={date}
                onChange={(d) => setDate(d)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <LocationOnOutlined />
            </Grid>
            <Grid item xs={10}>
              <TextField
                className={styles.spacer}
                fullWidth
                placeholder="場所を追加"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <NotesOutlined />
            </Grid>
            <Grid item xs={10}>
              <TextField
                className={styles.spacer}
                fullWidth
                placeholder="説明を追加"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={addEvent}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
