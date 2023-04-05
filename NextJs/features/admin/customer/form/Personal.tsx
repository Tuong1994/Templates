import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";

interface PersonalProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Personal: React.FC<PersonalProps> = ({
  langs,
  rules,
}) => {
  return (
    <Antd.Card rootClassName="form-card--border" title={langs?.admin.customer.form.personal}>
      <Antd.Row gutter={[16, 16]}>
        <Antd.Col lg={12}>
          <Components.Fields.Input
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.firstName}
          />
        </Antd.Col>
        <Antd.Col lg={12}>
          <Components.Fields.Input
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.lastName}
          />
        </Antd.Col>
      </Antd.Row>

      <Antd.Row gutter={[16, 16]}>
        <Antd.Col lg={12}>
          <Components.Fields.Input
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.phone}
          />
        </Antd.Col>
        <Antd.Col lg={12}>
          <Components.Fields.Input
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.email}
          />
        </Antd.Col>
      </Antd.Row>

      <Antd.Row gutter={[16, 16]}>
        <Antd.Col lg={12}>
          <Components.Fields.Select
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.gender}
          />
        </Antd.Col>
        <Antd.Col lg={12}>
          <Components.Fields.Date
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.birthday}
          />
        </Antd.Col>
      </Antd.Row>
    </Antd.Card>
  );
};

export default Personal;
