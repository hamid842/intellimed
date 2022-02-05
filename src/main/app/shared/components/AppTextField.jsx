import { TextField, InputAdornment } from "@mui/material";

const AppTextField = ({
  required,
  name,
  label,
  onChange,
  value,
  type,
  endAdornment,
  error,
  multiline,
}) => {
  return (
    <TextField
      fullWidth
      multiline={multiline}
      type={type}
      error={error}
      required={required}
      name={name}
      label={label}
      value={value || ""}
      onChange={onChange}
      size="small"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">{endAdornment || ""}</InputAdornment>
        ),
      }}
    />
  );
};

export default AppTextField;
