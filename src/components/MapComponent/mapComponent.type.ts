import { LatLng, LeafletEventHandlerFn, Map } from "leaflet";
import { ILocationMarkerData } from "../../interfaces/location.interface"; 

export interface IMapComponentRequiredProps {
    initialPosition: LatLng,
    initialZoom: number,
    markersData: ILocationMarkerData[]
}

export interface IMapComponentOptionalProps {
    minZoom: number,
    maxZoom: number,
    placeholder: string,
    whenReady: () => void,
    whenCreated: (map: Map) => void,
    onClick: LeafletEventHandlerFn | null,
    onMoveEnd: LeafletEventHandlerFn | null,
}

export interface IMapComponentProps extends IMapComponentOptionalProps, IMapComponentRequiredProps {}