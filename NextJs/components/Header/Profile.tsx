import React from "react";
import * as Antd from "antd";
import {
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Langs } from "@/lang";
import Link from "next/link";

interface HeaderProfileProps {
  langs: Langs;
  isLogin: boolean;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ langs, isLogin }) => {
  const items: Antd.MenuProps["items"] = [
    {
      key: "admin",
      label: (
        <Link href="/admin/customer/list">
          <Antd.Space className="text-blue-400">
            <SettingOutlined />
            <p>{langs?.header.profile.admin}</p>
          </Antd.Space>
        </Link>
      ),
    },
    {
      key: "edit",
      label: (
        <Link href="/customer">
          <Antd.Space className="text-blue-400">
            <EditOutlined />
            <p>{langs?.header.profile.personalInfo}</p>
          </Antd.Space>
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <Link href="#">
          <Antd.Space className="text-blue-400">
            <LogoutOutlined />
            <p>{langs?.header.profile.logout}</p>
          </Antd.Space>
        </Link>
      ),
    },
  ];

  return (
    <React.Fragment>
      {!isLogin ? (
        <Antd.Row gutter={10} justify="center">
          <Antd.Col xl={12}>
            <Link href="/signIn">
              <Antd.Button type="primary">
                {langs?.header.profile.signIn}
              </Antd.Button>
            </Link>
          </Antd.Col>

          <Antd.Col xl={12}>
            <Link href="/signUp">
              <Antd.Button type="primary">
                {langs?.header.profile.signUp}
              </Antd.Button>
            </Link>
          </Antd.Col>
        </Antd.Row>
      ) : (
        <Antd.Dropdown
          arrow
          menu={{ items }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Antd.Avatar
            className="cursor-pointer bg-red-400"
            size={{ xs: 24, sm: 24, md: 32, lg: 40 }}
            icon={<UserOutlined />}
          />
        </Antd.Dropdown>
      )}
    </React.Fragment>
  );
};

export default HeaderProfile;
