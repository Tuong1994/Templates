import { IPaging } from "@/common/interface/base";
import { create, StateCreator } from "zustand";
import { IProduct } from "@/common/interface/product";

interface ProductStore {
  products: IPaging<IProduct>;
  product: IProduct | null;
  setProducts(p: IPaging<IProduct>): void;
  setProduct(p: IProduct): void;
}

const store: StateCreator<ProductStore> = (set) => ({
  products: {
    total: 0,
    page: 0,
    limit: 0,
    list: [],
  },
  product: null,
  setProducts: (p) => set((state) => ({ ...state, products: p })),
  setProduct: (p) => set((state) => ({ ...state, product: p })),
});

const useProductStore = create(store);

export default useProductStore;
