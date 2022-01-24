import { Gender } from "../utils/enum/gender.enum";
import { Speciality } from "../utils/enum/speciality.enum";

export interface ILatLng {
    latitude: number,
    longitude: number
}

export interface ILocation extends ILocationWithoutUserData {
    userGender: Gender,
    userSpeciality: Speciality
}

export interface ILocationWithoutUserData {
    id: number
    latitude: number,
    longitude: number,
    postalCode: number,
    city: string,
}

export interface ILocationRefactored {
    city: string,
    postalCode: number,
    locations: ILocation[]
}

export interface ILocationFetchBody {
    northEast: {
        latitude: number,
        longitude: number
    },
    southWest: {
        latitude: number,
        longitude: number
    }
}

export interface ILocationCreateBody {
    latitude: number,
    longitude: number,
    postalCode: number,
    city: string,
    department?: string,
    region?: string,
    country: string
}

export interface ILocationSuccessFetchResponse {
    id: number,
    latitude: number,
    longitude: number,
    postalCode: number,
    userGender: Gender,
    userSpeciality: Speciality,
    address?: string,
    city: string
}

export interface ILocationMarkerData {
    latitude: number,
    longitude: number,
    gender: string
}

export interface IJsonLocation {
    nom_commune: string,
    nom_departement: string,
    nom_region: string,
    code_postal: number,
    latitude: number | string,
    longitude: number | string,
}