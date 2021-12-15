import { LatLngBounds, Map } from 'leaflet';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MapComponent from '../../components/MapComponent/MapComponent';
import { ILatLng, ILocation } from '../../interfaces/location.interface';
import { locationFetchThunk } from '../../thunks/LocationsThunk';

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
}
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

    const renderMarkerPopup = (data: ILocation): React.ReactNode => {
        return (
            <>
                Ville : {data.city} <br/>
                Code postal : {data.postalCode}<br/>
                Genre: { data.userGender}<br/>
            </>
        )
    }

    return <MapComponent
    initialPosition={INITIAL_POSITION}
    initialZoom={INITIAL_ZOOM}
    markersData={locations}
    renderMarkerPopup={renderMarkerPopup}
    whenCreated={setMap}
    onMoveEnd={onMoveEnd}
    />;

}

export default MapPage;