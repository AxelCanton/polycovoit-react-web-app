import { BoundsExpression, LatLng, LatLngBounds, LatLngExpression, Map } from 'leaflet';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { ILocation, ILocationMarkerData } from '../../interfaces/location.interface';
import { locationFetchThunk } from '../../thunks/LocationsThunk';

const INITIAL_POSITION: LatLng = new LatLng(46, 3);
const INITIAL_ZOOM = 6;

const MapPage = () => {
    const dispatch = useAppDispatch();
    const { isLoading, locations, error } = useAppSelector((state) => state.locationsReducer);
    const [map, setMap] = useState<Map |null>(null);
    const [mapBounds, setMapBounds] = useState<LatLngBounds | null>(null)

    const onMoveEnd = () => {
        const currentMapBounds = map?.getBounds();
        if(currentMapBounds){
            dispatch(locationFetchThunk(currentMapBounds as LatLngBounds));
        }
    }

    const toLocationMarkerData = (location: ILocation) => {
        const markerData: ILocationMarkerData = {
            latitude: location.latitude,
            longitude: location.longitude,
            gender: location.userGender
        }
        return markerData;
    }

    return <MapComponent
    initialPosition={INITIAL_POSITION}
    initialZoom={INITIAL_ZOOM}
    markersData={locations.map(toLocationMarkerData)}
    whenCreated={setMap}
    onMoveEnd={onMoveEnd}
    />;

}

export default MapPage;