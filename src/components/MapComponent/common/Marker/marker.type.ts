import { LatLng } from "leaflet";

export interface IMarkerRequiredProps {
    position: LatLng
}

export interface IMarkerOptionalProps {}

export interface IMarkerProps extends IMarkerOptionalProps, IMarkerRequiredProps {}