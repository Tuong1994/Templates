import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";

interface ImagesProps {
  langs: Langs;
}

const Images: React.FC<ImagesProps> = ({ langs }) => {
  const images = [
    { id: 1, src: "/images/product/pc.png" },
    { id: 1, src: "/images/product/pc.png" },
    { id: 1, src: "/images/product/pc.png" },
    { id: 1, src: "/images/product/pc.png" },
    { id: 1, src: "/images/product/pc.png" },
  ];

  return (
    <Antd.Card rootClassName="form-card--border form-card">
      <Components.Fields.Upload.Multiple />

      <Antd.Divider orientation="left" orientationMargin={0}>
        {langs?.admin.product.form.defaultImages}
      </Antd.Divider>

      <Antd.Row gutter={[10, 10]}>
        {images.map((img) => (
          <Antd.Col
            key={img.id}
            xs={24 / 2}
            md={24 / 4}
            lg={24 / images.length}
          >
            <Antd.Image src={img.src} />
          </Antd.Col>
        ))}
      </Antd.Row>
    </Antd.Card>
  );
};

export default Images;
