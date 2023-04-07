import { IPaging, IResponseError } from "../interface/base";

class BaseModel {
  static responseList<M>(data: M[]): IPaging<M> {
    return {
      total: 0,
      page: 0,
      limit: 0,
      list: data,
    };
  }

  static hasError(axiosError: any): IResponseError {
    let error: IResponseError = {
      status: 0,
      statusText: "",
    };

    if (axiosError !== null) {
      if (
        typeof axiosError === "object" &&
        axiosError.hasOwnProperty("response") &&
        axiosError.response !== undefined
      ) {
        error = axiosError.response;
      }
    }

    return {
      status: error.status,
      statusText: error.statusText,
    };
  }

  static collectionError(error: unknown) {
    return {
      total: 0,
      page: 0,
      limit: 0,
      list: [],
      error: this.hasError(error),
    };
  }
}

export default BaseModel;
