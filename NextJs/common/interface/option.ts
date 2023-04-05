export interface ISelectOption {
  label: string | React.ReactNode | React.ReactNode[];
  value: number | string | boolean;
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
