import React from "react";
import * as Antd from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Langs } from "lang";
import HeaderProfile from "./Profile";
import HeaderTranslate from "./Translate";
import HeaderCart from "./Cart";

interface HeaderSideMenuProps {
  langs: Langs;
  pageMenu: Antd.MenuProps["items"];
  productMenu: Antd.MenuProps["items"];
  isAdmin: boolean;
  isLogin: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSideMenu: React.FC<HeaderSideMenuProps> = ({
  langs,
  pageMenu,
  productMenu,
  isAdmin,
  isLogin,
  isOpen,
  setIsOpen,
}) => {
  const [isProduct, setIsProduct] = React.useState<boolean>(false);

  return (
    <Antd.Drawer
      className="header-menu-collapse"
      open={isOpen}
      closable={false}
      onClose={() => setIsOpen(false)}
    >
      {/* HEADER */}
      <Antd.Row justify="center" gutter={16}>
        <Antd.Col>
          <HeaderProfile langs={langs} isLogin={isLogin} />
        </Antd.Col>

        <Antd.Col>
          {!isAdmin ? (
            <HeaderCart langs={langs} setIsOpen={setIsOpen} />
          ) : (
            <HeaderTranslate langs={langs} />
          )}
        </Antd.Col>
      </Antd.Row>

      <Antd.Divider className="header-menu-collapse-divider" />

      {/* PAGE MENU */}
      {!isAdmin ? (
        <Antd.Menu
          theme="dark"
          mode="inline"
          className="header-menu-collapse-wrapper"
          onClick={(record) => {
            if (record.key !== "product") return setIsOpen(false);
            setIsProduct(true);
          }}
          items={pageMenu?.filter(
            (m) =>
              m?.key === "product" ||
              m?.key === "warranty" ||
              m?.key === "payment"
          )}
        />
      ) : (
        <Antd.Menu
          theme="dark"
          mode="inline"
          className="header-menu-collapse-wrapper"
          onClick={() => setIsOpen(false)}
          items={pageMenu?.filter(
            (m) =>
              m?.key !== "product" &&
              m?.key !== "warranty" &&
              m?.key !== "payment"
          )}
        />
      )}

      <Antd.Divider className="header-menu-collapse-divider" />

      {!isAdmin && (
        <Antd.Row justify="end">
          <Antd.Col>
            <HeaderTranslate langs={langs} />
          </Antd.Col>
        </Antd.Row>
      )}

      {/* PRODUCT SUB MENU */}
      <Antd.Drawer
        className="header-menu-collapse-product"
        open={isProduct}
        closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
        onClose={() => setIsProduct(false)}
      >
        <Antd.Menu
          theme="dark"
          defaultSelectedKeys={["home"]}
          mode="inline"
          className="menu-product"
          onClick={() => {
            setIsOpen(false);
            setIsProduct(false);
          }}
          items={productMenu}
        />
      </Antd.Drawer>
    </Antd.Drawer>
  );
};

export default HeaderSideMenu;
