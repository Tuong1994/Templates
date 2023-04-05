import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";

interface PaymentCodProps {
  langs: Langs;
}

const PaymentCod: React.FC<PaymentCodProps> = ({ langs }) => {
  return (
    <div className="payment-cod">
      <Antd.Row align="middle">
        <Antd.Col lg={18}>
          <Antd.Typography.Title level={4}>
            {langs?.payment.cod.title}
          </Antd.Typography.Title>
          <Antd.Card>
            <Antd.Typography.Text>
              {langs?.payment.cod.content}
            </Antd.Typography.Text>
          </Antd.Card>
        </Antd.Col>
        <Antd.Col xs={0} lg={6}>
          <Components.Image src="/images/payment/delivery.png" />
        </Antd.Col>
      </Antd.Row>
    </div>
  );
};

export default PaymentCod;
