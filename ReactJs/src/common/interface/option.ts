import { DefaultOptionType } from "antd/es/select";

export interface ISelectOption extends DefaultOptionType {
  label: string | React.ReactNode | React.ReactNode[];
  value: number | string;
}

export interface IOptions {
  filterProduct: ISelectOption[];
  filterTable: ISelectOption[];
  gender: ISelectOption[];
  role: ISelectOption[];
  productStatus: ISelectOption[];
  productType: ISelectOption[];
  inventoryStatus: ISelectOption[];
  orderStatus: ISelectOption[];
  paymentMethod: ISelectOption[];
  shipmentStatus: ISelectOption[];
}
