import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {useNavigate} from 'react-router-dom';
import AddBoxIcon from "@mui/icons-material/AddBox";

import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.mainGrey,
    marginTop: 20,
  },
  btnContainer: {
    textAlign: "end",
  },
}));

const NoPrescription = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <Grid
      container
      className={classes.container}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={8} sm={8} lg={8}>
        <Typography>
          No Prescription yet. To add a new one please press "+" button
        </Typography>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} className={classes.btnContainer}>
        <IconButton onClick={() => navigate("/add-new-prescription")}>
          <Tooltip title="Add Prescription">
            <AddBoxIcon color="primary" fontSize="large" />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoPrescription;
