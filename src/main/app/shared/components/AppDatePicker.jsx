import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const AppDatePicker = ({ label, value, onChange }) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
              required
              label={label}
              value={value}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} size={'small'} />}
          />
      </LocalizationProvider>
  );
};

export default AppDatePicker;
