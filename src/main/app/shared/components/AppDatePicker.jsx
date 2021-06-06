import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const AppDatePicker = ({ label, value, onChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        required
        label={label}
        error={false}
        size="small"
        helperText={false}
        id="date-picker-dialog"
        inputVariant="outlined"
        format="yyyy-MM-dd"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default AppDatePicker;
