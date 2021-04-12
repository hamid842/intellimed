import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import image from "@images/images.png";

const useStyles = makeStyles(() => ({
  input: {
    display: "none",
  },
  image: {
    width: "70%",
    borderRadius: 10,
    cursor: "pointer",
  },
}));

const UploadButton = ({ title, handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <h5>Profile Image</h5>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        {/* <Button
          style={{ height: "40px" }}
          variant="outlined"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          {title}
        </Button> */}
        <img src={image} alt="Images" className={classes.image} />
      </label>
    </>
  );
};

export default UploadButton;
