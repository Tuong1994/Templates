import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";
import {
  FaPen,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaTransgender,
  FaMapMarker,
  FaCalendar,
} from "react-icons/fa";

interface CustomerInfoProps {
  langs: Langs;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ langs, setIsOpen }) => {
  return (
    <Antd.Card className="content-info">
      <Antd.Row gutter={16}>
        <Antd.Col lg={8}>
          <Antd.Avatar
            size={{ xs: 40, md: 50, lg: 60, xl: 80 }}
            src="/images/default-avatar.png"
          />
        </Antd.Col>
        <Antd.Col lg={16}>
          <p className="m-0 text-white">{langs?.customer.greeting}</p>
          <Antd.Space size="large" align="center">
            <Antd.Typography.Title className="info-name" level={3}>
              Account
            </Antd.Typography.Title>
            <Antd.Button type="link" onClick={() => setIsOpen(true)}>
              <FaPen />
            </Antd.Button>
          </Antd.Space>
        </Antd.Col>
      </Antd.Row>

      <Antd.Divider />

      <Antd.Typography.Title level={5} className="info-subtitle">
        {langs?.customer.contactInfo}
      </Antd.Typography.Title>

      <Antd.Space className="w-full text-white">
        <FaUser />
        <Antd.Typography.Text className="info-text">Name</Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaPhone />
        <Antd.Typography.Text className="info-text">
          0793229971
        </Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaEnvelope />
        <Antd.Typography.Text className="info-text">
          user@gmail.com
        </Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaTransgender />
        <Antd.Typography.Text className="info-text">Male</Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaCalendar />
        <Antd.Typography.Text className="info-text">
          28/11/1994
        </Antd.Typography.Text>
      </Antd.Space>

      <Antd.Divider />

      <Antd.Typography.Title level={5} className="info-subtitle">
        {langs?.customer.address}
      </Antd.Typography.Title>

      <Antd.Space className="w-full text-white">
        <FaMapMarker />
        <Antd.Typography.Text className="info-text">HCMC</Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaMapMarker />
        <Antd.Typography.Text className="info-text">
          District 11
        </Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaMapMarker />
        <Antd.Typography.Text className="info-text">
          Ward 14
        </Antd.Typography.Text>
      </Antd.Space>

      <Antd.Space className="w-full text-white">
        <FaMapMarker />
        <Antd.Typography.Text className="info-text">
          79/24/13 Au Co Str.
        </Antd.Typography.Text>
      </Antd.Space>
    </Antd.Card>
  );
};

export default CustomerInfo;
