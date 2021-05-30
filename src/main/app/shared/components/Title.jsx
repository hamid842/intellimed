import { memo } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    borderBottom: "1px solid black",
  },
}));

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.title}>
      {title}
    </Typography>
  );
};

export default memo(Title);
