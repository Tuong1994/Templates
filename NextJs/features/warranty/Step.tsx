import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";

interface WarrantyStepProps {
  langs: Langs;
}

const WarrantyStep: React.FC<WarrantyStepProps> = ({ langs }) => {
  return (
    <div className="warranty-step">
      <Antd.Typography>
        <Antd.Typography.Title level={4} className="warranty-title">
          {langs?.warranty.step.title}
        </Antd.Typography.Title>

        <Antd.Typography.Title level={5}>
          {langs?.warranty.step.step_1.title}
        </Antd.Typography.Title>
        <Antd.List bordered={false}>
          <Antd.List.Item className="step-list-item">
            {langs?.warranty.step.step_1.list_1}
          </Antd.List.Item>
          <Antd.List.Item className="step-list-item">
            {langs?.warranty.step.step_1.list_2}
          </Antd.List.Item>
          <Antd.List.Item className="step-list-item">
            {langs?.warranty.step.step_1.list_3}
          </Antd.List.Item>
        </Antd.List>

        <Antd.Divider />

        <Antd.Typography.Title level={5}>
          {langs?.warranty.step.step_2.title}
        </Antd.Typography.Title>
        <Antd.List bordered={false}>
          <Antd.List.Item className="step-list-item">
            {langs?.warranty.step.step_2.address_1}
          </Antd.List.Item>
          <Antd.List.Item className="step-list-item">
            {langs?.warranty.step.step_2.address_2}
          </Antd.List.Item>
        </Antd.List>
        <Antd.Typography.Paragraph className="step-note">
          {langs?.warranty.step.note}
        </Antd.Typography.Paragraph>

        <Antd.Divider />

        <Antd.Typography.Title level={5}>
          {langs?.warranty.step.step_3.title}
        </Antd.Typography.Title>
        <Antd.Typography.Paragraph className="step-content">
          {langs?.warranty.step.step_3.content}
        </Antd.Typography.Paragraph>
      </Antd.Typography>
    </div>
  );
};

export default WarrantyStep;
