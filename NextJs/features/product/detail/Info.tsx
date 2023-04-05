import React from "react";
import * as Antd from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Langs } from "@/lang";
import { ELang } from "@/common/interface/lang";
import utils from "@/utils";

interface ProductInfoProps {
  type: number;
  langs: Langs;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  type,
  langs,
  setIsOpen,
}) => {
  return (
    <div className="product-detail-info">
      {/* PRODUCT NAME */}
      <Antd.Typography className="info-name">
        <Antd.Typography.Title level={3}>Product Name</Antd.Typography.Title>
      </Antd.Typography>

      {/* PRODUCT STATUS */}
      <Antd.Typography className="info-status">
        <Antd.Space size="large" wrap>
          <Antd.Space>
            <Antd.Typography.Text>
              {langs?.product.inventoryStatus}:
            </Antd.Typography.Text>
            <Antd.Tag color="green">{langs?.product.instock}</Antd.Tag>
          </Antd.Space>

          <Antd.Space>
            <Antd.Typography.Text>
              {langs?.product.warranty}:
            </Antd.Typography.Text>
            <Antd.Typography.Text className="font-bold">
              36 {langs?.common.unit.months}
            </Antd.Typography.Text>
          </Antd.Space>

          <Antd.Tag color="red-inverse">{langs?.product.bestSale}</Antd.Tag>
        </Antd.Space>
      </Antd.Typography>

      <Antd.Divider />

      {/* PRODUCT RATE */}
      <Antd.Space size="large" className="info-rate" wrap>
        <Antd.Space>
          <Antd.Rate disabled value={4} />
          <span className="rate-note">
            4/5 &#40;1 {langs?.product.voted}&#41;
          </span>
        </Antd.Space>

        <Antd.Button type="primary" onClick={() => setIsOpen(true)}>
          {langs?.common.form.action.rate}
        </Antd.Button>
      </Antd.Space>

      <Antd.Divider />

      {/* PRODUCT PRICE */}
      <Antd.Typography>
        <Antd.Space className="w-full">
          <Antd.Typography.Text delete className="info-price--line">
            {utils.formatMoney(type, (25000000 * 16) / 100 + 25000000)}
          </Antd.Typography.Text>
          <Antd.Tag color="red-inverse">-16%</Antd.Tag>
        </Antd.Space>

        <Antd.Typography.Title level={2} className="info-price">
          {utils.formatMoney(type, 25000000)}
        </Antd.Typography.Title>
      </Antd.Typography>

      <Antd.Divider />

      {/* PRODUCT QUANITY */}
      <Antd.Form>
        <Antd.Form.Item
          label={`${langs?.common.form.label.quanity}:`}
          labelAlign="left"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
        >
          <Antd.Input
            addonBefore={<MinusOutlined />}
            addonAfter={<PlusOutlined />}
          />
        </Antd.Form.Item>

        <Antd.Form.Item wrapperCol={{ span: 14 }}>
          <Antd.Button className="w-full" type="primary" size="large">
            {langs?.common.form.action.purchase}
          </Antd.Button>
        </Antd.Form.Item>
      </Antd.Form>
    </div>
  );
};

export default ProductInfo;
