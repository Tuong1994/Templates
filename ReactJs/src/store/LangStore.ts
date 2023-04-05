import { ELang } from "common/interface/lang";
import { eng, Langs, vn } from "lang";
import { create, StateCreator } from "zustand";

interface LangStore {
  type: number;
  langs: Langs;
  setLang: (t: number) => void;
}

const store: StateCreator<LangStore> = (set) => ({
  type: ELang.eng,
  langs: eng,
  setLang: (t) => {
    if (t === ELang.eng) set((state) => ({ ...state, type: t, langs: eng }));
    else set((state) => ({ ...state, type: t, langs: vn }));
  },
});

const useLangStore = create(store);

export default useLangStore;
