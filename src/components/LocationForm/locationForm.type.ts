import { ILatLng, ILocationCreateBody } from "../../interfaces/location.interface";

export interface ILocationFormRequiredProps {
    location: ILocationCreateBody | null,
    setLocation: (newLocation: ILocationCreateBody | null) => void,
    validate: (city: string, department: string, region: string, country: string, postalCode: number, coordinate: ILatLng) => void
}

export interface ILocationFormOptionalProps {
    isLoading: boolean,
    title: string
}

export interface ILocationFormProps extends ILocationFormRequiredProps, ILocationFormOptionalProps {}