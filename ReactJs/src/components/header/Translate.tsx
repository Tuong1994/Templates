import React from "react";
import * as Antd from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { ELang } from "common/interface/lang";
import { Langs } from "lang";
import useLangStore from "store/LangStore";

interface HeaderTranslateProps {
  langs: Langs;
}

const HeaderTranslate: React.FC<HeaderTranslateProps> = ({ langs }) => {
  const type = useLangStore((state) => state.type);
  const setLang = useLangStore((state) => state.setLang);

  const items: Antd.MenuProps["items"] = [
    {
      key: "eng",
      label: (
        <Antd.Button type="link" onClick={() => setLang(ELang.eng)}>
          {langs?.header.translate.eng}
        </Antd.Button>
      ),
    },
    {
      key: "vn",
      label: (
        <Antd.Button type="link" onClick={() => setLang(ELang.vn)}>
          {langs?.header.translate.vn}
        </Antd.Button>
      ),
    },
  ];

  return (
    <Antd.Dropdown
      menu={{ items }}
      trigger={["click"]}
      placement="bottomRight"
      arrow
    >
      <Antd.Space align="center" className="cursor-pointer">
        <GlobalOutlined className="text-white block" />
        <span className="text-white">
          {type === ELang.eng ? "ENG." : "VN."}
        </span>
      </Antd.Space>
    </Antd.Dropdown>
  );
};

export default HeaderTranslate;
