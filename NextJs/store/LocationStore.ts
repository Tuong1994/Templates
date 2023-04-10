import { ICity } from "@/common/interface/city";
import { IDistrict } from "@/common/interface/district";
import { IWard } from "@/common/interface/ward";
import { create, StateCreator } from "zustand";

interface LocationStore {
  cities: ICity[];
  districts: IDistrict[];
  wards: IWard[];
  setCities(c: ICity[]): void;
  setDistricts(d: IDistrict[]): void;
  setWards(w: IWard[]): void;
}

const store: StateCreator<LocationStore> = (set) => ({
  cities: [],
  districts: [],
  wards: [],
  setCities: (c) => set((state) => ({ ...state, cities: c })),
  setDistricts: (d) => set((state) => ({ ...state, districts: d })),
  setWards: (w) => set((state) => ({ ...state, wards: w })),
});

const useLocationStore = create(store);

export default useLocationStore;
