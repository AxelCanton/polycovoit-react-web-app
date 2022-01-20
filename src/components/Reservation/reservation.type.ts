import { ILocation } from "../../interfaces/location.interface";
import { IPrivateUser } from "../../interfaces/user.interface";

export interface IAskedReservationRequiredProps {
    reservation: IReservation
}

export interface IAskedReservationOptionalProps {
    disabled: boolean,
}

export interface IAskedReservationProps extends IAskedReservationRequiredProps, IAskedReservationOptionalProps {}

export interface IWaitingReservationRequiredProps {
    reservation: IReservation
}

export interface IWaitingReservationOptionalProps {}

export interface IWaitingReservationProps extends IWaitingReservationRequiredProps, IWaitingReservationOptionalProps {}

export interface IReservation {
    accepted: number,
    id: number,
    message: string,
    postalCode: number,
    city: string,
    date: Date,
    askingUser?: IPrivateUser,
    receivingUser?: IPrivateUser,

}

export interface ICreateReservationRequiredProps {
    location: ILocation,
    onValidate: (id: number, message: string, date: Date) => void
}

export interface ICreateReservationOptionalProps {
    isLoading: boolean
}

export interface ICreateReservationProps extends ICreateReservationRequiredProps, ICreateReservationOptionalProps {}