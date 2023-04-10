import { IResponseError } from "@/common/interface/base";
import { create, StateCreator } from "zustand";

interface Error {
  isError: boolean;
  errorMessage?: string;
  type: "default" | "auth" | undefined;
  resError: IResponseError | null;
}

interface Success {
  isSuccess: boolean;
  successMessage?: string;
}

interface MessageStore {
  error: Error;
  success: Success;
  setSuccess(s: Success): void;
  setError(e: Error): void;
}

const store: StateCreator<MessageStore> = (set) => ({
  error: {
    isError: false,
    errorMessage: "",
    type: "default",
    resError: {
      status: 0,
      statusText: "",
    },
  },
  success: {
    isSuccess: false,
    successMessage: "",
  },
  setSuccess: (s) => set((state) => ({ ...state, success: s })),
  setError: (e) => set((state) => ({ ...state, error: e })),
});

const useMessageStore = create(store);

export default useMessageStore;
