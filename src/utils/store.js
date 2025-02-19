import { create } from "zustand";

const useGlobalStore = create((set) => ({
  authToken: null,
  setAuthToken: (newAuthToken) => set((state) => ({ authToken: newAuthToken })),
}));

export default useGlobalStore;
