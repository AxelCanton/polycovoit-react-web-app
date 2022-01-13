import { IJsonLocation } from "../../interfaces/location.interface";

export interface ILocationSearchInputRequiredProps {
    setLocation: (location: IJsonLocation | null) => void
}

export interface ILocationSearchInputOptionalProps {
}

export interface ILocationSearchInputProps extends ILocationSearchInputOptionalProps, ILocationSearchInputRequiredProps {}