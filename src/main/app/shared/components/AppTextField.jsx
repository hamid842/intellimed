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
}) => {
  return (
    <TextField
      fullWidth
      type={type}
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
