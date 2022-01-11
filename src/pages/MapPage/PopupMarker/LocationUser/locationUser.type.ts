import { ILocation } from "../../../../interfaces/location.interface";

export interface ILocationUserRequiredProps {
    data: ILocation
}

export interface ILocationUserOptionalProps {
    setSelectedPopupData: (data: ILocation) => void
}

export interface ILocationUserProps extends ILocationUserRequiredProps, ILocationUserOptionalProps {}