import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";

interface WarrantyConditionProps {
  langs: Langs;
}

const WarrantyCondition: React.FC<WarrantyConditionProps> = ({ langs }) => {
  return (
    <div className="warranty-condition">
      <Antd.Typography>
        <Antd.Typography.Title level={4} className="warranty-title">
          {langs?.warranty.condition.title}
        </Antd.Typography.Title>

        <Antd.Typography.Title level={5}>
          {langs?.warranty.condition.enough.title}
        </Antd.Typography.Title>

        <Antd.List>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.enough.list_1}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.enough.list_2}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.enough.list_3}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.enough.list_4}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.enough.list_5}
          </Antd.List.Item>
        </Antd.List>

        <Antd.Divider />

        <Antd.Typography.Title level={5}>
          {langs?.warranty.condition.notEnough.title}
        </Antd.Typography.Title>

        <Antd.List>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_1}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_2}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_3}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_4}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_5}
          </Antd.List.Item>
          <Antd.List.Item className="condition-list-item">
            {langs?.warranty.condition.notEnough.list_6}
          </Antd.List.Item>
        </Antd.List>
      </Antd.Typography>
    </div>
  );
};

export default WarrantyCondition;
