import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";

interface WarrantyReturnsProps {
  langs: Langs;
}

const WarrantyReturns: React.FC<WarrantyReturnsProps> = ({ langs }) => {
  return (
    <div className="warranty-returns">
      <Antd.Typography>
        <Antd.Typography.Title level={4} className="warranty-title">
          {langs?.warranty.returns.title}
        </Antd.Typography.Title>

        <Antd.Typography.Paragraph className="font-semibold">
          {langs?.warranty.returns.content}
        </Antd.Typography.Paragraph>
      </Antd.Typography>

      <Antd.Typography.Title level={5}>
        {langs?.warranty.returns.fullRefund.title}
      </Antd.Typography.Title>
      <Antd.List>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.fullRefund.list_1}
        </Antd.List.Item>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.fullRefund.list_2}
        </Antd.List.Item>
      </Antd.List>

      <Antd.Divider />

      <Antd.Typography.Title level={5}>
        {langs?.warranty.returns.charge.title}
      </Antd.Typography.Title>
      <Antd.List>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.charge.list_1}
        </Antd.List.Item>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.charge.list_2}
        </Antd.List.Item>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.charge.list_3}
        </Antd.List.Item>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.charge.list_4}
        </Antd.List.Item>
        <Antd.List.Item className="returns-list-item">
          {langs?.warranty.returns.charge.list_5}
        </Antd.List.Item>
      </Antd.List>

      <Antd.Divider />

      <Antd.Typography.Paragraph className="font-semibold">
        {langs?.warranty.returns.note}
      </Antd.Typography.Paragraph>
    </div>
  );
};

export default WarrantyReturns;
