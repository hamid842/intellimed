import { memo } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

const AppSelectField = ({ options, value, name, label, onChange }) => {
  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        required
        name={name}
        id="demo-simple-select-outlined-label"
        value={value}
        onChange={onChange}
        InputLabel={label}
      >
        {options?.map((item, i) => {
          return (
            <MenuItem key={i} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default memo(AppSelectField);
