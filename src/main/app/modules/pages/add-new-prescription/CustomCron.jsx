import React, { useState } from "react";
import { ReCron, Tab } from "@sbzen/re-cron";
import "./style.scss";

const CustomCron = () => {
  const [cronValue, setCronValue] = useState("");
  return (
    <>
      <div className="py-2">
        <b>Cron Value: </b>
        <code>{cronValue}</code>
      </div>
      <ReCron
        tabs={[Tab.MINUTES, Tab.HOURS, Tab.DAY, Tab.MONTH]}
        value={cronValue}
        onChange={(value) => setCronValue(value)}
      />
    </>
  );
};
export default CustomCron;