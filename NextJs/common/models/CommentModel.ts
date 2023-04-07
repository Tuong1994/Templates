import { IImage } from "../interface/base";
import BaseModel from "./BaseModel";

class CommentModel extends BaseModel {
  id?: string;
  commentText: string;
  productId?: string;
  productName?: string;
  customerId?: string;
  customerName?: string;
  customerAvatar?: IImage;
  parentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.commentText = "";
    this.productId = "";
    this.productName = "";
    this.customerId = "";
    this.customerName = "";
    this.parentId = "";
    this.createdAt = "";
    this.updatedAt = "";
    this.customerAvatar = {};
  }
}

export default CommentModel;
