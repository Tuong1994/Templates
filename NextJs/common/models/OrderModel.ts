import BaseModel from "./BaseModel";
import ProductModel from "./ProductModel";
import ShipmentModel from "./ShipmentModel";

class OrderModel extends BaseModel {
  id?: string;
  shipmentFee?: number;
  products: ProductModel[];
  totalPay: number;
  paymentMethod: number;
  status: number;
  customerId: string;
  shipment?: ShipmentModel | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.shipmentFee = 0;
    this.totalPay = 0;
    this.paymentMethod = 0;
    this.status = 0;
    this.customerId = "";
    this.createdAt = "";
    this.updatedAt = "";
    this.products = [];
    this.shipment = null;
  }
}

export default OrderModel;
