import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";

interface WarrantyBannerProps {
  langs: Langs;
}

const WarrantyBanner: React.FC<WarrantyBannerProps> = ({ langs }) => {
  return (
    <Antd.Card className="warranty-banner">
      <Antd.Row className="banner-content">
        <Antd.Col xs={24} lg={16}>
          <Antd.Typography>
            <Antd.Typography.Title level={3} className="content-title">
              {langs?.warranty.banner.title}
            </Antd.Typography.Title>
            <Antd.Typography.Paragraph className="content-text">
              {langs?.warranty.banner.content_1}
            </Antd.Typography.Paragraph>
            <Antd.Typography.Paragraph className="content-text">
              {langs?.warranty.banner.content_2}
            </Antd.Typography.Paragraph>
          </Antd.Typography>
        </Antd.Col>

        <Antd.Col xs={0} lg={8}>
          <Components.Image src="/images/warranty/fix.png" />
        </Antd.Col>
      </Antd.Row>
    </Antd.Card>
  );
};

export default WarrantyBanner;
