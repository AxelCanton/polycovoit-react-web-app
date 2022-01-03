import { ILocationMarkerData } from "../../../interfaces/location.interface";

export interface IMarkersRequiredProps {
    markersData: ILocationMarkerData[]
}

export interface IMarkersOptionalProps {
}

export interface IMarkersProps extends IMarkersOptionalProps, IMarkersRequiredProps {}