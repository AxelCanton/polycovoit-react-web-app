import { Speciality } from "../utils/enum/speciality.enum";

export interface ILatLng {
    latitude: number,
    longitude: number
}

export interface ILocation extends ILocationWithoutGender {
    userGender: string,
    userSpeciality: Speciality
}

export interface ILocationWithoutGender {
    id: number
    latitude: number,
    longitude: number,
    postalCode: number,
    city: string,
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
    city: string
}

export interface ILocationSuccessFetchResponse {
    id: number,
    latitude: number,
    longitude: number,
    postalCode: number,
    userGender: string,
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