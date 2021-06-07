import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popper, Button, Fade, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import Corn from "react-js-cron";

import colors from "@config/colors";
import AppButton from "@shared/components/AppButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 10,
    padding: theme.spacing(2),
    backgroundColor: colors.mediumGrey,
  },
  btn: {
    textTransform: "capitalize",
    width: "100%",
    height: 45,
    marginBottom: 3,
  },
}));

const Usage = ({ value, setValue, onError }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  return (
    <div>
      <Button
        variant="outlined"
        aria-describedby={id}
        onClick={handleClick}
        className={classes.btn}
      >
        Click to import usage
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={500}>
            <div className={classes.paper}>
              <Corn
                value={value}
                setValue={setValue}
                onError={onError}
                clearButton={false}
              />
              <Grid container alignItems="center" className="mt-2">
                <Grid item xs={6} sm={6} lg={6} className="text-center">
                  <AppButton
                    color="red"
                    variant="outlined"
                    label={<CloseIcon fontSize="small" />}
                    onClick={handleClick}
                  />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} className="text-center">
                  <AppButton
                    variant="outlined"
                    color="green"
                    label={<CheckIcon fontSize="small" />}
                    onClick={handleClick}
                  />
                </Grid>
              </Grid>
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Usage;
