import { IImage } from "./base";
import { ICart } from "./cart";
import { IComment } from "./comment";
import { IOrder } from "./order";
import { Dayjs } from "dayjs";
import { Moment } from "moment";

export interface ICustomer {
  id?: string;
  account: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  phone: string;
  email: string;
  gender: number;
  birthday?: string | Dayjs | Moment;
  address: string;
  cityCode: string;
  districtCode: string;
  wardCode: string;
  role: number;
  avatar?: IImage;
  comments?: IComment[];
  cart?: ICart;
  orders?: IOrder[];
  rates?: [];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
