import { ILocation } from "../../interfaces/location.interface";
import { IPrivateUser } from "../../interfaces/user.interface";

export interface IAskedReservationRequiredProps {
    reservation: IReservation
}

export interface IAskedReservationOptionalProps {}

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
    date: Date,
    askingUser?: IPrivateUser,
    receivingUser?: IPrivateUser,

}

export interface ICreateReservationRequiredProps {
    location: ILocation | null,
    closeModal: () => void
}

export interface ICreateReservationOptionalProps {}

export interface ICreateReservationProps extends ICreateReservationRequiredProps, ICreateReservationOptionalProps {}