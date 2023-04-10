import AuthConst from "@/common/constant/auth";
import { IAuth } from "@/common/interface/auth";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  auth: IAuth | null;
  setAuth(a: IAuth): void;
  resetAuth(): void;
}

const store: StateCreator<AuthStore> = (set, get) => ({
  auth: null,
  setAuth: (a) => set((state) => ({ ...state, auth: a })),
  resetAuth: () => set((state) => ({ ...state, auth: null })),
});

const useAuthStore = create(
  persist(store, { name: AuthConst.LOCAL_STORAGE_KEY })
);

export default useAuthStore;
