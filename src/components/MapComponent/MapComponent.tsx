import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IMapComponentOptionalProps, IMapComponentProps } from "./mapComponent.type";
import 'leaflet/dist/leaflet.css';
import MapEvents from "./MapEvents";
import Markers from "./Markers/Markers";

const defaultProps: IMapComponentOptionalProps = {
    minZoom: 3,
    maxZoom: 20,
    placeholder: 'Carte de France',
    renderMarkerColor: undefined,
    renderMarkerPopup: () => null,
    whenReady: () => {},
    whenCreated: () => {},
    onClick: null,
    onMoveEnd: null
}

const MapComponent = ({
    initialPosition,
    initialZoom,
    markersData,
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
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100wh' }}
        minZoom={minZoom}
        maxZoom={maxZoom}
        placeholder={<p>{placeholder}</p>}
        whenReady={whenReady}
        whenCreated={whenCreated}
        >
            <MapEvents onClick={onClick || undefined} onMoveEnd={onMoveEnd || undefined} />
            <Markers markersData={markersData} renderPopupContent={renderMarkerPopup} renderMarkerColor={renderMarkerColor}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer> 
    )
}

MapComponent.defaultProps = defaultProps;

export default MapComponent;