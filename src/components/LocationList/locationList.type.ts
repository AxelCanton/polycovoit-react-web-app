import { ILocationWithoutGender } from "../../interfaces/location.interface";

export interface ILocationListRequiredProps {
    locations: ILocationWithoutGender[],
}

export interface ILocationListOptionalProps {
    onLocationClick: (location: ILocationWithoutGender) => void
    title?: string
}

export interface ILocationListProps extends ILocationListRequiredProps, ILocationListOptionalProps {}