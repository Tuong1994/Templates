import { IImage } from "./base";

export interface IComment {
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
}
