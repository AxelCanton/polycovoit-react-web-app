import { ILocation, ILocationRefactored } from "../../../interfaces/location.interface";

export interface IPopupMarkerRequiredProps {
    data: ILocationRefactored
}

export interface IPopupMarkerOptionalProps {
    setSelectedPopupData?: (data: ILocation) => void
}

export interface IPopupMarkerProps extends IPopupMarkerRequiredProps, IPopupMarkerOptionalProps {}