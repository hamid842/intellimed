import { memo, useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

import PatientGeneralInfo from "./PatientGeneralInfo";
import AppButton from "@components/AppButton";
import CurrentPatient from "./CurrentPatient";
import colors from "@config/colors";
import { getPatients } from "@shared/constants/get-patients";

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
}));

const Patient = (props) => {
  const classes = useStyles();
  const { account } = props;
  const [patientInfo, setPatientInfo] = useState();
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleChangeDate = (date) => {
    setPatientInfo({ ...patientInfo, birthDate: date });
  };

  const handleChangePhone = (name, value) => {
    setPatientInfo({ ...patientInfo, [name]: "+" + value });
  };

  useEffect(() => {
    const fetchPatients = async () => {
      setPatientInfo(await getPatients(account?.id));
    };
    fetchPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO remove this when api is repaired
  const patientArray = [];
  patientArray.push(patientInfo);

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
              icon={<AddIcon />}
              onClick={() => setAddMode(!addMode)}
            />
          </Grid>
        )}
      </Grid>

      <Grid container spacing={1} className={classes.infos}>
        {editMode || addMode ? (
          <Grid item xs={12} sm={12} lg={12}>
            <PatientGeneralInfo
              data={patientInfo}
              editMode={editMode}
              setEditMode={setEditMode}
              addMode={addMode}
              setAddMode={setAddMode}
              // onSubmit={handleCreatePatientInfo}
              onChange={handleChange}
              handleChangeDate={handleChangeDate}
              handleChangePhone={handleChangePhone}
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} lg={12}>
            {patientArray?.length > 0 ? (
              <CurrentPatient
                patientInfo={patientInfo}
                editMode={editMode}
                setEditMode={setEditMode}
              />
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

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(Patient));
