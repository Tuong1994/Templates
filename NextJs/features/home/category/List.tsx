import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";

interface CategoryListProps {
  langs: Langs;
}

const CategoryList: React.FC<CategoryListProps> = ({ langs }) => {
  return (
    <Antd.Row gutter={[30, 30]} className="category-item">
      {[...Array(8)].map((_, i) => (
        <Antd.Col key={i} xs={24} md={12} lg={6}>
          <Components.ProductCard langs={langs} productId={i} />
        </Antd.Col>
      ))}
    </Antd.Row>
  );
};

export default CategoryList;
