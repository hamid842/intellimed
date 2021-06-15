import { memo, forwardRef } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import WarningIcon from "@material-ui/icons/Warning";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import AppButton from "@shared/components/AppButton";
import CircularProgress from "@material-ui/core/CircularProgress";

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
