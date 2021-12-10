import { LatLngExpression, Map } from "leaflet";
import React from "react";

export interface IMapComponentRequiredProps {
    initialPosition: LatLngExpression,
    initialZoom: number
}

export interface IMapComponentOptionalProps {
    minZoom: number,
    maxZoom: number,
    placeholder: string,
    whenReady: () => void,
    whenCreated: (map: Map) => void
}

export interface IMapComponentProps extends IMapComponentOptionalProps, IMapComponentRequiredProps {}