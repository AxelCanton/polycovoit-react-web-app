import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useCityDataRetriever } from "../../../hooks/useCityDataRetriever";
import { IJsonLocation } from "../../../interfaces/location.interface";
import ListboxComponent from "../common/ListBoxComponent";
import { ILocationSearchInputOptionalProps, ILocationSearchInputProps } from "./locationSearchInput.type";
import { matchSorter } from 'match-sorter';
import { useState } from "react";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { StyledPopper } from "../common/SearchPopper";
import { IAutocompleteState } from "../common/interface";

const filterOptions = (options: IJsonLocation[], { inputValue }: IAutocompleteState) => matchSorter(
  options,
  inputValue,
  { keys: [
    { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'nom_commune' },
    { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'nom_region' },
    { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'nom_departement' },
    { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'code_postal' }
  ]
});

const defaultProps: ILocationSearchInputOptionalProps = {
  label: 'Addresse',
  setLocation: () => {},
  onInputChange: () => {},
  postalCodeOnly: false
}

const LocationSearchInput = ({
    label,
    setLocation,
    onInputChange,
    postalCodeOnly
}: ILocationSearchInputProps) => {
    const {
      filterStartWith
    } = useCityDataRetriever();
    const [options, setOptions] = useState<IJsonLocation[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const onLocationChange = (event: any, newValue: IJsonLocation | string | null) => {
      if(!(typeof newValue === "string")) {
        setLocation(newValue);
      }
    };

    const onStringInputChange = (event: React.SyntheticEvent, value: string) => {
      const regExp = new RegExp('^[0-9]*$', 'g');
      if(postalCodeOnly && !value.match(regExp)) {
        return;
      }

      setInputValue(value);
      if(value.length === 2) {
        setOptions(filterStartWith(value));
      } else if (value.length < 2) {
        setOptions([]);
      }
      onInputChange(value);
    };

    return (
        <Autocomplete
        disablePortal
        freeSolo
        inputValue={inputValue}
        onChange={onLocationChange}
        onInputChange={onStringInputChange}
        options={options}
        // @ts-ignore
        getOptionLabel={(option) => option.code_postal.toString()}
        // @ts-ignore
        renderOption={(props, option) => [props, `${option.code_postal}, ${option.nom_commune}, ${option.nom_departement}, ${option.nom_region}`]}
        renderInput={(params) => <TextField
          {...params}
          variant="outlined"
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <LocationCityIcon color="secondary"/>
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
};

LocationSearchInput.defaultProps = defaultProps;

export default LocationSearchInput;