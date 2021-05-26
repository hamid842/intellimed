import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles(() => ({
  input: {
    width: 0,
    display: "none",
  },
}));

const UploadButton = ({ title, handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          fullWidth
          style={{ height: 45 }}
          variant="outlined"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          {title}
        </Button>
      </label>
    </>
  );
};

export default UploadButton;
