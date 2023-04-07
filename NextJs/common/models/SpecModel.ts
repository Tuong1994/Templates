import BaseModel from "./BaseModel";

class SpecModel extends BaseModel {
  id?: string;
  title: string;
  content: string;
  productId: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.title = "";
    this.content = "";
    this.productId = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default SpecModel;
