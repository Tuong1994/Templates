import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";
import { FaCheck, FaSearch } from "react-icons/fa";
import { IProduct } from "@/common/interface/product";
import utils from "@/utils";

interface SelectProductModalProps {
  type: number;
  langs: Langs;
  products: IProduct[];
  isSelect: boolean;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectProductModal: React.FC<SelectProductModalProps> = ({
  type,
  langs,
  products,
  isSelect,
  setIsSelect,
}) => {
  const [productId, setProducts] = React.useState<string[]>([]);

  const [searchProduct, setSearchProduct] = React.useState<string>("");

  const filterProducts = (p: IProduct[]) => {
    const filterList = p.filter((p) =>
      p.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    return filterList;
  };

  const handleSelect = (p: IProduct) => {
    const ids = [...productId];
    if (ids.length > 0 && ids.includes(p.id)) {
      const idx = ids.indexOf(p.id);
      ids.splice(idx, 1);
    } else ids.push(p.id);
    setProducts(ids);
  };

  return (
    <Antd.Modal
      className="select-product-modal admin-ant-modal"
      closable={false}
      title={langs?.admin.order.form.selectProducts}
      okText={langs?.common.form.action.save}
      cancelText={langs?.common.form.action.cancel}
      open={isSelect}
      onCancel={() => setIsSelect(false)}
    >
      <Antd.Input
        suffix={<FaSearch />}
        value={searchProduct}
        placeholder={langs?.common.form.placeholder.searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />

      <Antd.Divider />

      <div
        className={products.length > 5 ? "select-product-modal--height" : ""}
      >
        {filterProducts(products).length > 0 ? (
          filterProducts(products).map((p) => (
            <Antd.Card
              key={p.id}
              className={`select-product-modal-item ${
                productId.includes(p.id) && "select-product-modal-item-selected"
              }`}
              onClick={() => handleSelect(p)}
            >
              <Antd.Row justify="space-between" align="middle">
                <Antd.Col>
                  <Antd.Space size="large">
                    <Antd.Image width={50} src="/images/default-img.png" />
                    <div className="font-semibold">
                      <p>{p.name}</p>
                      <Antd.Typography.Title level={4}>
                        {utils.formatMoney(type, p.price)}
                      </Antd.Typography.Title>
                    </div>
                  </Antd.Space>
                </Antd.Col>

                {productId.includes(p.id) && (
                  <Antd.Col>
                    <FaCheck />
                  </Antd.Col>
                )}
              </Antd.Row>
            </Antd.Card>
          ))
        ) : (
          <Antd.Row justify="center">
            <Antd.Col>
              <Antd.Typography.Text>
                {langs?.common.noData.product}
              </Antd.Typography.Text>
            </Antd.Col>
          </Antd.Row>
        )}
      </div>

      <Antd.Divider />

      <Components.Pagination
        page={1}
        total={100}
        simple
        showSizeChanger={false}
        rootClass="select-product-modal-pagination"
      />
    </Antd.Modal>
  );
};

export default SelectProductModal;
