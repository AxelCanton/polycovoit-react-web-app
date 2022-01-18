import { LatLngBounds, Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { IJsonLocation, ILatLng, ILocation } from '../../interfaces/location.interface';
import { locationFetchThunk } from '../../thunks/LocationsThunk';
import Modal from '../../components/Modal/Modal'
import CreateReservation from '../../components/Reservation/CreateReservation';
import PopupMarker from './PopupMarker/PopupMarker';
import usePolytechSpecialities from '../../hooks/usePolytechSpecilities';
import { Paper, Box, Fab, Stack, Fade } from '@mui/material';
import Panel from './Panel/Panel';
import { Speciality } from '../../utils/enum/speciality.enum';
import ScrollableComponent from '../../components/Layout/ScrollableComponent/ScrollableComponent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '../../components/Transitions/Collapse/Collapse';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
}
const INITIAL_ZOOM = 6;

const MapPage = () => {
    const dispatch = useAppDispatch();
    const { locations } = useAppSelector((state) => state.locationsReducer);

    const isValid = useAppSelector((state) => state.loginReducer.isValid);

    const { retrieveColor, retrieveList } = usePolytechSpecialities();

    const [map, setMap] = useState<Map |null>(null);
    const [popupData, setPopupData] = useState<ILocation| null>(null);
    const [selectedSpecialities, setSelectedSpecialities] = useState<Speciality[]>(retrieveList());
    const [selectedLocation, setSelectedLocation] = useState<IJsonLocation | null>(null);
    const [showPanel, setShowPanel] = useState(false);
    
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

    useEffect(() => {
        if (selectedLocation && map) {
            const latitude = parseFloat(selectedLocation.latitude.toString());
            const longitude = parseFloat(selectedLocation.longitude.toString());
            map.setView([latitude, longitude], 10, {
                animate: true,
                duration: 1,
                easeLinearity: 0.25
            });
        }
    }, [map, selectedLocation]);

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
            setSelectedSpecialities(oldState);
        }
    }

    return (
        <>
        <Box sx={{ position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                top: '10vh',
                left: '5vh',
                zIndex: 'modal'
                }}>
                    <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                    >
                        <Fab color="secondary" variant="extended" size="small" aria-label="add" sx={{paddingLeft: 2}} onClick={() => setShowPanel(!showPanel)}>
                             Filtres
                            { showPanel ? <KeyboardArrowUpIcon />: <KeyboardArrowDownIcon /> }

                        </Fab>
                            <Collapse show={showPanel}>
                            <Paper variant="elevation" elevation={12} sx={{ height: '60vh'}}>
                                <ScrollableComponent>
                                    <Panel
                                    selectedSpecialities={selectedSpecialities}
                                    addSpeciality={addToSelectedSpecialities}
                                    removeSpeciality={removeFromSelectedSpecialities}
                                    setSelectedLocation={setSelectedLocation}
                                    />
                                </ScrollableComponent>
                            </Paper>
                        </Collapse>
                     </Stack>
            </Box>
                <MapComponent
                initialPosition={INITIAL_POSITION}
                initialZoom={INITIAL_ZOOM}
                markersData={locations.map(locRefactored => locRefactored.locations[0])}
                renderMarkerColor={renderMarkerColor}
                renderMarkerPopup={renderMarkerPopup}
                whenCreated={setMap}
                onMoveEnd={fetchLocations}
                height='93vh'
                />
        </Box>
        <Modal isVisible={popupData? true:false} close={() => closeReservationModal()} >
            <CreateReservation location={popupData} closeModal={() => closeReservationModal()}></CreateReservation>
        </Modal>
        <Modal isVisible={(typeof(isValid) === 'boolean') && !isValid} close={() => {}}>
            <RegistrationPage></RegistrationPage>
        </Modal>
        </>
    );

}

export default MapPage;

