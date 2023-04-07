import BaseModel from "./BaseModel";

class DistrictModel extends BaseModel {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  cityId: string;
  cityCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.nameEng = "";
    this.nameVn = "";
    this.code = "";
    this.cityId = "";
    this.cityCode = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default DistrictModel;
