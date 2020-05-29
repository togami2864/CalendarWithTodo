import React, { useContext } from "react";

import { useStyles } from "../Todo/styles";
import Event from "./Event";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import AppContext from "../../context/AppContext";

const EventTable = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(AppContext);
  console.log(state.events);

  return (
    <div className="container-lg">
      <h4>Events</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Index</th>
            <th>Title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => {
            return <Event event={event} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EventTable;
