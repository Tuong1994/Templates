import React from "react";
import * as Antd from "antd";

const DetailLoading: React.FC<{}> = (props) => {
  return (
    <div style={{ padding: "20px 0" }}>
      <Antd.Row gutter={[30, 30]}>
        <Antd.Col xs={24} md={24 / 2} lg={24 / 2}>
          <Antd.Card style={{ borderColor: "#dddddd" }}>
            <Antd.Skeleton paragraph={{ rows: 7 }} />
          </Antd.Card>
        </Antd.Col>

        <Antd.Col xs={24} md={24 / 2} lg={24 / 2}>
          <Antd.Card style={{ borderColor: "#dddddd" }}>
            <Antd.Skeleton paragraph={{ rows: 7 }} />
          </Antd.Card>
        </Antd.Col>
      </Antd.Row>

      <Antd.Row gutter={[30, 30]}>
        <Antd.Col xs={24} lg={24}>
          <Antd.Card style={{ borderColor: "#dddddd" }}>
            <Antd.Skeleton paragraph={{ rows: 10 }} />
          </Antd.Card>
        </Antd.Col>
      </Antd.Row>
    </div>
  );
};

export default DetailLoading;
