export interface IShipment {
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
}
