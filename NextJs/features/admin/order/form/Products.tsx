import React from "react";
import * as Antd from "antd";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { IProduct } from "@/common/interface/product";
import { Langs } from "@/lang";
import Link from "next/link";
import utils from "@/utils";

interface ProductsProps {
  type: number;
  langs: Langs;
  products: IProduct[];
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const Products: React.FC<ProductsProps> = ({
  type,
  langs,
  products,
  setIsSelect,
  setIsCreate,
}) => {
  const iconProps = { size: 14, className: "cursor-pointer" };

  return (
    <Antd.Card rootClassName="form-card--border form-card">
      <Antd.Row gutter={[10, 10]} justify="center">
        <Antd.Col>
          <Antd.Button
            type="primary"
            size="large"
            onClick={() => setIsSelect(true)}
          >
            {langs?.admin.order.form.selectProducts}
          </Antd.Button>
        </Antd.Col>
        <Antd.Col>
          <Antd.Button
            type="primary"
            className="admin-button"
            size="large"
            onClick={() => setIsCreate(true)}
          >
            {langs?.admin.order.form.createProduct}
          </Antd.Button>
        </Antd.Col>
      </Antd.Row>

      <Antd.Divider />

      <Antd.List className="card-product-list">
        {products.map((p) => (
          <Antd.List.Item className="product-list-item" key={p.id}>
            <Antd.Row
              className="w-full"
              gutter={[10, 10]}
              justify="space-between"
              align="middle"
            >
              <Antd.Col xs={0} lg={5}>
                <Antd.Image width={80} src="/images/default-img.png" />
              </Antd.Col>

              <Antd.Col xs={12} md={12} lg={6}>
                <Link
                  href="/admin/product/form/1"
                  className="block text-blue-400 text-center"
                >
                  {p.name}
                </Link>
              </Antd.Col>

              <Antd.Col xs={12} md={12} lg={6}>
                <span className="font-semibold">
                  {utils.formatMoney(type, p.price)}
                </span>
              </Antd.Col>

              <Antd.Col xs={18} md={10} lg={5}>
                <Antd.Input
                  size="small"
                  className="text-center"
                  addonBefore={<FaMinus {...iconProps} />}
                  addonAfter={<FaPlus {...iconProps} />}
                  defaultValue={p.quanity}
                />
              </Antd.Col>

              <Antd.Col xs={4} md={2} lg={2}>
                <div className="flex justify-center">
                  <FaTrash {...iconProps} className="item-trash-icon" />
                </div>
              </Antd.Col>
            </Antd.Row>
          </Antd.List.Item>
        ))}
      </Antd.List>
    </Antd.Card>
  );
};

export default Products;
