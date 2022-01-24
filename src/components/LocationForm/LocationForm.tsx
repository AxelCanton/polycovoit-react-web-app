import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Button from "../Button/Button";
import FormLayout from "../Layout/FormLayout/FormLayout";
import LocationSearchInput from "../SearchInput/LocationSearchInput/LocationSearchInput";
import { ILocationFormOptionalProps, ILocationFormProps } from "./locationForm.type";
import { useEffect, useState } from "react";
import { IJsonLocation, ILatLng } from "../../interfaces/location.interface";
import ForeignCountry from "./ForeignCountry/ForeignCountry";

const defaultProps: ILocationFormOptionalProps = {
    isLoading: false,
    title: 'Ajouter une addresse'
} 

const RADIO_VALUE = {
    france: 'france',
    foreign: 'foreign'
}

const LocationForm = ({
    location,
    setLocation,
    isLoading,
    title,
    validate,
}: ILocationFormProps) => {
    const [radioValue, setRadioValue] = useState(RADIO_VALUE.france);
    const [city, setCity] = useState("");
    const [department, setDepartment] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [coordinate, setCoordinate] = useState<ILatLng | null>(null);

    const isEmptySelection = city === "" || country === "" || postalCode === 0 || coordinate === null;

    const resetStates = () => {
        setCity("");
        setDepartment("");
        setRegion("");
        setCountry("");
        setPostalCode(0);
        setCoordinate(null);
    }

    const renderTypographies = () => (
            <>
                {region !== "" && <Typography>Région : {region}</Typography>}
                {department !== "" && <Typography>Département : {department}</Typography>}
                {city !== "" && <Typography>Ville : {city}</Typography>}
            </>
    );


    const setSelectedLocationFrance = (loc: IJsonLocation | null) => {
        if (loc) {
            const latitude = loc.latitude;
            const longitude = loc.longitude;
            if (latitude === "" || longitude === "") {
            // Some data of the json do not have coordinates

            // TODO: specify the place with a marker
            } else {
                setCity(loc.nom_commune);
                setDepartment(loc.nom_departement);
                setRegion(loc.nom_region);
                setCountry('France');
                setPostalCode(loc.code_postal);
                setCoordinate({
                    latitude: latitude as number,
                    longitude: longitude as number
                });
            }
        } else {
            resetStates();
        }
    };

    const onValidate = () => coordinate && validate(city, department, region, country, postalCode, coordinate);

    useEffect(() => resetStates(), [radioValue]);

    return (
        <FormLayout title={title} footer={<Button isLoading={isLoading} onClick={onValidate} disabled={isEmptySelection}>Valider</Button>}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Lieu</FormLabel>
                <RadioGroup
                    aria-label="location"
                    name="radio-buttons-group"
                    value={radioValue}
                    onChange={(event) => setRadioValue(event.target.value)}
                >
                    <FormControlLabel value={RADIO_VALUE.france} control={<Radio />} label="France" />
                    <FormControlLabel value={RADIO_VALUE.foreign} control={<Radio />} label="Étranger" />
                </RadioGroup>
            </FormControl>
            
            {radioValue === RADIO_VALUE.france ? (
                <>
                <Typography sx={{ paddingBottom: 2 }} variant='h6'>France</Typography>
                <LocationSearchInput setLocation={setSelectedLocationFrance} />
                {renderTypographies()}
                </>
            ) : (
                <ForeignCountry
                city={city}
                country={country}
                coordinate={coordinate}
                setCity={setCity}
                setCountry={setCountry}
                setPostalCode={setPostalCode}
                setCoordinate={setCoordinate}
                />
            )}
        </FormLayout>
    );
}

LocationForm.defaultProps = defaultProps;

export default LocationForm;