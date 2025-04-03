import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  theme: false,
  toggleTheme: () =>
    set((state) => ({
      theme: !state.theme,
    })),
}));
