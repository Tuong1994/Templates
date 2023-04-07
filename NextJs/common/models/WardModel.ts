import BaseModel from "./BaseModel";

class WardModel extends BaseModel {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  districtId: string;
  districtCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.nameEng = "";
    this.nameVn = "";
    this.code = "";
    this.districtId = "";
    this.districtCode = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export default WardModel;
