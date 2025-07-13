import { create } from "zustand";
import { TabItemType } from "../home/interface";

export interface State {
  tabs: TabItemType[];
}
export interface Action {
  changeTabs: (idx: number) => void;
}

const useTabStore = create<State & Action>((set) => ({
  tabs: [
    {
      isSelected: true,
      label: "Me",
    },
    {
      isSelected: false,
      label: "Tech Stack",
    },
    {
      isSelected: false,
      label: "Projects",
    },
    {
      isSelected: false,
      label: "Blog",
    },
    {
      isSelected: false,
      label: "Notes",
    },
  ],
  changeTabs: (idx: number) =>
    set((state) => {
      state.tabs.forEach((item, index) => {
        if (idx === index) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      return { tabs: state.tabs };
    }),
}));

export default useTabStore;
