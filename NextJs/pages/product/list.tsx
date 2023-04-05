import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import useLangStore from "@/store/LangStore";
import useOption from "@/common/repository/option";
import Link from "next/link";

const ProductList: React.FC<{}> = (props) => {
  const options = useOption();
  const langs = useLangStore((state) => state.langs);

  const breadcumbs: ItemType[] = [
    { title: <Link href="/">{langs?.header.menu.home}</Link> },
    { title: <Link href="/product/list">Product list</Link> },
  ];

  return (
    <div className="product-list">
      <Components.BodyHeader
        items={breadcumbs}
        title="Product list"
        rightItems={() => (
          <Antd.Select
            placement="bottomRight"
            dropdownMatchSelectWidth
            placeholder={langs?.common.form.placeholder.selectFilter}
            options={options.filterProduct}
            dropdownStyle={{ minWidth: "max-content" }}
          />
        )}
      />

      <Antd.Row gutter={[30, 30]} className="product-list-wrapper">
        {[...Array(8)].map((_, i) => (
          <Antd.Col key={i} xs={24} md={12} lg={6}>
            <Components.ProductCard langs={langs} productId={i} />
          </Antd.Col>
        ))}
      </Antd.Row>

      <Components.Pagination page={1} total={100} />
    </div>
  );
};

export default ProductList;
