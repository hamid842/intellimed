import { memo, useState } from "react";

import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const PasswordField = ({ label, value, onChange }) => {
  const [showPass, setShowPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        name="password"
        variant="outlined"
        size="small"
        required={true}
        type={showPass ? "text" : "password"}
        style={{ width: "100%" }}
        value={value}
        label={label}
        onChange={onChange}
        InputProps={{
          fullWidth: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default memo(PasswordField);
