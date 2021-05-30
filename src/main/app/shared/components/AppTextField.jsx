import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const AppTextField = ({
  required,
  name,
  label,
  onChange,
  value,
  type,
  endAdornment,
  error,
}) => {
  return (
    <TextField
      fullWidth
      type={type}
      error={error}
      required={required}
      name={name}
      label={label}
      value={value}
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
