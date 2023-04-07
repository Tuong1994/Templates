import AxiosClient from "../api/axios_client";
import BaseModel from "./BaseModel";
import CommentModel from "./CommentModel";
import RateModel from "./RateModel";
import SpecModel from "./SpecModel";
import { IImage, IListQuery, IPaging, getListQuery } from "../interface/base";

const SERVICE_URL = "/api/product";

class ProductModel extends BaseModel {
  id: string;
  name: string;
  images?: File[];
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
  specs?: SpecModel[];
  comments?: CommentModel[];
  rates?: RateModel[];
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor() {
    super();

    this.id = "";
    this.name = "";
    this.initialCapital = 0;
    this.profitPercent = 0;
    this.price = 0;
    this.quanity = 0;
    this.status = 0;
    this.warranty = 0;
    this.inventory = 0;
    this.inventoryStatus = 0;
    this.bestSale = false;
    this.outstand = false;
    this.categoryId = "";
    this.producerId = "";
    this.createdAt = "";
    this.updatedAt = "";
    this.images = [];
    this.newImages = [];
    this.specs = [];
    this.comments = [];
    this.rates = [];
  }

  async getList(query: IListQuery | string): Promise<IPaging<ProductModel>> {
    let collection;

    try {
      const rs = await AxiosClient.get<IPaging<ProductModel>>(
        `${SERVICE_URL}/list${getListQuery(query as IListQuery)}`
      );
      collection = BaseModel.responseList<ProductModel>(rs.data.list);
    } catch (error) {
      collection = BaseModel.collectionError(error);
    }
    return collection;
  }
}

export default ProductModel;
