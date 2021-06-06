import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles(() => ({
  container: {
    textAlign: "center",
    margin: 10,
  },
}));

const RadioButton = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="position"
          name="position"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            value="ACTIVE"
            control={<GreenRadio />}
            label="Active"
          />
          <FormControlLabel
            value="All"
            control={<Radio color="primary" />}
            label="All"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default RadioButton;
