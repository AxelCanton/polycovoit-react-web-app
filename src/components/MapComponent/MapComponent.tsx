import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { IMapComponentOptionalProps, IMapComponentProps } from "./mapComponent.type";
import 'leaflet/dist/leaflet.css';
import MapEvents from "./MapEvents";
import Markers from "./Markers/Markers";
import { ILatLng } from "../../interfaces/location.interface";

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
};

const INITIAL_ZOOM = 6;


const defaultProps: IMapComponentOptionalProps = {
    initialPosition: INITIAL_POSITION,
    initialZoom: INITIAL_ZOOM,
    minZoom: 3,
    maxZoom: 20,
    placeholder: 'Carte de France',
    renderMarkerColor: undefined,
    renderMarkerPopup: () => null,
    whenReady: () => {},
    whenCreated: () => {},
    onClick: null,
    onMoveEnd: null,
    height: "",
    width: ""
}

const MapComponent = ({
    initialPosition,
    initialZoom,
    markersData,
    height,
    width,
    renderMarkerColor,
    renderMarkerPopup,
    minZoom,
    maxZoom,
    placeholder,
    whenReady,
    whenCreated,
    onClick,
    onMoveEnd
}: IMapComponentProps) => {
    return (
        <MapContainer
        tap={false}
        center={[initialPosition.latitude, initialPosition.longitude]}
        zoom={initialZoom}
        style={{ height, width }}
        minZoom={minZoom}
        maxZoom={maxZoom}
        placeholder={<p>{placeholder}</p>}
        whenReady={whenReady}
        whenCreated={whenCreated}
        zoomControl={false}
        >
            <MapEvents onClick={onClick || undefined} onMoveEnd={onMoveEnd || undefined} />
            <Markers markersData={markersData} renderPopupContent={renderMarkerPopup} renderMarkerColor={renderMarkerColor}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomleft'/>
        </MapContainer> 
    )
}

MapComponent.defaultProps = defaultProps;

export default MapComponent;