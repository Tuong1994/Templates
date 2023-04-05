import React from "react";
import * as Antd from "antd";

interface TabsProps {
  items: Antd.TabsProps["items"];
  className?: string;
  centered?: boolean;
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  className = "",
  centered,
  defaultActiveKey,
}) => {
  return (
    <Antd.Tabs
      className={`tabs ${className}`}
      items={items}
      defaultActiveKey={defaultActiveKey}
      centered={centered}
    />
  );
};

export default Tabs;
