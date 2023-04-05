import { IImage } from "./base";
import { IComment } from "./comment";
import { IRate } from "./rate";
import { ISpec } from "./spec";

export interface IProduct {
  id: string;
  name: string;
  images?: FileList;
  newImages?: IImage[];
  initialCapital?: number;
  profitPercent?: number;
  price: number;
  quanity?: number;
  status?: number;
  warranty?: number;
  inventory?: number;
  inventoryStatus?: number;
  bestSale?: boolean;
  outstand?: boolean;
  categoryId?: string;
  producerId?: string;
  specs?: ISpec[];
  comments?: IComment[];
  rates?: IRate[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
