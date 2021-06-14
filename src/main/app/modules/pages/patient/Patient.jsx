import { memo, useState } from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

import PatientGeneralInfo from "./PatientGeneralInfo";
import AppButton from "@components/AppButton";
import CurrentPatient from "./CurrentPatient";
import colors from "@config/colors";
import DeletePatientDialog from "./DeletePatientDialog";
import { getAccountPatients } from "@shared/reducers/patients/patient-reducer";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  saveBtn: {
    textAlign: "end",
  },
  header: {
    borderBottom: "1px solid grey",
    paddingBottom: 10,
  },
  infos: {
    marginTop: 10,
  },
  noPatient: {
    backgroundColor: colors.mainGrey,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    textAlign: "center",
  },
  divider: {
    height: 1.5,
    margin: 10,
  },
}));

// Endpoints
const deletePatientApi = process.env.REACT_APP_CREATE_PATIENT_INFOS;

const Patient = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { patients, account } = props;
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickAdd = () => {
    setAddMode(true);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeletePatient = async (id) => {
    setLoading(true);
    await axios
      .delete(`${deletePatientApi}/${id}`)
      .then((res) => {
        if (res.status === 200 || 201) {
          setLoading(false);
          setOpenDeleteDialog(false);
          enqueueSnackbar("Patient deleted successfully", {
            variant: "success",
          });
          props.getAccountPatients(account?.id);
        }
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Something went wrong!", { variant: "error" });
      });
  };

  return (
    <Paper className={classes.container}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="h5" className={classes.title}>
            Patient(s)
          </Typography>
        </Grid>
        {!editMode && (
          <Grid item>
            <AppButton
              label="Add New"
              variant="outlined"
              color={colors.mainBlue}
              startIcon={<AddIcon />}
              onClick={handleClickAdd}
            />
          </Grid>
        )}
      </Grid>

      <Grid container spacing={1} className={classes.infos}>
        {editMode || addMode ? (
          <Grid item xs={12} sm={12} lg={12}>
            <PatientGeneralInfo
              editMode={editMode}
              setEditMode={setEditMode}
              addMode={addMode}
              setAddMode={setAddMode}
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} lg={12}>
            {patients?.length > 0 ? (
              patients.map((item, i) => {
                return (
                  <div key={i}>
                    <CurrentPatient
                      patientInfo={item}
                      editMode={editMode}
                      setEditMode={setEditMode}
                      onClick={handleOpenDeleteDialog}
                    />
                    <DeletePatientDialog
                      patientInfo={item}
                      loading={loading}
                      open={openDeleteDialog}
                      onClose={handleCloseDeleteDialog}
                      onDelete={() => handleDeletePatient(item.id)}
                    />
                    {i !== patients?.length - 1 && (
                      <Divider className={classes.divider} />
                    )}
                  </div>
                );
              })
            ) : (
              <div className={classes.noPatient}>
                No patient added yet. You can do this with "Add New" button
                above.
              </div>
            )}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

const mapStateToProps = ({ login, patients }) => ({
  account: login.account,
  patients: patients.patients,
});

export default connect(mapStateToProps, { getAccountPatients })(memo(Patient));
