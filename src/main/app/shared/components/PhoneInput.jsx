import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

const PhoneNumber = ({
  name,
  label,
  value,
  onChange,
  disableDropdown,
  inputStyle,
  inputProps,
  disabled,
  buttonStyle,
  height,
}) => {
  return (
    <>
      <PhoneInput
        autoFormat
        disabled={disabled}
        disableDropdown={disableDropdown}
        specialLabel={label}
        name={name}
        inputProps={{
          required: true,
          name,
          ...inputProps,
        }}
        containerStyle={{
          backgroundColor: "transparent",
        }}
        inputStyle={{
          width: "100%",
          height: height,
          backgroundColor: "transparent",
          ...inputStyle,
        }}
        buttonStyle={buttonStyle}
        country={"us"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PhoneNumber;
