import React from "react";
import * as Antd from "antd";

interface SpecProps {}

const Spec: React.FC<SpecProps> = (props) => {
  return (
    <Antd.Card className="tabs-spec">
      <Antd.Descriptions
        className="spec-inner"
        bordered
        labelStyle={{ fontWeight: 700 }}
      >
        <Antd.Descriptions.Item label="Title" span={24}>
          Content
        </Antd.Descriptions.Item>
        <Antd.Descriptions.Item label="Title" span={24}>
          Content
        </Antd.Descriptions.Item>
        <Antd.Descriptions.Item label="Title" span={24}>
          Content
        </Antd.Descriptions.Item>
        <Antd.Descriptions.Item label="Title" span={24}>
          Content
        </Antd.Descriptions.Item>
        <Antd.Descriptions.Item label="Title" span={24}>
          Content
        </Antd.Descriptions.Item>
      </Antd.Descriptions>
    </Antd.Card>
  );
};

export default Spec;
