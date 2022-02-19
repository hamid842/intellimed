import React from "react";
import {Button} from "@mui/material";
import {withStyles} from "@mui/styles";

const AppButton = ({
                       label,
                       type,
                       variant,
                       onClick,
                       color,
                       backgroundColor,
                       hoverColor,
                       startIcon,
                       endIcon,
                       className,
                       width,
                       disabled,
                   }) => {
    const ColorButton = withStyles({
        root: {
            width,
            color,
            borderColor: color,
            backgroundColor: backgroundColor,
            "&:hover": {
                backgroundColor: hoverColor,
            },
            borderRadius: '50px !important',
            textTransform: "capitalize",
            fontSize: 16,
        },
    })(Button);

    return (
        <ColorButton
            type={type}
            variant={variant}
            size="small"
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
            className={className}
            disabled={disabled}
        >
            {label}
        </ColorButton>
    );
};

export default AppButton;
