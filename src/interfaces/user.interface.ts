import { ILocation } from "./location.interface";

export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    isAdmin: boolean,
    askedReservations: string,
    receivedReservations: string,
    locations: ILocation[],
};

export interface IDecodedToken {
    sub: number,
    email: string,
}