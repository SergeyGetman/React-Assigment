import { create } from "zustand";
import {
  SelectedTagsProps,
  multiselectProps,
  symbolProps,
} from "../types/storeTypes";

export const useSelectedTags = create<SelectedTagsProps>()((set) => ({
  selectedOptions: [],
  setSelectedOptions: (e: multiselectProps[]) =>
    set(() => ({ selectedOptions: e })),
  symbolsArray: [],
  setSymbolsArray: (value, lastID) => {
    set((state: any) => {
      const filteredArray = state.symbolsArray.filter(
        (symbol: symbolProps) => symbol.id !== lastID
      );
      return {
        symbolsArray: [...filteredArray, { symbol: value, id: lastID }],
      };
    });
  },
}));
