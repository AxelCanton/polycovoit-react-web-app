import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { ICountryData, useCountryDataRetriever } from "../../../hooks/useCountryDataRetriever";
import { IAutocompleteState } from "../common/interface";
import ListboxComponent from "../common/ListBoxComponent";
import { StyledPopper } from "../common/SearchPopper";
import { ICountrySearchInputOptionalProps, ICountrySearchInputProps } from "./countrySearchInput.type";
import PublicIcon from '@mui/icons-material/Public';

const defaultProps: ICountrySearchInputOptionalProps = {
    label: 'Pays',
    setCountry: () => {},
    onInputChange: () => {}
}

const filterOptions = (options: ICountryData[], { inputValue }: IAutocompleteState) => matchSorter(
    options,
    inputValue,
    { keys: [
      { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'country_name_fr' },
      { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'country_name_en' },
    ]
  });

const CountrySearchInput = ({
    label,
    setCountry,
    onInputChange
}: ICountrySearchInputProps) => {
    const { countries } = useCountryDataRetriever();
    const [inputValue, setInputValue] = useState<string>('');

    const onLocationChange = (event: any, newValue: ICountryData | string | null) => {
      if(!(typeof newValue === "string")) {
        setCountry(newValue);
      }
    };

    const onStringInputChange = (event: React.SyntheticEvent, value: string) => {
      setInputValue(value);
      onInputChange(value);
    };
    return (
        <Autocomplete
        disablePortal
        freeSolo
        inputValue={inputValue}
        onChange={onLocationChange}
        onInputChange={onStringInputChange}
        options={countries}
        // @ts-ignore
        getOptionLabel={(option) => option.country_name_fr.toString()}
        // @ts-ignore
        renderOption={(props, option) => [props, `${option.country_name_fr}`]}
        renderInput={(params) => <TextField
          {...params}
          variant="outlined"
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon color="secondary"/>
              </InputAdornment>
            ),
          }}
          />}
        ListboxComponent={ListboxComponent}
        noOptionsText="Aucun résultat"
        PopperComponent={StyledPopper}
        filterOptions={filterOptions}
        />
    );
}

CountrySearchInput.defaultProps = defaultProps;

export default CountrySearchInput;