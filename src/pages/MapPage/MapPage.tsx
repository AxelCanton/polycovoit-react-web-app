import { LatLngBounds, Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { ILatLng, ILocation } from '../../interfaces/location.interface';
import { locationFetchThunk } from '../../thunks/LocationsThunk';
import Modal from '../../components/Modal/Modal'
import CreateReservation from '../../components/Reservation/CreateReservation';
import PopupMarker from './PopupMarker/PopupMarker';
import usePolytechSpecialities from '../../hooks/usePolytechSpecilities';
import { Grid } from '@mui/material';
import Panel from './Panel/Panel';
import { Speciality } from '../../utils/enum/speciality.enum';

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
}
const INITIAL_ZOOM = 6;

const MapPage = () => {
    const dispatch = useAppDispatch();
    const { locations } = useAppSelector((state) => state.locationsReducer);

    const { retrieveColor, retrieveList } = usePolytechSpecialities();

    const [map, setMap] = useState<Map |null>(null);
    const [popupData, setPopupData] = useState<ILocation| null>(null);
    const [selectedSpecialities, setSelectedSpecialities] = useState<Speciality[]>(retrieveList());
    
    const fetchLocations = () => {
        const currentMapBounds = map?.getBounds();
        if(currentMapBounds){
            dispatch(locationFetchThunk(currentMapBounds as LatLngBounds, selectedSpecialities));
        }
    };

    // Load the markers once when the map has loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchLocations(), [map]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchLocations(), [selectedSpecialities]);

    const renderMarkerPopup = (data: ILocation): React.ReactNode => {
        const locationsRefactored = locations.find(loc => loc.postalCode === data.postalCode);
        return locationsRefactored 
        ? <PopupMarker data={locationsRefactored} setSelectedPopupData={setPopupData} />
        : <></>
    };

    const renderMarkerColor = (data: ILocation): string => retrieveColor(data.userSpeciality);

    function closeReservationModal(){
        setPopupData(null);
    }

    const addToSelectedSpecialities = (speciality: Speciality) => {
        setSelectedSpecialities([...selectedSpecialities, speciality]);
    };

    const removeFromSelectedSpecialities = (speciality: Speciality) => {
        const index = selectedSpecialities.indexOf(speciality);
        if (index !== -1) {
            const oldState = [...selectedSpecialities];
            oldState.splice(index, 1);
            console.log(oldState)
            setSelectedSpecialities(oldState);
        }
    }

    return (
    <div>
        <Grid container>
            <Grid item xs={2}>
                <Panel
                selectedSpecialities={selectedSpecialities}
                addSpeciality={addToSelectedSpecialities}
                removeSpeciality={removeFromSelectedSpecialities} />
            </Grid>
            <Grid item  xs={10}>
                <MapComponent
                initialPosition={INITIAL_POSITION}
                initialZoom={INITIAL_ZOOM}
                markersData={locations.map(locRefactored => locRefactored.locations[0])}
                renderMarkerColor={renderMarkerColor}
                renderMarkerPopup={renderMarkerPopup}
                whenCreated={setMap}
                onMoveEnd={fetchLocations}
                />
            </Grid>
        </Grid>
        <Modal isVisible={popupData? true:false} close={() => closeReservationModal()} >
            <CreateReservation location={popupData} closeModal={() => closeReservationModal()}></CreateReservation>
        </Modal>
    </div>
    );

}

export default MapPage;

