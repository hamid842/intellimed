import { memo } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import {useNavigate} from "react-router-dom";
import {
  Grid,
  Typography,
  Paper,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  container: {
    height: 300,
    padding: 10,
    backgroundColor: "white",
  },
  divider: {
    color: "grey",
    height: 1,
    width: "100%",
  },
  title: {
    textAlign: "center",
  },
  name: {
    color: colors.darkBlue,
    fontWeight: 700,
    fontStyle: "italic",
  },
  emptyIcon: {
    textAlign: "center",
    margin: 15,
  },
  text: {
    textAlign: "center",
    margin: 10,
  },
  btn: {
    textAlign: "center",
  },
  addBtn: {
    fontSize: 50,
  },
}));

const NoPrescription = ({ selectedPatientFromTopMenu }) => {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
      <Paper elevation={0} className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="subtitle2" className={classes.title}>
              Current Medications of{" "}
              <strong className={classes.name}>
                {selectedPatientFromTopMenu?.firstName}
              </strong>
            </Typography>
          </Grid>
          <Divider className={classes.divider} />

          <Grid item xs={12} sm={12} lg={12} className={classes.emptyIcon}>
            <HourglassEmptyIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} className={classes.text}>
            <Typography variant="body2">
              This patient has no prescription. You can add using button below.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} className={classes.btn}>
            <IconButton onClick={() => navigate("/add-new-prescription")}>
              <Tooltip title={'Add Patient'}>
                <AddCircleIcon color="primary" className={classes.addBtn} />
              </Tooltip>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
  );
};

const mapStateToProps = ({ patients }) => ({
  selectedPatientFromTopMenu: patients.selectedPatientFromTopMenu,
});

export default connect(mapStateToProps, {})(memo(NoPrescription));
