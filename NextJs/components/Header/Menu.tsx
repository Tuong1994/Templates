import React from "react";
import * as Antd from "antd";

interface HeaderMenuProps {
  menu: Antd.MenuProps["items"];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menu }) => {
  return (
    <React.Fragment>
      <Antd.Menu
        theme="dark"
        defaultSelectedKeys={["home"]}
        mode="horizontal"
        className="bg-transparent header-menu"
        items={menu?.filter(
          (m) =>
            m?.key === "about" || m?.key === "warranty" || m?.key === "payment"
        )}
      />
    </React.Fragment>
  );
};

export default HeaderMenu;
