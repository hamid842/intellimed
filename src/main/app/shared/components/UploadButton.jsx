import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  input: {
    width: "0 !important",
    display: "none",
    height: 0,
  },
}));

const UploadButton = ({ title, name, className, handleChange, loading }) => {
  const classes = useStyles();
  return (
    <>
      <input
        name={name}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          fullWidth
          variant="outlined"
          component="span"
          startIcon={
            loading ? (
              <CircularProgress size={15} color="inherit" />
            ) : (
              <CloudUploadIcon />
            )
          }
          className={className}
        >
          {title}
        </Button>
      </label>
    </>
  );
};

export default UploadButton;
