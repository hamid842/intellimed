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

const useStyles = makeStyles(() => ({
  rows: {
    marginTop: 15,
  },
  uploadBtn: {
    width: "310px !important",
    height: 45,
    marginBottom: 3,
    textTransform: "capitalize",
  },
}));

const MedicineInformation = ({
  value,
  onChange,
  onChangeFile,
  onChangeCron,
}) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField
              label="Generic Name"
              name="genericName"
              value={value.genericName}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppSelectField
              label="Type"
              name="medicType"
              options={options}
              value={value.medicType}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField
              label="Usage Description"
              name="usageDescription"
              value={value.usageDescription}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <UploadButton
              name="medicImageUrl"
              title={
                value.medicImageUrl?.name
                  ? value.medicImageUrl?.name
                  : "Upload Medicine Image"
              }
              className={classes.uploadBtn}
              handleChange={onChangeFile}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <Usage value={value} setValue={onChangeCron} />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default MedicineInformation;
