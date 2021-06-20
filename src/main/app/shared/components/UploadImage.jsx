import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CircularProgress from "@material-ui/core/CircularProgress";

import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  input: {
    width: "0 !important",
    display: "none",
    height: 0,
  },
  icons: {
    color: colors.white,
  },
}));

const UploadButton = ({ loading, onChange }) => {
  const classes = useStyles();
  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={onChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Tooltip title="Upload Image">
              <PhotoCamera className={classes.icons} />
            </Tooltip>
          )}
        </IconButton>
      </label>
    </>
  );
};

export default UploadButton;
