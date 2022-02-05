import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  footer: {
    width: "100%",
    fontSize: 16,
    display: "flex",
    placeContent: "center",
    background: "transparent",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      All rights reserved @Intellimed {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
