import { LeafletEventHandlerFn, Map } from "leaflet";
import React from "react";
import { ILatLng } from "../../interfaces/location.interface";

export interface IMapComponentRequiredProps {
    markersData: ILatLng[]
}

export interface IMapComponentOptionalProps {
    initialPosition: ILatLng,
    initialZoom: number,
    minZoom: number,
    maxZoom: number,
    placeholder: string,
    height: string,
    width: string,
    renderMarkerColor?: (data: any) => string,
    renderMarkerPopup: (data: any) => React.ReactNode,
    whenReady: () => void,
    whenCreated: (map: Map) => void,
    onClick: LeafletEventHandlerFn | null,
    onMoveEnd: LeafletEventHandlerFn | null,
}

export interface IMapComponentProps extends IMapComponentOptionalProps, IMapComponentRequiredProps {}