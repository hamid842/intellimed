import React, { useEffect, useState } from "react";
import Cron from "react-js-cron";


import "./style.css";


const CustomCron = () => {

  const defaultValue = '*/7 */2 */3 * *'
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <Cron value={value} setValue={setValue} />
      <div>
        <span style={{ fontSize: 12 }}>
          The first value will always be used as default value
          </span>
      </div>
    </div>
  )
}

export default CustomCron;