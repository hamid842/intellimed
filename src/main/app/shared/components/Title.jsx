import { memo } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

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
