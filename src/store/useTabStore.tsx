import { create } from "zustand";
import { TabItemType } from "../components/home/interface";

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
      url: "me",
    },
    {
      isSelected: false,
      label: "Tech Stack",
      url: "stack",
    },
    {
      isSelected: false,
      label: "Projects",
      url: "project",
    },
    {
      isSelected: false,
      label: "Blog",
      url: "blog",
    },
    {
      isSelected: false,
      label: "Notes",
      url: "notes",
    },
  ],
  changeTabs: (idx: number) =>
    set((state) => {
      console.log("tab change");
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
