import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ELang } from "common/interface/lang";
import { Langs } from "lang";
import { Link } from "react-router-dom";
import useLangStore from "store/LangStore";
import utils from "utils";

interface ProductCardProps {
  langs: Langs;
  productId: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({ langs, productId }) => {
  const type = useLangStore((state) => state.type);

  return (
    <div className="product-card">
      <div className="card-img">
        <Components.Image src="/images/product/pc.png" alt="default" />
        <Antd.Row
          gutter={10}
          justify="space-between"
          align="middle"
          className="img-backdrop"
        >
          <Antd.Col lg={18}>
            <Link
              to="/product/detail"
              state={{ productId }}
              className="backdrop-link"
            >
              {langs?.common.form.action.seeDetail}
            </Link>
          </Antd.Col>

          <Antd.Col lg={6}>
            <Link to="/cart" className="backdrop-link">
              <ShoppingCartOutlined />
            </Link>
          </Antd.Col>
        </Antd.Row>
      </div>

      <div className="card-content">
        <Antd.Typography>
          <Antd.Typography.Text className="content-name">
            Product
          </Antd.Typography.Text>
          <Antd.Typography.Title level={4} className="content-price">
            {utils.formatMoney(type, 25000000)}
          </Antd.Typography.Title>
        </Antd.Typography>
      </div>
    </div>
  );
};

export default ProductCard;
