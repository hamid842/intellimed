import { memo, forwardRef } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

import AppButton from "@shared/components/AppButton";

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "black",
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeletePatientDialog = ({
  open,
  onClose,
  onDelete,
  patientInfo,
  loading,
  selectedPatient,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Confirmation"}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          className={classes.content}
        >
          <WarningIcon color="secondary" />
          You sure want to delete Patient named &nbsp;
          <strong>
            {selectedPatient?.firstName} {selectedPatient?.lastName}?
          </strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <AppButton
          label="no"
          variant="outlined"
          color="red"
          onClick={onClose}
          startIcon={<CloseIcon />}
        />
        <AppButton
          label="yes"
          variant="outlined"
          color="green"
          onClick={onDelete}
          startIcon={loading ? <CircularProgress /> : <CheckIcon />}
        />
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = ({ patients }) => ({
  selectedPatient: patients.selectedPatient,
});

export default connect(mapStateToProps, {})(memo(DeletePatientDialog));
