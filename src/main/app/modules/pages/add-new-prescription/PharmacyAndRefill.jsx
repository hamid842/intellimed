import { Grid } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import AppTextField from "@components/AppTextField";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import AppDatePicker from "@shared/components/AppDatePicker";

const useStyles = makeStyles((theme) => ({
  rows: {
    marginTop: 15,
  },
}));

const MedicineInformation = ({ value, onChange, onChangeDate }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppTextField
              label="Pharmacy"
              name="pharmacy"
              value={value.pharmacy}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
            <AppDatePicker
              label="Refill"
              name="refillTime"
              value={value.refillTime}
              onChange={(e) => onChangeDate(e, "refillTime")}
            />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default MedicineInformation;
