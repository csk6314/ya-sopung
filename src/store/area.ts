import { create } from "zustand";

interface State {
  area: string;
}

interface Actions {
  actions: {
    setArea: (area: string) => void;
  };
}

const initialState = {
  area: "서울",
};

export const useAreaStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setArea: (area) => set(() => ({ area })),
  },
}));
