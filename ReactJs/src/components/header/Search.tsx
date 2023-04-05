import React from "react";
import * as Antd from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Langs } from "lang";
import {Link}from "react-router-dom";

interface HeaderSearchProps {
  langs: Langs;
  isAdmin: boolean;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ langs, isAdmin }) => {
  return (
    <Antd.Row align="middle" className="header-search">
      <Antd.Col xs={8} lg={isAdmin ? 24 : 6}>
        <Link
          to="/"
          className={`text-white hover:text-white font-bold search-logo ${
            isAdmin && "search-logo-admin"
          }`}
        >
          <span className="mr-1 text-3xl">PC</span>
          <span className="text-lg">Zone</span>
        </Link>
      </Antd.Col>

      {!isAdmin && (
        <Antd.Col xs={16} lg={18}>
          <Antd.Space.Compact className="w-full">
            <Antd.Input
              className="search-input"
              placeholder={langs?.common.form.placeholder.searchProduct}
            />
            <Antd.Button className="bg-white flex justify-center align-center search-btn">
              <SearchOutlined className="text-black mt-1" />
            </Antd.Button>
          </Antd.Space.Compact>
        </Antd.Col>
      )}
    </Antd.Row>
  );
};

export default HeaderSearch;
