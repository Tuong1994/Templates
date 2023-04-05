import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Langs } from "@/lang";
import Link from "next/link";
import CategoryList from "./List";

interface CategoryProps {
  title: string;
  langs: Langs;
}

const Category: React.FC<CategoryProps> = ({ title, langs }) => {
  return (
    <div className="home-category">
      <div className="category-title">
        <h3 className="text-base font-bold title-detail">{title}</h3>
        <Link href="/product/list" className="title-link">
          <div className="text-base flex align-center">
            <span className="mr-1">{langs?.common.form.action.seeAll}</span>
            <DoubleRightOutlined className="mt-1" />
          </div>
        </Link>
      </div>

      <CategoryList langs={langs} />
    </div>
  );
};

export default Category;
