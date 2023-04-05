import React from "react";
import * as Antd from "antd";

interface StepsProps {
  items: Antd.StepProps[];
  rootClass?: string;
}

const Steps: React.FC<StepsProps> = ({ items, rootClass = "" }) => {
  return (
    <div className={`steps ${rootClass}`}>
      <Antd.Steps items={items} />
    </div>
  );
};

export default Steps;
