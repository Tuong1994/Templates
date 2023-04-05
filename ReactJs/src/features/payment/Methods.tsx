import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";
import {Link}from "react-router-dom";

interface PaymentMethodsProps {
  langs: Langs;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ langs }) => {
  const methods = [
    {
      id: "transfer",
      title: langs?.payment.methods.transfer.title,
      content: langs?.payment.methods.transfer.content,
    },
    {
      id: "cod",
      title: langs?.payment.methods.cod.title,
      content: langs?.payment.methods.cod.content,
    },
    {
      id: "cash",
      title: langs?.payment.methods.cash.title,
      content: langs?.payment.methods.cash.content,
    },
  ];

  return (
    <div className="payment-methods" id="method">
      <Antd.Typography.Title level={4}>
        {langs?.payment.methods.title}
      </Antd.Typography.Title>

      <Antd.Row gutter={[16, 16]} justify="space-between">
        {methods.map((m) => (
          <Antd.Col xs={24} md={8} lg={8} key={m.id}>
            <Antd.Card hoverable title={m.title} className="methods-card">
              <Antd.Typography.Text className="card-content">
                {m.content}
              </Antd.Typography.Text>

              <Antd.Divider />

              <Link to={`#${m.id}`}>{langs?.payment.banner.link}</Link>
            </Antd.Card>
          </Antd.Col>
        ))}
      </Antd.Row>
    </div>
  );
};

export default PaymentMethods;
