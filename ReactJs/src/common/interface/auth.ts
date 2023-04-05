import { Dayjs } from "dayjs";
import { Moment } from "moment";

export interface IAuth {
  id?: string;
  account: string;
  password: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  gender?: number;
  birthday?: string | Dayjs | Moment;
  address?: string;
  cityCode?: string;
  districtCode?: string;
  wardCode?: string;
  role?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
