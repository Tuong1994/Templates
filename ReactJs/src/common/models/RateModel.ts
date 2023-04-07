import BaseModel from "./BaseModel";

class RateModel extends BaseModel {
  id?: string;
  point: number;
  note: string;
  customerId?: string;
  productId?: string;
  productName: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.point = 0;
    this.note = "";
    this.customerId = "";
    this.productId = "";
    this.productName = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default RateModel
