import { multiselectProps } from "../types/storeTypes";

export const filterUniqueById = (inputArray: any) => {
  const uniqueIds = new Set();
  const uniqueArray = inputArray.filter((item: multiselectProps) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    return false;
  });
  return uniqueArray;
};

export const detectSymbol = (
  value: string,
  reg: RegExp,
  setSymbolsArray?: (a: string, b: string | number | undefined) => void,
  lastID?: number | string
) => {
  let match;
  if (value) {
    match = value.match(reg);
  }

  if (match) {
    if (match[0] === "+") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("+")[1].trim();
    } else if (match[0] === "-") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("-")[1].trim();
    } else if (match[0] === ",") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split(",")[1].trim();
    } else if (match[0] === "*") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("*")[1].trim();
    } else if (match[0] === "/") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("/")[1].trim();
    } else if (match[0] === "^") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("^")[1].trim();
    } else if (match[0] === "(") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split("(")[1].trim();
    } else if (match[0] === ")") {
      if (setSymbolsArray) {
        setSymbolsArray(match[0], lastID);
      }
      return value.split(")")[1].trim();
    }
  }
};
