import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { detectSymbol } from "../../services/helper";
import { Chip } from "@mui/material";
import { useSelectedTags } from "../../store";
import { multiselectProps, symbolProps } from "../../types/storeTypes";

export default function MultipleSelect({ data = [] }) {
  const [currentVal, setCurrentVal] = useState("");

  currentVal;

  const selectedOptions = useSelectedTags((state) => state.selectedOptions);
  const setSelectedOptions = useSelectedTags(
    (state) => state.setSelectedOptions,
  );
  const symbolsArray = useSelectedTags((state) => state.symbolsArray);
  const setSymbolsArray = useSelectedTags((state) => state.setSymbolsArray);
  const regex = /[+\-*/^(),]/;

  function createFilterOptions<T>(
    options: T[],
    state: { inputValue: string },
  ): T[] {
    const inputValue = state.inputValue.toLowerCase().trim();
    return options.filter((option: any) => {
      if (
        option.name.toLowerCase().includes(inputValue) ||
        inputValue[inputValue.length - 1].match(regex) ||
        inputValue.length === 0 ||
        option.name.toLowerCase().includes(detectSymbol(inputValue, regex))
      ) {
        return true;
      }
    });
  }

  const handleCurrentValue = (value: string) => {
    setCurrentVal(value);
    detectSymbol(value, regex);
  };

  const handleAutocompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any,
  ) => {
    const lastID = value.length > 0 ? value[value.length - 1].id : "";
    detectSymbol(currentVal, regex, setSymbolsArray, lastID);
    setSelectedOptions(value);
  };

  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={data}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option: multiselectProps) => (
          <li {...props}>
            {option.name} - {option.category}
          </li>
        )}
        value={selectedOptions}
        onChange={handleAutocompleteChange}
        defaultValue={[]}
        disableClearable={false}
        clearOnBlur={false}
        filterSelectedOptions
        filterOptions={createFilterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
        onInputChange={(e) =>
          handleCurrentValue((e.target as HTMLInputElement).value)
        }
        renderTags={(value: multiselectProps[], getTagProps: any) =>
          value.map((option: multiselectProps, index: number) => (
            <span {...getTagProps({ index })} key={option.name}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {symbolsArray.map((m: symbolProps) => {
                  if (m.id === option.id) {
                    return <span style={{ margin: "0 5px" }}>{m.symbol}</span>;
                  }
                })}
                <Chip
                  variant="outlined"
                  label={option.name}
                  {...getTagProps({ index })}
                />
              </div>
            </span>
          ))
        }
      />
    </Stack>
  );
}
