import { AREA_CODE } from "@/constant/area";
import { create } from "zustand";

type TArea = {
  code: string;
  name: string;
};

interface State {
  area: TArea;
}

interface Actions {
  actions: {
    setArea: (area: TArea) => void;
  };
}

const initialState: State = {
  area: AREA_CODE[0],
};

export const useAreaStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setArea: (area) => set(() => ({ area })),
  },
}));
