import React,{useState} from 'react'
import {TextField,InputAdornment,IconButton} from '@material-ui/core'
import {Visibility,VisibilityOff} from '@material-ui/icons'
import {withStyles} from '@material-ui/styles'
import colors from '../../config/colors'

const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: colors.darkBlue,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: colors.darkBlue,
      },
    },
  })(TextField);

const PasswordField = ({value,onChange}) => {
    const [showPass , setShowPass] = useState(false)

    const handleClickShowPassword = () => {
        setShowPass(true);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <>
          <CssTextField
                  required
                  name="password"
                  type={showPass ? "text" : "password"}
                  value={value}
                  id="custom-css-standard-password-input"
                  label="Password"
                  onChange={onChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPass ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                /> 
        </>
    )
}

export default PasswordField
