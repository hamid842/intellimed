import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";

const useStyles = makeStyles(() => ({
  header: {
    width: 400,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  promised: {
    textAlign: "right",
  },
  yellowPaper: {
    padding: 10,
    backgroundColor: "#c1a535",
  },
  infoContainer: {
    padding: 4,
    width: "100%",
    height: 400,
    border: "2px solid grey",
  },
  topInfo: {
    height: 200,
    padding: 4,
    borderBottom: "2px solid grey",
  },
}));

const PrescriptionItem = ({ prescription }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12}>
        <Grid container spacing={2}>
          {/* Prescription Information */}
          <Grid item xs={12} sm={6} lg={6}>
            <Typography>
              <strong>Prescription Information</strong>
            </Typography>
            <Box className={classes.infoContainer}>
              <Grid container>
                <Grid item xs={12} sm={12} lg={12} className={classes.topInfo}>
                  <Typography>
                    <strong>{prescription?.prescriptionCode}</strong>
                  </Typography>
                  <Typography>
                    <strong>{prescription?.medicType}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {prescription?.usageDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Typography color="secondary">
                    <strong>Important Information</strong>
                  </Typography>
                  <Typography variant="body2">
                    {prescription?.importantInfo}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Receipt & Refill Information */}
          <Grid item xs={12} sm={6} lg={6}>
            <Typography>
              <strong>Pharmacy & Refill Information</strong>
            </Typography>
            <Box className={classes.infoContainer}>
              <Grid container>
                <Grid item xs={12} sm={12} lg={12} className={classes.topInfo}>
                  <Typography>
                    <strong>Refill Time</strong>
                  </Typography>
                  <Typography variant="body2">
                    {dayjs(prescription?.refillTime).format("YYYY-MM-DD HH:mm")}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Typography>
                    <strong>Pharmacy</strong>
                  </Typography>
                  <Typography variant="body2">
                    {prescription?.pharmacy}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrescriptionItem;
