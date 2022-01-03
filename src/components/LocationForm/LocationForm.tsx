import { Autocomplete, autocompleteClasses, createFilterOptions, Popper, styled, TextField, Typography } from "@mui/material";
import { useCityDataRetriever } from "../../hooks/useCityDataRetriever";
import { IJsonLocation } from "../../interfaces/location.interface";
import Button from "../Button/Button";
import FormLayout from "../Layout/FormLayout/FormLayout";
import ListboxComponent from "./ListBoxComponent";
import { ILocationFormOptionalProps, ILocationFormProps } from "./locationForm.type";

const defaultProps: ILocationFormOptionalProps = {
    isLoading: false,
    title: 'Ajouter une addresse'
} 

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


const LocationForm = ({
    location,
    setLocation,
    isLoading,
    title,
    validate,
}: ILocationFormProps) => {
    const { data } = useCityDataRetriever();

    const isEmptySelection = location === null;

    const onLocationChange = (event: any, newValue: IJsonLocation | null) => {
        setLocation(newValue);
    }

    const renderTypographies = () => {
        return isEmptySelection
        ? <></>
        : (
            <>
                <Typography>Région : {location?.nom_region}</Typography>
                <Typography>Département : {location?.nom_departement}</Typography>
                <Typography>Ville : {location?.nom_commune}</Typography>
            </>
        )
    }

    return (
        <FormLayout title={title} footer={<Button isLoading={isLoading} onClick={validate} disabled={isEmptySelection}>Valider</Button>}>
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
            {renderTypographies()}
        </FormLayout>
    );
}

LocationForm.defaultProps = defaultProps;

export default LocationForm;