import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

const PhoneNumber = ({ name, label, value, onChange }) => {
  return (
    <>
      <PhoneInput
        autoFormat
        specialLabel={label}
        name={name}
        inputProps={{
          required: true,
          name,
        }}
        containerStyle={{
          backgroundColor: "transparent",
        }}
        inputStyle={{
          width: "100%",
          height: 45,
          backgroundColor: "transparent",
          // borderColor: "#2e3191",
        }}
        country={"us"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PhoneNumber;
