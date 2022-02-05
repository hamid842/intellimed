import colors from "@config/colors";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {useNavigate} from 'react-router-dom'
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AddCircleIcon from "@mui/icons-material/AddCircle";


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.mainGrey,
    padding: 10,
    marginTop: 20,
    margin: "auto",
    borderRadius: 10,
    textAlign: "center",
    width: 500,
  },
}));

const NoPatient = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} lg={12}>
        <HourglassEmptyIcon color="primary" fontSize="large" />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle1">
          Have to define a patient first. You can add using button below.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <IconButton onClick={() => navigate("/patient")}>
          <Tooltip title="Add Patient">
            <AddCircleIcon
              color="primary"
              fontSize="large"
            />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoPatient;
