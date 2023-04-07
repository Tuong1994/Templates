export interface IImage {
    id?: string;
    path?: string;
    size?: number;
  }
  
  export interface IResponseError {
    status: number,
    statusText: string;
  }
  
  export interface IPaging<M> {
    total: number;
    page: number;
    limit: number;
    list: M[];
  }
  
  export interface IListQuery {
    page?: number;
    limit?: number;
    customerId?: string;
    categoryId?: string;
    producerId?: string;
    productId?: string;
    specId?: string;
    orderId?: string;
    cartId?: string;
    commentId?: string;
    rateId?: string;
    shipmentId?: string;
    cityId?: string;
    districtId?: string;
    wardId?: string;
  }
  
  export const getListQuery = (query: IListQuery) => {
    let {
      page = 1,
      limit = 10,
      customerId,
      categoryId,
      producerId,
      productId,
      specId,
      orderId,
      shipmentId,
      commentId,
      rateId,
      cityId,
      districtId,
      wardId,
    } = query;
  
    let rs = "?";
  
    page && page < 1 && (page = 1);
    limit && limit < 10 && (limit = 10);
    limit && limit > 100 && (limit = 10);
  
    rs += `page=${page}&limit=${limit}`;
  
    customerId && (rs += `&customerId=${customerId}`);
    categoryId && (rs += `&categoryId=${categoryId}`);
    producerId && (rs += `&producerId=${producerId}`);
    productId && (rs += `&productId=${productId}`);
    specId && (rs += `&specId=${specId}`);
    commentId && (rs += `&commentId=${commentId}`);
    rateId && (rs += `&rateId=${rateId}`);
    orderId && (rs += `&orderId=${orderId}`);
    shipmentId && (rs += `&shipmentId=${shipmentId}`);
    cityId && (rs += `&cityId=${cityId}`);
    districtId && (rs += `&districtId=${districtId}`);
    wardId && (rs += `&wardId=${wardId}`);
  
    return rs;
  };
  