export interface IAskedReservationRequiredProps {
    reservation: IAskedReservation
}

export interface IAskedReservationOptionalProps {}

export interface IAskedReservationProps extends IAskedReservationRequiredProps, IAskedReservationOptionalProps {}

export interface IAskedReservation {
    accepted: number,
    id: number,
    message: string,
    postalCode: number | undefined,
    date: Date,
    askingUser: Object ,
    receivingUserGender: string | undefined,
    receivingUser: Object | undefined,

}