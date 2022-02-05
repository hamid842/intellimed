import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CircularProgress from "@mui/material/CircularProgress";

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
