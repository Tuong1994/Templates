import React from "react";
import * as Antd from "antd";
import useLangStore from "@/store/LangStore";

interface PageEmptyProps {}

const PageEmpty: React.FC<PageEmptyProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Antd.Empty description={langs?.common.noData.empty} />
    </div>
  );
};

export default PageEmpty;
