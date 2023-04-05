import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";

interface FooterInfoProps {
  langs: Langs;
}

const FooterInfo: React.FC<FooterInfoProps> = ({ langs }) => {
  return (
    <Antd.Row gutter={4} justify="space-between" className="footer-info">
      <Antd.Col xs={24} lg={10}>
        <Antd.Typography>
          <Antd.Typography.Title
            level={5}
            className="border-b border-b-slate-900"
          >
            {langs?.footer.contact.title}
          </Antd.Typography.Title>
          <Antd.Typography.Paragraph>
            <ul>
              <li>
                {langs?.common.form.label.phone}: {langs?.footer.contact.phone}
              </li>
              <li>
                {langs?.common.form.label.email}: {langs?.footer.contact.email}
              </li>
            </ul>
          </Antd.Typography.Paragraph>
        </Antd.Typography>
      </Antd.Col>

      <Antd.Col xs={24} lg={13}>
        <Antd.Typography>
          <Antd.Typography.Title
            level={5}
            className="border-b border-b-slate-900"
          >
            {langs?.footer.store.title}
          </Antd.Typography.Title>
          <Antd.Typography.Paragraph>
            <ul>
              <li>
                {langs?.common.form.label.branch} 1:{" "}
                {langs?.footer.store.addr_1}
              </li>
              <li>
                {langs?.common.form.label.branch} 2:{" "}
                {langs?.footer.store.addr_2}
              </li>
            </ul>
          </Antd.Typography.Paragraph>
        </Antd.Typography>
      </Antd.Col>
    </Antd.Row>
  );
};

export default FooterInfo;
