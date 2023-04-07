import BaseModel from "./BaseModel";

class CategoryModel extends BaseModel {
  id?: string;
  nameENG: string;
  nameVN: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.nameENG = "";
    this.nameVN = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default CategoryModel;
