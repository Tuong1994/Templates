import BaseModel from "./BaseModel";
import ProducerModel from "./ProducerModel";

class CartModel extends BaseModel {
  id?: string;
  products: ProducerModel[];
  customerId: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.products = [];
    this.customerId = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default CartModel;
