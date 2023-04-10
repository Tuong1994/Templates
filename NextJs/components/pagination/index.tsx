import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as Antd from "antd";

interface PaginationProps {
  page: number;
  total: number;
  rootClass?: string;
  size?: Antd.PaginationProps["size"];
  simple?: Antd.PaginationProps["simple"];
  showQuickJumper?: Antd.PaginationProps["showQuickJumper"];
  showSizeChanger?: Antd.PaginationProps["showSizeChanger"];
  showTotal?: Antd.PaginationProps["showTotal"];
  onChange?: Antd.PaginationProps["onChange"];
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  total,
  size,
  simple,
  rootClass = "",
  showQuickJumper,
  showSizeChanger,
  showTotal,
  onChange,
}) => {
  return (
    <div className={`pagination ${rootClass}`}>
      <Antd.Pagination
        rootClassName="pagination-inner"
        size={size}
        simple={simple}
        total={total}
        hideOnSinglePage
        defaultCurrent={page}
        prevIcon={<LeftOutlined />}
        nextIcon={<RightOutlined />}
        showSizeChanger={showSizeChanger}
        showQuickJumper={showQuickJumper}
        showTotal={showTotal}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
