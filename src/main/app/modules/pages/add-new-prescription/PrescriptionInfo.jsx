import { Grid } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import AppDatePicker from "@components/AppDatePicker";
import AppSelectField from "@components/AppSelectField";
import AppTextField from "@components/AppTextField";
import UploadButton from "@shared/components/UploadButton";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";

const options = [
  { label: "ACTIVE", value: "ACTIVE" },
  { label: "INACTIVE", value: "INACTIVE" },
];

const useStyles = makeStyles((theme) => ({
  rows: {
    marginTop: 15,
  },
  uploadBtn: {
    width: "320px !important",
    height: 45,
    marginBottom: 3,
    textTransform: "capitalize",
  },
}));

const PrescriptionInformation = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppDatePicker label="Promised" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField label="Prescription Code" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField label="Barcode" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppDatePicker label="Refill Time" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppSelectField label="Status" options={options} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <UploadButton
              title="Upload Prescription Image"
              className={classes.uploadBtn}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default PrescriptionInformation;
