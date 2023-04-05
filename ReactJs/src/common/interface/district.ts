export interface IDistrict {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  cityId: string;
  cityCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
