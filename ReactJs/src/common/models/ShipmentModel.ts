import BaseModel from "./BaseModel";

class ShipmentModel extends BaseModel {
  id?: string;
  status?: number;
  customerFirstName: string;
  customerLastName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  cityCode: string;
  districtCode: string;
  wardCode: string;
  orderId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.status = 0;
    this.customerFirstName = "";
    this.customerLastName = "";
    this.customerPhone = "";
    this.customerEmail = "";
    this.address = "";
    this.cityCode = "";
    this.districtCode = "";
    this.wardCode = "";
    this.orderId = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default ShipmentModel;
