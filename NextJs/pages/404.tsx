import React from "react";
import * as Antd from "antd";
import { FaRegMehRollingEyes } from "react-icons/fa";
import useLangStore from "@/store/LangStore";
import Link from "next/link";

const PageNotFound: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <div
      className="my-10 w-full"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Antd.Typography>
        <Antd.Space className="flex justify-center">
          <FaRegMehRollingEyes className="text-3xl" />
          <span className="text-3xl">404</span>
        </Antd.Space>
        <Antd.Typography.Title
          className="text-center"
          style={{ margin: "10px 0" }}
          level={2}
        >
          {langs?.common.notFound}
        </Antd.Typography.Title>
      </Antd.Typography>

      <Link
        href="/"
        className="flex justify-center"
        style={{ marginTop: "30px" }}
      >
        <Antd.Button size="large" type="primary">{langs?.common.returnHomePage}</Antd.Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
