import React from "react";
import * as Antd from "antd";

interface HeaderSubMenuProps {
  menu: Antd.MenuProps["items"];
}

const HeaderSubMenu: React.FC<HeaderSubMenuProps> = ({ menu }) => {
  return (
    <Antd.Menu
      theme="dark"
      mode="horizontal"
      items={menu}
      className="bg-transparent flex justify-center"
    />
  );
};

export default HeaderSubMenu;
