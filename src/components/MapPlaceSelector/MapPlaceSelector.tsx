import { Stack } from "@mui/material";
import MapComponent from "../MapComponent/MapComponent";
import DoneIcon from '@mui/icons-material/Done';
import { IMapPlaceSelectorProps } from "./mapPlaceSelector.type";
import { useState } from "react";
import { LeafletEventHandlerFn } from "leaflet";
import { ILatLng } from "../../interfaces/location.interface";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const MapPlaceSelector = ({
    isVisible,
    onClose,
    onValidate
}: IMapPlaceSelectorProps) => {
    const [tempLocation, setTempLocation] = useState<ILatLng | null>(null);

    const onMapClick: LeafletEventHandlerFn = (event) => {
        setTempLocation({
             // @ts-ignore
            latitude: event.latlng.lat,
             // @ts-ignore
            longitude: event.latlng.lng
        });
    };

    const onValidateClick = () => {
        if (tempLocation) {
            onValidate(tempLocation);
        }
    }

    return (
    <Modal isVisible={isVisible} close={onClose}>
        <Stack spacing={2}>
            <MapComponent onClick={onMapClick} width="600px" height="600px" markersData={tempLocation ? [tempLocation] : []}/>
            <Button endIcon={<DoneIcon />} disabled={tempLocation === null} onClick={onValidateClick}>Valider</Button>
        </Stack>
    </Modal>
    );
}

export default MapPlaceSelector;