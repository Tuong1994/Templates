import BaseModel from "./BaseModel";

class ProducerModel extends BaseModel {
  id?: string;
  name: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.name = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default ProducerModel;