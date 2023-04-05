import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import { Link } from "react-router-dom";

interface CarouselItemProps {
  langs: Langs;
  imgSize?: "sm" | "md" | "lg";
  imgUrl: string;
  title: string;
  content: string;
  link: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  langs,
  imgSize,
  imgUrl,
  title,
  content,
  link,
}) => {
  return (
    <div className="home-carousel-item">
      <Antd.Row className="item-inner" justify="space-around" align="middle">
        <Antd.Col lg={6} className="flex justify-center inner-image">
          <Components.Image src={imgUrl} size={imgSize} />
        </Antd.Col>

        <Antd.Col lg={16} className="inner-content">
          <Antd.Typography>
            <Antd.Typography.Title level={2}>{title}</Antd.Typography.Title>
            <Antd.Typography.Text className="text-base">
              {content}
            </Antd.Typography.Text>
          </Antd.Typography>

          <div>
            <Antd.Divider className="content-divider" />

            <Link to={link}>
              <Antd.Button className="content-link" ghost>
                {langs?.home.carousel.linkName}
              </Antd.Button>
            </Link>
          </div>
        </Antd.Col>
      </Antd.Row>
    </div>
  );
};

export default CarouselItem;
