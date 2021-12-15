import { ILatLng } from "../../../interfaces/location.interface";

export interface IMarkersRequiredProps {
    markersData: ILatLng[]
}

export interface IMarkersOptionalProps {
    renderPopupContent: (data: any) => React.ReactNode
}

export interface IMarkersProps extends IMarkersOptionalProps, IMarkersRequiredProps {}