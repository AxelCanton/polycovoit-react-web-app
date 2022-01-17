import { Autocomplete, autocompleteClasses, createFilterOptions, Popper, styled, TextField } from "@mui/material";
import { useCityDataRetriever } from "../../hooks/useCityDataRetriever";
import { IJsonLocation } from "../../interfaces/location.interface";
import ListboxComponent from "./ListBoxComponent";
import { ILocationSearchInputProps } from "./locationSearchInput.type";

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
      boxSizing: 'border-box',
      '& ul': {
        padding: 0,
        margin: 0,
      },
    },
  });


const filterOptions = createFilterOptions({
    matchFrom: 'start',
});

const LocationSearchInput = ({
    setLocation
}: ILocationSearchInputProps) => {
    const { data } = useCityDataRetriever();

    const onLocationChange = (event: any, newValue: IJsonLocation | null) => {
        setLocation(newValue);
    }

    return (
        <Autocomplete
        // @ts-ignore
        onChange={onLocationChange}
        options={data}
        // @ts-ignore
        getOptionLabel={(option) => option.code_postal.toString()}
        // @ts-ignore
        renderOption={(props, option) => [props, `${option.code_postal}, ${option.nom_commune}, ${option.nom_departement}, ${option.nom_region}`]}
        renderInput={(params) => <TextField {...params} label="Code postal" type="number" />}
        ListboxComponent={ListboxComponent}
        disableListWrap
        PopperComponent={StyledPopper}
        filterOptions={filterOptions}
        />
    );
};

export default LocationSearchInput;