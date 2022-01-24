import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { ButtonColor } from '../../../utils/enum/button.enum';
import Button from '../../Button/Button';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { IForeignCountryProps } from './foreignCountry.type';
import { ILatLng } from '../../../interfaces/location.interface';
import FormLayout from '../../Layout/FormLayout/FormLayout';
import StringInput from '../../StringInput/StringInput';
import CountrySearchInput from '../../SearchInput/CountrySearchInput/CountrySearchInput';
import DoneIcon from '@mui/icons-material/Done';
import { ICountryData } from '../../../hooks/useCountryDataRetriever';
import MapPlaceSelector from '../../MapPlaceSelector/MapPlaceSelector';

const ForeignCountry = ({
    city,
    country,
    coordinate,
    setCity,
    setCountry,
    setPostalCode,
    setCoordinate
}: IForeignCountryProps) => {
    const [showMapModal, setShowMapModal] = useState(false);

    const onCreateClick = () => setShowMapModal(true);

    const closeModal = () => setShowMapModal(false);

    const onCountryChange = (country: ICountryData | null) => {
        if (country) {
            setCountry(country.country_name_fr);
            setPostalCode(parseInt(country.number));
        } else {
            setCountry("");
            setPostalCode(0);
        }
    }

    const onValidate = (val: ILatLng) => {
        closeModal();
        setCoordinate(val);
    };

    return (
        <>
            <Typography variant='h6'>Étranger</Typography>
                <Typography sx={{ paddingBottom: 2 }} variant='subtitle1'>Pour créer une addresse à l'étranger, vous devez spécifier le pays, la ville, ainsi que la localisation sur la carte.</Typography>
                {coordinate ? (
                    <Button endIcon={<DoneIcon />} color={ButtonColor.secondary} onClick={onCreateClick} children={null}/>
                )
                : (
                    <Button endIcon={<AddLocationIcon />} color={ButtonColor.secondary} onClick={onCreateClick}>Créer</Button>
                )}
                {coordinate && (
                    <FormLayout>
                        <CountrySearchInput setCountry={onCountryChange}/>
                        <StringInput fullWidth label='Ville' value={city} onChange={setCity} />
                    </FormLayout>
                )}
            <MapPlaceSelector isVisible={showMapModal} onClose={closeModal} onValidate={onValidate}/>
        </>
    );
};

export default ForeignCountry;