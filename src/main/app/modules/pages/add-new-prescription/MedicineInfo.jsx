import { Grid } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import AppSelectField from "@components/AppSelectField";
import AppTextField from "@components/AppTextField";
import UploadButton from "@shared/components/UploadButton";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import Usage from "./Usage";

const options = [
  { label: "TABLET", value: "TABLET" },
  { label: "LIQUID", value: "LIQUID" },
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

const MedicineInformation = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField label="Brand Name" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField label="Generic Name" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppSelectField label="Type" options={options} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <UploadButton
              title="Upload Medicine Image"
              className={classes.uploadBtn}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <Usage />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField label="Imported Usage" />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default MedicineInformation;
