import useLangStore from "store/LangStore";
import { EFilter } from "../enum/base";
import { EGender, ERole } from "../enum/user";
import {
  EInventoryStatus,
  EProductStatus,
  EProductType,
} from "../enum/product";
import { IOptions } from "../interface/option";
import { EOrderStatus, EPaymentMethod } from "../enum/order";
import { EShipmentStatus } from "../enum/shipment";

const useOption = () => {
  const langs = useLangStore((state) => state.langs);

  const options: IOptions = {
    filterProduct: [
      { label: langs?.common.option.newest, value: EFilter.NEWEST },
      { label: langs?.common.option.oldest, value: EFilter.OLDEST },
      { label: langs?.common.option.priceGoUp, value: EFilter.PRICE_GO_UP },
      { label: langs?.common.option.priceGoDown, value: EFilter.PRICE_GO_DOWN },
      { label: langs?.common.option.bestSale, value: EFilter.BEST_SALE },
    ],
    filterTable: [
      { label: langs?.common.option.newest, value: EFilter.NEWEST },
      { label: langs?.common.option.oldest, value: EFilter.OLDEST },
    ],
    gender: [
      { label: langs?.common.option.male, value: EGender.MALE },
      { label: langs?.common.option.female, value: EGender.FEMALE },
    ],
    role: [
      { label: langs?.common.option.admin, value: ERole.ADMIN },
      { label: langs?.common.option.user, value: ERole.USER },
    ],
    productStatus: [
      { label: langs?.common.option.draft, value: EProductStatus.DRAFT },
      { label: langs?.common.option.active, value: EProductStatus.ACTIVE },
    ],
    productType: [
      { label: langs?.common.option.bestSale, value: EProductType.BEST_SALE },
      { label: langs?.common.option.outstand, value: EProductType.OUT_STAND },
    ],
    inventoryStatus: [
      { label: langs?.common.option.inStock, value: EInventoryStatus.IN_STOCK },
      {
        label: langs?.common.option.outOfStock,
        value: EInventoryStatus.OUT_OF_STOCK,
      },
    ],
    orderStatus: [
      { label: langs?.common.option.waiting, value: EOrderStatus.WAITING },
      { label: langs?.common.option.finished, value: EOrderStatus.FINISHED },
    ],
    paymentMethod: [
      { label: langs?.common.option.transfer, value: EPaymentMethod.TRANSFER },
      { label: langs?.common.option.cod, value: EPaymentMethod.COD },
      { label: langs?.common.option.cash, value: EPaymentMethod.CASH },
    ],
    shipmentStatus: [
      {
        label: langs?.common.option.delivering,
        value: EShipmentStatus.DELIVERING,
      },
      {
        label: langs?.common.option.delivered,
        value: EShipmentStatus.DELIVERED,
      },
    ],
  };

  return options;
};

export default useOption;
