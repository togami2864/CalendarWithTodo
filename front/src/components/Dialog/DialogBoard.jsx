import React, { useContext } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { CLOSE_DIALOG } from "../../actions/index";
import AppContext from "../../context/AppContext";

const AddScheduleDialog = () => {
  const { state, dispatch } = useContext(AppContext);

  const closeDialog = () => {
    dispatch({ type: CLOSE_DIALOG });
  };
  return (
    <Dialog
      open={state.isDialogOpen}
      onClose={closeDialog}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;
