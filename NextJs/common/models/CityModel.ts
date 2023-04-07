import BaseModel from "./BaseModel";

class CityModel extends BaseModel {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.nameEng = "";
    this.nameVn = "";
    this.code = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default CityModel;
