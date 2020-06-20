import React, { useContext } from "react";

import AppContext from "../../context/AppContext";
import { CLOSE_DETAIL, DELETE_EVENT } from "../../actions/index";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  Close,
  LocationOnOutlined,
  NotesOutlined,
  DeleteOutlineOutlined,
} from "@material-ui/icons";
import { useStyles } from "./styles";

const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`,
});

const Detail = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(AppContext);
  console.log(state.detail);

  const closeDetail = () => {
    dispatch({ type: CLOSE_DETAIL });
  };

  const deleteEvent = () => {
    dispatch({ type: DELETE_EVENT });
  };

  return (
    <Dialog
      open={state.detail.isDetailOpen}
      onClose={closeDetail}
      maxWidth="xs"
      fullWidth
    >
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton size="small">
            <DeleteOutlineOutlined />
          </IconButton>
          <IconButton onClick={closeDetail} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {state.detail.item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 30)}
              >
                <Grid>
                  <span className={styles.box}></span>
                </Grid>
                <Grid xs={10}>
                  <Typography variant="h5" component="h2">
                    {state.detail.item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {state.detail.item.date.format("M月 D日")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {state.detail.item.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid>
                  <LocationOnOutlined />
                </Grid>
                <Grid xs={10}>
                  <Typography>{state.detail.item.location}</Typography>
                </Grid>
              </Grid>
            )}
            {state.detail.item.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid>
                  <NotesOutlined />
                </Grid>
                <Grid xs={10}>
                  <Typography>{state.detail.item.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Detail;
