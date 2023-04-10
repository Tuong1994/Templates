import { create, StateCreator } from "zustand";

interface PageStore {
  page: number;
  setPage(p: number): void;
}

const store: StateCreator<PageStore> = (set) => ({
  page: 1,
  setPage: (p) => set((state) => ({ ...state, page: p })),
});

const usePageStore = create(store);

export default usePageStore;
