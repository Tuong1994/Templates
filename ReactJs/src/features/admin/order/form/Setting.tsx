import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import { FaPen } from "react-icons/fa";
import useOption from "common/repository/option";

interface SettingProps {
  langs: Langs;
  rules: Antd.FormRule[];
  setIsShipment: React.Dispatch<React.SetStateAction<boolean>>;
}

const Setting: React.FC<SettingProps> = ({ langs, rules, setIsShipment }) => {
  const options = useOption();

  return (
    <Antd.Card
      title={langs?.admin.order.form.setting}
      className="form-card form-card--border"
    >
      <Components.Fields.Select
        required
        rules={rules}
        options={options.orderStatus}
        label={langs?.common.form.label.status}
      />

      <Components.Fields.Select
        required
        rules={rules}
        options={options.paymentMethod}
        label={langs?.common.form.label.paymentMethods}
      />

      <Antd.Divider orientation="left" orientationMargin={0}>
        <Antd.Space>
          <span>{langs?.admin.order.form.deliveryAddress}</span>
          <FaPen
            size={14}
            className="cursor-pointer"
            color="#1e87e9"
            onClick={() => setIsShipment(true)}
          />
        </Antd.Space>
      </Antd.Divider>
    </Antd.Card>
  );
};

export default Setting;
