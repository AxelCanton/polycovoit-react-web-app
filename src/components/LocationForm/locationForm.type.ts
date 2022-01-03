import { IJsonLocation } from "../../interfaces/location.interface";

export interface ILocationFormRequiredProps {
    location: IJsonLocation | null,
    setLocation: (newLocation: IJsonLocation | null) => void,
    validate: () => void
}

export interface ILocationFormOptionalProps {
    isLoading: boolean,
    title: string
}

export interface ILocationFormProps extends ILocationFormRequiredProps, ILocationFormOptionalProps {}