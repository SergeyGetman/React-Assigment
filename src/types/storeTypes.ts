export interface symbolProps {
  symbol: string;
  id: string | number;
}

export type SelectedTagsProps = {
  selectedOptions: multiselectProps[];
  setSelectedOptions: (e: multiselectProps[]) => void;
  symbolsArray: symbolProps[];
  setSymbolsArray: (a: string, b: string | number | undefined) => void;
};

export interface multiselectProps {
  name: string;
  category: string;
  value: string | number;
  id: string | number;
}
