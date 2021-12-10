import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IMapComponentOptionalProps, IMapComponentProps } from "./mapComponent.type";
import 'leaflet/dist/leaflet.css';
import { Map } from "leaflet";


const defaultProps: IMapComponentOptionalProps = {
    minZoom: 3,
    maxZoom: 20,
    placeholder: 'Carte de France',
    whenReady: () => {},
    whenCreated: () => {}
}

const MapComponent = ({
    initialPosition,
    initialZoom,
    minZoom,
    maxZoom,
    placeholder,
    whenReady,
    whenCreated
}: IMapComponentProps) => {

    return (
        <MapContainer
        center={initialPosition}
        zoom={initialZoom}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100wh' }}
        minZoom={minZoom}
        maxZoom={maxZoom}
        placeholder={<p>{placeholder}</p>}
        whenReady={whenReady}
        whenCreated={whenCreated}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer> 
    )
}

MapComponent.defaultProps = defaultProps;

export default MapComponent;