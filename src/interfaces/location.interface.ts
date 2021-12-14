export interface ILocation {
    id: number
    latitude: number,
    longitude: number,
    postalCode: number,
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
    address: string,
    city: string,
    postalCode: number,
}

export interface ILocationSuccessFetchResponse {
    id: number,
    latitude: number,
    longitude: number,
    postalCode: number,
    userGender: string,
    address?: string,
    city?: string
}

export interface ILocationMarkerData {
    latitude: number,
    longitude: number,
    gender: string
}