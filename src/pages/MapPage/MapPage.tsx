import { LatLngExpression, Map } from 'leaflet';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { locationFetchThunk } from '../../thunks/LocationThunk';

const INITIAL_POSITION: LatLngExpression = [46.0, 3.0];
const INITIAL_ZOOM = 6;

const MapPage = () => {
    const dispatch = useAppDispatch();
    const { isLoading, locations, error } = useAppSelector((state) => state.locationReducer);
    const [map, setMap] = useState<Map | null>(null);


    const onMapLoaded = () => {
        dispatch(locationFetchThunk());
    }

    return <MapComponent
    initialPosition={INITIAL_POSITION}
    initialZoom={INITIAL_ZOOM}
    whenReady={onMapLoaded}
    whenCreated={setMap}
    />;
}

export default MapPage;