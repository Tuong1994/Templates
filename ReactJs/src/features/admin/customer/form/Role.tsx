import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import useOption from "common/repository/option";

interface RoleProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Role: React.FC<RoleProps> = ({ langs, rules }) => {
  const options = useOption();

  return (
    <Antd.Card
      rootClassName="form-card--border"
      title={langs?.admin.customer.form.permission}
    >
      <Components.Fields.Select
        required
        rules={rules}
        options={options.role}
        label={langs?.common.form.label.role}
      />
    </Antd.Card>
  );
};

export default Role;
