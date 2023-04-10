import React from "react";
import * as Antd from "antd";

const ListLoading: React.FC<{}> = (props) => {
  return (
    <Antd.Row gutter={[30, 30]} style={{ padding: "20px 0" }}>
      {[...Array(4)].map((_, i) => (
        <Antd.Col xs={24} md={24 / 2} lg={24 / 4} key={i}>
          <Antd.Card style={{ borderColor: "#dddddd" }}>
            <Antd.Skeleton paragraph={{ rows: 7 }} />
          </Antd.Card>
        </Antd.Col>
      ))}
    </Antd.Row>
  );
}

export default ListLoading;
