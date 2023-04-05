import React from "react";
import * as Antd from "antd";

interface InfoRowProps {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  style?: React.CSSProperties;
  titleClass?: string;
  contentClass?: string;
  titleColSpan?: Antd.ColProps;
  contentColSpan?: Antd.ColProps;
  rowAlign?: Antd.RowProps["align"];
  rowJustify?: Antd.RowProps["justify"];
}

const InfoRow: React.FC<InfoRowProps> = ({
  title,
  titleColSpan,
  contentColSpan,
  content,
  style,
  titleClass = "",
  contentClass = "",
  rowAlign,
  rowJustify = "space-between",
}) => {
  return (
    <Antd.Row justify={rowJustify} align={rowAlign} style={style}>
      <Antd.Col {...titleColSpan}>
        <span className={`font-semibold ${titleClass}`}>{title}</span>
      </Antd.Col>

      <Antd.Col {...contentColSpan}>
        <span className={`font-semibold ${contentClass}`}>{content}</span>
      </Antd.Col>
    </Antd.Row>
  );
};

export default InfoRow;
