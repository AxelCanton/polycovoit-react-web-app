import { IJsonLocation } from "../../interfaces/location.interface";

export interface ILocationSearchInputRequiredProps {
}

export interface ILocationSearchInputOptionalProps {
    label: string,
    setLocation: (location: IJsonLocation | null) => void,
    onInputChange: (value: string) => void,
    postalCodeOnly: boolean
}

export interface ILocationSearchInputProps extends ILocationSearchInputOptionalProps, ILocationSearchInputRequiredProps {}