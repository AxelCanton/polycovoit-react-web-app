import { ILocationWithoutGender } from "./location.interface";

export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    isAdmin: boolean,
    askedReservations: string,
    receivedReservations: string,
    locations: ILocationWithoutGender[],
    speciality: ISpeciality;
};

export interface IPrivateUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string | undefined;
    gender: string  
    speciality: ISpeciality;
}

export interface ISpeciality {
    specialityName: string;
}

interface IToken {
    sub: number,
    iat: number,
    exp: number
}

export interface IDecodedToken extends IToken {
    email: string
}

export interface IDecodedRefreshToken extends IToken {
    refreshToken: boolean
}