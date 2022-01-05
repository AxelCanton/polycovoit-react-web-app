import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { LatLngBounds } from "leaflet";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { LOCATIONS_CREATE_URL, LOCATIONS_FETCH_BY_COORD_URL, LOCATIONS_FETCH_BY_USER_URL } from "../config/routes";
import { ILocationCreateBody, ILocationSuccessFetchResponse } from "../interfaces/location.interface";
import { locationsActions } from "../slices/LocationsSlice";
import { makeUrl } from "../utils/makeUrl";

export const SUCCESS_CREATE_MESSAGE = 'Création réussie !';
const FAILURE_CREATE_MESSAGE = 'Création échouée, veuillez réessayer plus tard.'

export const locationFetchThunk = (bounds: LatLngBounds): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.locationFetchStart());

    const url = makeUrl(LOCATIONS_FETCH_BY_COORD_URL, {
        ne_lat: bounds.getNorthEast().lat,
        ne_long: bounds.getNorthEast().lng,
        sw_lat: bounds.getSouthWest().lat,
        sw_long: bounds.getSouthWest().lng
    })

    axiosInstance.get(url)
    .then((response: AxiosResponse<ILocationSuccessFetchResponse[]>) => {
        dispatch(locationsActions.locationFetchSuccess(response.data));
    })
    .catch((error: AxiosError) => {

    });
}

export const locationCreateThunk = (city: string, postalCode: number, latitude: number, longitude: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.locationCreateStart());
    
    const body: ILocationCreateBody = {
        latitude,
        longitude,
        postalCode,
        city
    }
    axiosInstance.post(LOCATIONS_CREATE_URL, body)
    .then(
        (response: AxiosResponse) => {
        if(response.status === 201) {
            dispatch(locationsActions.locationCreateSuccess(SUCCESS_CREATE_MESSAGE));
        }
    })
    .catch((error: AxiosError) => {
        dispatch(locationsActions.locationCreateFailure(FAILURE_CREATE_MESSAGE))
    })
}

export const locationFetchByUserThunk = (userId: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.locationFetchStart());
    const url = makeUrl(LOCATIONS_FETCH_BY_USER_URL, {
        user: userId
    })

    axiosInstance.get(url)
    .then((response: AxiosResponse<ILocationSuccessFetchResponse[]>) => {
        if(response.status === 200) {
            dispatch(locationsActions.locationFetchSuccess(response.data))
        }
    })
    .catch((error) => {

    })

}