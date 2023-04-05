import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";

interface ShipmentModalProps {
  langs: Langs;
  rules: Antd.FormRule[];
  isShipment: boolean;
  setIsShipment: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShipmentModal: React.FC<ShipmentModalProps> = ({
  langs,
  rules,
  isShipment,
  setIsShipment,
}) => {
  return (
    <Antd.Modal
      closable={false}
      className="admin-ant-modal"
      open={isShipment}
      title={langs?.admin.order.form.deliveryAddress}
      okText={langs?.common.form.action.save}
      cancelText={langs?.common.form.action.cancel}
      onCancel={() => setIsShipment(false)}
    >
      <Antd.Form layout="vertical">
        <Antd.Row gutter={16}>
          <Antd.Col xs={24} lg={12}>
            {/* FIRST NAME */}
            <Components.Fields.Input
              required
              rules={rules}
              name="userFirstName"
              label={langs?.common.form.label.firstName}
            />
          </Antd.Col>

          {/* LAST NAME */}
          <Antd.Col xs={24} lg={12}>
            <Components.Fields.Input
              required
              rules={rules}
              name="userLastName"
              label={langs?.common.form.label.lastName}
            />
          </Antd.Col>
        </Antd.Row>

        <Antd.Row gutter={16}>
          <Antd.Col xs={24} md={12} lg={12}>
            {/* PHONE */}
            <Components.Fields.Input
              required
              rules={rules}
              name="userPhone"
              label={langs?.common.form.label.phone}
            />
          </Antd.Col>

          {/* EMAIL */}
          <Antd.Col xs={24} md={12} lg={12}>
            <Components.Fields.Input
              required
              rules={rules}
              name="userEmail"
              label={langs?.common.form.label.email}
            />
          </Antd.Col>
        </Antd.Row>

        <Antd.Row gutter={16}>
          {/* CITY */}
          <Antd.Col xs={24} md={12} lg={12}>
            <Components.Fields.Select
              required
              rules={rules}
              name="cityCode"
              label={langs?.common.form.label.city}
            />
          </Antd.Col>

          {/* DISTRICT */}
          <Antd.Col xs={24} md={12} lg={12}>
            <Components.Fields.Select
              required
              rules={rules}
              name="districtCode"
              label={langs?.common.form.label.district}
            />
          </Antd.Col>
        </Antd.Row>

        <Antd.Row gutter={16}>
          {/* WARD */}
          <Antd.Col xs={24} md={12} lg={12}>
            <Components.Fields.Select
              required
              rules={rules}
              name="wardCode"
              label={langs?.common.form.label.ward}
            />
          </Antd.Col>

          {/* ADDRESS */}
          <Antd.Col xs={24} md={12} lg={12}>
            <Components.Fields.Input
              required
              rules={rules}
              name="address"
              label={langs?.common.form.label.address}
            />
          </Antd.Col>
        </Antd.Row>
      </Antd.Form>
    </Antd.Modal>
  );
};

export default ShipmentModal;
