import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { FaPlus } from "react-icons/fa";
import { Langs } from "lang";

interface AccountProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Account: React.FC<AccountProps> = ({ langs, rules }) => {
  return (
    <Antd.Card rootClassName="form-card--border form-card">
      <Antd.Row align="middle" gutter={16}>
        <Antd.Col lg={6}>
          <Components.Fields.Upload.Single listType="picture-card" />
        </Antd.Col>

        <Antd.Col lg={18}>
          <Components.Fields.Input
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.account}
          />

          <Components.Fields.Input
            required
            allowClear
            type="password"
            rules={rules}
            label={langs?.common.form.label.password}
          />
        </Antd.Col>
      </Antd.Row>
    </Antd.Card>
  );
};

export default Account;
