import React from "react";

import { GridList } from "@material-ui/core";
import { useStyles } from "./styles.js";

const calendar = [
  "26",
  "27",
  "28",
  "29",
  "30",
  "29",
  "30",
  "31",
  "6月1日",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const App: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => (
          <li>
            <div className={styles.element}>{c}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};
export default App;
