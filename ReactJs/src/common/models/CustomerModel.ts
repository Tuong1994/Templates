import { Dayjs } from "dayjs";
import { IImage } from "../interface/base";
import { Moment } from "moment";
import BaseModel from "./BaseModel";
import CommentModel from "./CommentModel";
import CartModel from "./CartModel";
import OrderModel from "./OrderModel";
import RateModel from "./RateModel";

class CustomerModel extends BaseModel {
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
  cart?: CartModel | null;
  comments?: CommentModel[];
  orders?: OrderModel[];
  rates?: RateModel[];
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.account = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.fullName = "";
    this.phone = "";
    this.email = "";
    this.gender = 0;
    this.birthday = "";
    this.address = "";
    this.cityCode = "";
    this.districtCode = "";
    this.wardCode = "";
    this.role = 0;
    this.createdAt = "";
    this.updatedAt = "";
    this.cart = null;
    this.avatar = {};
    this.orders = [];
    this.rates = [];
    this.comments = [];
  }
}

export default CustomerModel;
