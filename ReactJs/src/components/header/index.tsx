import React from "react";
import * as Antd from "antd";
import { MenuOutlined } from "@ant-design/icons";
import HeaderSearch from "./Search";
import HeaderMenu from "./Menu";
import HeaderProfile from "./Profile";
import HeaderSubMenu from "./SubMenu";
import HeaderTranslate from "./Translate";
import HeaderSideMenu from "./SideMenu";
import HeaderCart from "./Cart";
import useMenu from "common/repository/menu";
import useLangStore from "store/LangStore";

interface HeaderProps {
  isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin }) => {
  const { pageMenu, productMenu } = useMenu();

  const langs = useLangStore((state) => state.langs);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const isLogin = true;

  return (
    <React.Fragment>
      <Antd.Layout.Header
        className={`py-2 header ${isAdmin && "header-admin"}`}
      >
        {/* HEADER TOP */}
        <Antd.Row justify="space-between" align="middle" className="py-3">
          {/* SEARCH */}
          <Antd.Col xs={20} lg={20} xl={!isAdmin ? (isLogin ? 13 : 10) : 21}>
            <HeaderSearch langs={langs} isAdmin={isAdmin} />
          </Antd.Col>

          {/* MENU */}
          {!isAdmin && (
            <Antd.Col xs={0} xl={6}>
              <HeaderMenu menu={pageMenu} />
            </Antd.Col>
          )}

          {/* TRANSLATE */}
          <Antd.Col xs={0} xl={isLogin ? 2 : 3} className="header-translate">
            <HeaderTranslate langs={langs} />
          </Antd.Col>

          {/* CART */}
          {!isAdmin && (
            <Antd.Col xs={0} xl={1}>
              <HeaderCart langs={langs} setIsOpen={setIsOpen} />
            </Antd.Col>
          )}

          {/* PROFILE */}
          <Antd.Col xs={0} xl={isLogin ? 1 : 4} className="header-profile">
            <HeaderProfile langs={langs} isLogin={isLogin} />
          </Antd.Col>

          {/* RESPONSIVE SIDEMENU BTN */}
          <Antd.Col xs={2} md={2} lg={0} className="text-white header-button">
            <MenuOutlined
              className="cursor-pointer text-lg"
              onClick={() => setIsOpen(true)}
            />
          </Antd.Col>
        </Antd.Row>

        {/* HEADER BOTTOM */}
        {!isAdmin && (
          <Antd.Row className="py-1 px-12 rounded header-sub-menu">
            <Antd.Col lg={24}>
              <HeaderSubMenu menu={productMenu} />
            </Antd.Col>
          </Antd.Row>
        )}
      </Antd.Layout.Header>

      {/* RESPONSIVE SIDE MENU */}
      <HeaderSideMenu
        langs={langs}
        pageMenu={pageMenu}
        productMenu={productMenu}
        isAdmin={isAdmin}
        isLogin={isLogin}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </React.Fragment>
  );
};

export default Header;
