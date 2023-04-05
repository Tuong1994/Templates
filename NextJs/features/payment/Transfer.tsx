import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";

interface PaymentTransferProps {
  langs: Langs;
}

const PaymentTranfer: React.FC<PaymentTransferProps> = ({ langs }) => {
  const accounts = [
    {
      id: "vib",
      title: "VIB",
      branch: "HCM - Quận Phú Nhuận",
      accNumber: "0157.244.47",
    },
    {
      id: "vietcom",
      title: "VIETCOM",
      branch: "HCM - Quận 11",
      accNumber: "111.112.86.86.666",
    },
  ];

  return (
    <div className="payment-transfer" id="transfer">
      <Antd.Typography className="transfer-title">
        <Antd.Typography.Title level={4}>
          {langs?.payment.transfer.title}
        </Antd.Typography.Title>
        <Antd.Typography.Text>
          {langs?.payment.transfer.content}
        </Antd.Typography.Text>
      </Antd.Typography>

      <Antd.Row gutter={[16, 16]}>
        {accounts.map((a) => (
          <Antd.Col xs={24} md={12} lg={12} key={a.id}>
            <Antd.Card hoverable title={a.title} className="transfer-card">
              <Antd.Space className="card-item">
                <Antd.Typography.Text>
                  {langs?.payment.transfer.holders}:
                </Antd.Typography.Text>
                <Antd.Typography.Text className="font-semibold">
                  CÔNG TY TNHH THƯƠNG MẠI PCZONE
                </Antd.Typography.Text>
              </Antd.Space>

              <Antd.Space className="card-item">
                <Antd.Typography.Text>
                  {langs?.payment.transfer.branch}:
                </Antd.Typography.Text>
                <Antd.Typography.Text className="font-semibold">
                  {a.branch}
                </Antd.Typography.Text>
              </Antd.Space>

              <Antd.Space className="card-item">
                <Antd.Typography.Text>
                  {langs?.payment.transfer.number}:
                </Antd.Typography.Text>
                <Antd.Typography.Text className="font-semibold">
                  {a.accNumber}
                </Antd.Typography.Text>
              </Antd.Space>
            </Antd.Card>
          </Antd.Col>
        ))}
      </Antd.Row>
    </div>
  );
};

export default PaymentTranfer;
