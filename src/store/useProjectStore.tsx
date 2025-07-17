import { create } from "zustand";

export interface ComponyProjectItem {
  name?: string;
  address?: string;
  repo?: string;
  tachStack?: string;
}

export interface State {
  componyProject: ComponyProjectItem[];
  personalProject: ComponyProjectItem[];
  demoProject: ComponyProjectItem[];
}

const useProjectStore = create<State>(() => ({
  componyProject: [
    {
      name: "2334",
      address: "http",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      address: "http",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      address: "http",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      address: "http",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      address: "http",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
  ],
  personalProject: [
    {
      name: "2334",
      address: "http",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
  ],
  demoProject: [
    {
      name: "2334",
      address: "http",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
    {
      name: "2334",
      address: "http",
      repo: "hhrrkgithub",
      tachStack: "React TailwindCSS",
    },
  ],
}));

export default useProjectStore;
