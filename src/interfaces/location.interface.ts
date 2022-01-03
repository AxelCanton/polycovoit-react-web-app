export interface ILatLng {
    latitude: number,
    longitude: number
}

export interface ILocation {
    id: number
    latitude: number,
    longitude: number,
    postalCode: number,
    city: string,
    userGender: string,
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