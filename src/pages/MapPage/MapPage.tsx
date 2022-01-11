import { LatLngBounds, Map } from 'leaflet';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { ILatLng, ILocation } from '../../interfaces/location.interface';
import { locationFetchThunk } from '../../thunks/LocationsThunk';
import Modal from '../../components/Modal/Modal'
import CreateReservation from '../../components/Reservation/CreateReservation';
import PopupMarker from './PopupMarker/PopupMarker';
import usePolytechSpecialities from '../../hooks/usePolytechSpecilities';

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
}
const INITIAL_ZOOM = 6;

const MapPage = () => {
    const dispatch = useAppDispatch();
    const { locations } = useAppSelector((state) => state.locationsReducer);
    const [map, setMap] = useState<Map |null>(null);

    const { retrieveColor } = usePolytechSpecialities();

    const [popupData, setPopupData] = useState<ILocation| null>(null);

    const onMoveEnd = () => {
        const currentMapBounds = map?.getBounds();
        if(currentMapBounds){
            dispatch(locationFetchThunk(currentMapBounds as LatLngBounds));
        }
    }

    const renderMarkerPopup = (data: ILocation): React.ReactNode => {
        const locationsRefactored = locations.find(loc => loc.postalCode === data.postalCode);
        return locationsRefactored 
        ? <PopupMarker data={locationsRefactored} setSelectedPopupData={setPopupData} />
        : <></>
    };

    const renderMarkerColor = (data: ILocation): string => retrieveColor(data.userSpeciality);

    function closeReservationModal(){
        setPopupData(null)
    }

    return (
    <div>
        <MapComponent
        initialPosition={INITIAL_POSITION}
        initialZoom={INITIAL_ZOOM}
        markersData={locations.map(locRefactored => locRefactored.locations[0])}
        renderMarkerColor={renderMarkerColor}
        renderMarkerPopup={renderMarkerPopup}
        whenCreated={setMap}
        onMoveEnd={onMoveEnd}
        />

        <Modal isVisible={popupData? true:false} close={() => closeReservationModal()} >
            <CreateReservation location={popupData} closeModal={() => closeReservationModal()}></CreateReservation>
        </Modal>
    </div>
    );

}

export default MapPage;

