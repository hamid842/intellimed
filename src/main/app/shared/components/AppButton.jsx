import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const AppButton = ({
  label,
  type,
  variant,
  onClick,
  color,
  backgroundColor,
  hoverColor,
  icon,
  className,
}) => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: color,
      backgroundColor: backgroundColor,
      "&:hover": {
        backgroundColor: hoverColor,
      },
      borderRadius: 50,
      textTransform: "capitalize",
      fontSize: 25,
    },
  }))(Button);

  return (
    <ColorButton
      type={type}
      variant={variant}
      size="small"
      onClick={onClick}
      startIcon={icon}
      className={className}
    >
      {label}
    </ColorButton>
  );
};

export default AppButton;
