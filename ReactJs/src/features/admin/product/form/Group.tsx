import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { Langs } from "lang";

interface GroupProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Group: React.FC<GroupProps> = ({ langs, rules }) => {
  return (
    <Antd.Card
      title={langs?.admin.product.form.group}
      rootClassName="form-card--border form-card"
    >
      <Components.Fields.Select
        required
        rules={rules}
        label={langs?.common.form.label.category}
      />

      <Components.Fields.Select
        required
        rules={rules}
        label={langs?.common.form.label.producer}
      />
    </Antd.Card>
  );
};

export default Group;
