import { Grid } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import AppDatePicker from "@components/AppDatePicker";
import AppTextField from "@components/AppTextField";
import UploadButton from "@shared/components/UploadButton";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";

const useStyles = makeStyles((theme) => ({
  rows: {
    marginTop: 15,
  },
  uploadBtn: {
    height: 40,
    textTransform: "capitalize",
  },
}));

const PrescriptionInformation = ({
  value,
  image,
  loading,
  onChange,
  onChangeDate,
  onChangeFile,
}) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <AppDatePicker
              label="Promised"
              name="issueDate"
              value={value.issueDate}
              onChange={(e) => onChangeDate(e, "issueDate")}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <AppTextField
              label="Barcode"
              name="barCode"
              value={value.barCode}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <UploadButton
              name="prescriptionImageUrl"
              loading={loading}
              title={image?.name ? image?.name : "Upload Prescription Image"}
              className={classes.uploadBtn}
              handleChange={(e) => onChangeFile(e, "prescription")}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default PrescriptionInformation;
