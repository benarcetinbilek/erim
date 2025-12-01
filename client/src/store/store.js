import { create } from "zustand";

const Store = create((set) => ({
  config: {},
  setConfig: (val) => set({ config: val }),
}));

export default Store;
