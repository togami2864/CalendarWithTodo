import React from "react";

import { Task } from "../../Types/Types";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "../Todo/styles";

type Props = {
  event: Task;
};

const Event: React.FC<Props> = ({ event }) => {
  const styles = useStyles();
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <Button
          startIcon={<DeleteIcon />}
          color="secondary"
          variant="contained"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default Event;
