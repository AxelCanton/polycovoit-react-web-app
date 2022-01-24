import { ILatLng } from "../../interfaces/location.interface";

export interface IMapPlaceSelectorRequiredProps {
    isVisible: boolean,
    onClose: () => void,
    onValidate: (coordinate: ILatLng) => void
}

export interface IMapPlaceSelectorOptionalProps {
}

export interface IMapPlaceSelectorProps extends IMapPlaceSelectorOptionalProps, IMapPlaceSelectorRequiredProps {}