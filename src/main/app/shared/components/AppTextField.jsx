import React from "react";
import TextField from "@material-ui/core/TextField";

const AppTextField = ({ required, name, label, onChange, value, type }) => {
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
    />
  );
};

export default AppTextField;
