import React, { useContext } from "react";

import { Task } from "../../Types/Types";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "../Todo/styles";
import { DELETE_EVENT, REVERSE_CHECKED } from "../../actions/index";
import AppContext from "../../context/AppContext";

type Props = {
  event: Task;
};

const Event: React.FC<Props> = ({ event }) => {
  const styles = useStyles();
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  // console.log(event.count);

  const deleteEvent = (e: any) => {
    e.preventDefault();
    const result = window.confirm(
      `イベント${event.id}を本当に削除して良いですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
    }
  };

  const reverseChecked = () => {
    dispatch({ type: REVERSE_CHECKED, id });
  };

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={reverseChecked} />
      </td>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <Button
          startIcon={<DeleteIcon />}
          color="secondary"
          variant="contained"
          onClick={deleteEvent}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default Event;
