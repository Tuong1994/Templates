import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";
import Link from "next/link";

interface FooterFeaturesProps {
  langs: Langs;
}

const FooterFeatures: React.FC<FooterFeaturesProps> = ({ langs }) => {
  const partners = [
    { id: 1, logo: "/images/logo/asus_logo.png" },
    { id: 2, logo: "/images/logo/gigabyte_logo.png" },
    { id: 3, logo: "/images/logo/msi_logo.png" },
    { id: 4, logo: "/images/logo/asrock_logo.png" },
    { id: 5, logo: "/images/logo/kingston_logo.png" },
    { id: 6, logo: "/images/logo/lg_logo.png" },
    { id: 7, logo: "/images/logo/viewsonic_logo.png" },
    { id: 8, logo: "/images/logo/western_logo.png" },
  ];

  return (
    <div className="footer-features">
      <Antd.Row gutter={[20, 20]} justify="space-between">
        <Antd.Col xs={24} lg={5}>
          <Antd.Space.Compact className="w-full">
            <Antd.Input
              placeholder={langs?.common.form.placeholder.email}
              className="features-input"
            />
            <Antd.Button type="primary" className="features-btn">
              {langs?.common.form.action.send}
            </Antd.Button>
          </Antd.Space.Compact>
        </Antd.Col>

        <Antd.Col xs={12} lg={5}>
          <Antd.Typography>
            <Antd.Typography.Title level={5} className="features-title">
              {langs?.footer.quickLink.title}
            </Antd.Typography.Title>
            <Antd.Typography.Paragraph>
              <ul className="features-list">
                <li>
                  <Link href="/" className="list-link">
                    {langs?.footer.quickLink.about}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="list-link">
                    {langs?.footer.quickLink.contact}
                  </Link>
                </li>
              </ul>
            </Antd.Typography.Paragraph>
          </Antd.Typography>
        </Antd.Col>

        <Antd.Col xs={12} lg={5}>
          <Antd.Typography>
            <Antd.Typography.Title level={5} className="features-title">
              {langs?.footer.policy.title}
            </Antd.Typography.Title>
            <Antd.Typography.Paragraph>
              <ul className="features-list">
                <li>
                  <Link href="/" className="list-link">
                    {langs?.footer.policy.payment}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="list-link">
                    {langs?.footer.policy.warranty}
                  </Link>
                </li>
              </ul>
            </Antd.Typography.Paragraph>
          </Antd.Typography>
        </Antd.Col>

        <Antd.Col xs={24} lg={9}>
          <Antd.Typography>
            <Antd.Typography.Title level={5} className="features-title">
              {langs?.footer.partners.title}
            </Antd.Typography.Title>

            <Antd.Row justify="space-between" gutter={[5, 5]}>
              {partners.map((p) => (
                <Antd.Col xs={3} lg={5} key={p.id}>
                  <img className="features-logo" src={p.logo} alt={p.logo} />
                </Antd.Col>
              ))}
            </Antd.Row>
          </Antd.Typography>
        </Antd.Col>
      </Antd.Row>

      <Antd.Divider className="features-divider" />

      <Antd.Typography.Text className="block text-white text-center">
        Copyright © 2022 PCZone | All rights reserved |{" "}
        {langs?.footer.certification.content}
      </Antd.Typography.Text>
    </div>
  );
};

export default FooterFeatures;
