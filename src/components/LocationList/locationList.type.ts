import { ILocationWithoutUserData } from "../../interfaces/location.interface";

export interface ILocationListRequiredProps {
    locations: ILocationWithoutUserData[],
}

export interface ILocationListOptionalProps {
    onLocationClick: (location: ILocationWithoutUserData) => void
    title?: string
}

export interface ILocationListProps extends ILocationListRequiredProps, ILocationListOptionalProps {}