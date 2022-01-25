import { Gender } from "../utils/enum/gender.enum";
import { Speciality } from "../utils/enum/speciality.enum";
import { ILocationWithoutUserData } from "./location.interface";

export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    gender: Gender,
    isAdmin: boolean,
    askedReservations: string,
    receivedReservations: string,
    locations: ILocationWithoutUserData[],
    speciality: Speciality;
    isValid: boolean;
    creationDate: Date;
};

export interface IPrivateUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string | undefined;
    gender: Gender  
    speciality: Speciality;
    isValid: boolean;
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