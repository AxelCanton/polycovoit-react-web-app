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
    postalCode: number | undefined,
    date: Date,
    askingUser: Object ,
    receivingUserGender: string | undefined,
    receivingUser: Object | undefined,

}