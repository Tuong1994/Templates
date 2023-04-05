import { IProduct } from "./product";
import { IShipment } from "./shipment";

export interface IOrder {
  id?: string;
  shipmentFee?: number;
  products: IProduct[];
  totalPay: number;
  paymentMethod: number;
  status: number;
  customerId: string;
  shipment?: IShipment;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
