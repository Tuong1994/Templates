import { IProduct } from "./product";

export interface ICart {
  id?: string;
  products: IProduct[];
  customerId: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
