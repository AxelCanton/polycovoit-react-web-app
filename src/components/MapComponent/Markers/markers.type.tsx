import { ILatLng } from "../../../interfaces/location.interface";

export interface IMarkersRequiredProps {
    markersData: ILatLng[]
}

export interface IMarkersOptionalProps {
    renderMarkerColor: ((data: any) => string) | null
    renderPopupContent: ((data: any) => React.ReactNode) | null
}

export interface IMarkersProps extends IMarkersOptionalProps, IMarkersRequiredProps {}