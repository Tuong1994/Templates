import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { sumPrice } from "utils/helpers";
import { CloseOutlined } from "@ant-design/icons";
import { FaShoppingCart } from "react-icons/fa";
import { Langs } from "lang";
import {Link}from "react-router-dom";
import utils from "utils";
import useLangStore from "store/LangStore";

interface HeaderCartProps {
  langs: Langs;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderCart: React.FC<HeaderCartProps> = ({ langs, setIsOpen }) => {
  const type = useLangStore((state) => state.type);

  const [openCart, setOpenCart] = React.useState<boolean>(false);

  const products = [
    {
      id: "1",
      name: "Product 1",
      price: 2500000,
      quanity: 1,
    },
    {
      id: "2",
      name: "Product 2",
      price: 25000000,
      quanity: 2,
    },
  ];

  const totalPay = sumPrice(products);

  return (
    <div className="header-cart">
      <div className="cart-icon" onClick={() => setOpenCart(true)}>
        <Antd.Badge count={0} showZero>
          <FaShoppingCart color="white" className="icon" />
        </Antd.Badge>
      </div>

      <Antd.Drawer
        open={openCart}
        closeIcon={
          <CloseOutlined style={{ color: "#fff", fontSize: "24px" }} />
        }
        onClose={() => setOpenCart(false)}
        footer={
          <Antd.Row justify="end">
            <Antd.Col>
              <Link
                to="/cart"
                onClick={() => {
                  setOpenCart(false);
                  setIsOpen(false);
                }}
              >
                <Antd.Button type="primary">
                  {langs?.cart.action.seeDetail}
                </Antd.Button>
              </Link>
            </Antd.Col>
          </Antd.Row>
        }
      >
        <Antd.Card>
          <Antd.List
            dataSource={products}
            renderItem={(p) => (
              <Antd.List.Item>
                <Antd.Space>
                  <Components.Image
                    size="sm"
                    style={{ width: "70px", height: "70px" }}
                    src="/images/default-img.png"
                  />
                  <Antd.Typography>
                    <Link
                      to={`/product/${p.id}`}
                      onClick={() => setOpenCart(false)}
                    >
                      <Antd.Typography.Title level={5}>
                        {p.name}
                      </Antd.Typography.Title>
                    </Link>
                    <Antd.Typography.Text className="font-semibold">
                      {p.quanity} x {utils.formatMoney(type, p.price)}
                    </Antd.Typography.Text>
                  </Antd.Typography>
                </Antd.Space>
              </Antd.List.Item>
            )}
          />

          <Antd.Divider />

          <Antd.Space>
            <Antd.Typography.Title level={4}>
              {langs?.cart.totalPay}:
            </Antd.Typography.Title>
            <Antd.Typography.Title level={4}>
              {utils.formatMoney(type, totalPay)}
            </Antd.Typography.Title>
          </Antd.Space>
        </Antd.Card>
      </Antd.Drawer>
    </div>
  );
};

export default HeaderCart;
