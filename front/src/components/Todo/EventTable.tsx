import React from "react";

import { useStyles } from "../Todo/styles";
import Event from "./Event";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const EventTable = () => {
  const styles = useStyles();
  const events = [
    { id: 1, title: "テスト", body: "test" },
    { id: 2, title: "テスト", body: "test" },
    { id: 3, title: "テスト", body: "test" },
    { id: 4, title: "テスト", body: "test" },
  ];

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
          {events.map((event, index) => {
            return <Event event={event} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EventTable;
