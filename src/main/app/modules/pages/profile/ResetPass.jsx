import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import AppButton from "@components/AppButton";

const useStyles = makeStyles(() => ({
  titles: {
    borderBottom: "1px solid black",
  },
}));

const ResetPass = ({ setShowResetPass }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} className="mt-1">
          <Typography variant="h5" className={classes.titles}>
            Reset Password
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} lg={6} className="text-center">
          <AppButton
            label="Cancel"
            variant="outlined"
            color="red"
            icon={<CloseIcon />}
            onClick={() => setShowResetPass(false)}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={6} className="text-center">
          <AppButton
            label="Save"
            variant="outlined"
            color="green"
            icon={<CheckIcon />}
            width={85}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPass;
