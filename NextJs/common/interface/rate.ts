export interface IRate {
  id?: string;
  point: number;
  note: string;
  customerId?: string;
  productId?: string;
  productName: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
