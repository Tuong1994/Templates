import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { ISlideItem } from "@/common/interface/slider";
import useLangStore from "@/store/LangStore";
import ProductInfo from "@/features/product/detail/Info";
import Link from "next/link";
import Spec from "@/features/product/detail/Spec";

const ProductDetail: React.FC<{}> = (props) => {
  const type = useLangStore((state) => state.type);

  const langs = useLangStore((state) => state.langs);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const breadcumbs: ItemType[] = [
    { title: <Link href="/">{langs?.header.menu.home}</Link> },
    { title: <Link href="/product/list">Product list</Link> },
  ];

  const products: ISlideItem[] = [
    {
      id: 1,
      content: <img className="slider-img" src="/images/product/pc.png" />,
      subContent: <img src="/images/product/pc.png" />,
    },
    {
      id: 2,
      content: (
        <img className="slider-img" src="/images/product/monitor-gaming.png" />
      ),
      subContent: <img src="/images/product/monitor-gaming.png" />,
    },
    {
      id: 3,
      content: (
        <img className="slider-img" src="/images/product/laptop-gaming.png" />
      ),
      subContent: <img src="/images/product/laptop-gaming.png" />,
    },
  ];

  const tabs: Antd.TabsProps["items"] = [
    {
      key: "spec",
      label: langs?.product.tabs.spec.title,
      children: <Spec />,
    },
    {
      key: "comment",
      label: langs?.product.tabs.comment.title,
      children: <Components.Comment />,
    },
  ];

  return (
    <div className="product-detail">
      <Components.BodyHeader items={breadcumbs} title="Product detail" />

      <Antd.Row gutter={10}>
        <Antd.Col xs={24} md={12} xl={12}>
          <Components.Carousel.ProductSlider
            rootClass="product-detail-slider"
            slides={products}
            inifine
          />
        </Antd.Col>

        <Antd.Col xs={24} md={12} xl={12}>
          <ProductInfo type={type} langs={langs} setIsOpen={setIsOpen} />
        </Antd.Col>
      </Antd.Row>

      <Components.Tabs className="product-detail-tabs" items={tabs} />

      <Components.Rate isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProductDetail;
