import { Typography } from "@mui/material";
import Button from "../Button/Button";
import FormLayout from "../Layout/FormLayout/FormLayout";
import LocationSearchInput from "../LocationSearchInput/LocationSearchInput";
import { ILocationFormOptionalProps, ILocationFormProps } from "./locationForm.type";

const defaultProps: ILocationFormOptionalProps = {
    isLoading: false,
    title: 'Ajouter une addresse'
} 

const LocationForm = ({
    location,
    setLocation,
    isLoading,
    title,
    validate,
}: ILocationFormProps) => {
    const isEmptySelection = location === null;

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
            <LocationSearchInput setLocation={setLocation} />
            {renderTypographies()}
        </FormLayout>
    );
}

LocationForm.defaultProps = defaultProps;

export default LocationForm;