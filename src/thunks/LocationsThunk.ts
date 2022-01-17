import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { LatLngBounds } from "leaflet";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { LOCATIONS_CREATE_URL, LOCATIONS_FETCH_BY_COORD_URL, LOCATION_DELETE_URL } from "../config/routes";
import { ILocationCreateBody, ILocationSuccessFetchResponse } from "../interfaces/location.interface";
import { locationsActions } from "../slices/LocationsSlice";
import { notificationActions } from "../slices/NotificationSlice";
import { SeverityEnum } from "../utils/enum/severity.enum";
import { Speciality } from "../utils/enum/speciality.enum";
import { makeUrl } from "../utils/makeUrl";
import { refactorLocations } from "../utils/refactorLocations";

export const SUCCESS_CREATE_MESSAGE = 'Création de l\'addresse réussie !';
export const SUCCESS_DELETE_MESSAGE = 'Suppression de l\'addresse réussie !';

export const FAILURE_CREATE_MESSAGE = 'Création de l\'addresse échouée, veuillez réessayer plus tard.';
export const FAILURE_DELETE_MESSAGE = 'Suppression de l\'addresse échouée, veuillez réessayer plus tard.';

export const FAILURE_FETCH_MESSAGE = 'Une erreur est survenue.'

export const locationFetchThunk = (bounds: LatLngBounds, specialities: Speciality[]): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.locationFetchStart());

    const url = makeUrl(LOCATIONS_FETCH_BY_COORD_URL, {
        ne_lat: bounds.getNorthEast().lat,
        ne_long: bounds.getNorthEast().lng,
        sw_lat: bounds.getSouthWest().lat,
        sw_long: bounds.getSouthWest().lng,
        specialities
    });

    axiosInstance.get(url)
    .then((response: AxiosResponse<ILocationSuccessFetchResponse[]>) => {

        dispatch(locationsActions.locationFetchSuccess(refactorLocations(response.data)));
    })
    .catch((error: AxiosError) => {
        dispatch(notificationActions.showNotification({
            message: FAILURE_FETCH_MESSAGE,
            severity: SeverityEnum.error
        }))
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
            dispatch(notificationActions.showNotification({
                message: SUCCESS_CREATE_MESSAGE,
                severity: SeverityEnum.success
            }));
        }
    })
    .catch((error: AxiosError) => {
        dispatch(locationsActions.locationCreateFailure(FAILURE_CREATE_MESSAGE));
        dispatch(notificationActions.showNotification({
            message: FAILURE_CREATE_MESSAGE,
            severity: SeverityEnum.error
        }));
    })
}

export const deleteLocationThunk = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.locationDeleteStart());

    axiosInstance.delete(LOCATION_DELETE_URL(id))
    .then((response: AxiosResponse) => {
        if(response.status === 200) {
            dispatch(locationsActions.locationDeleteSuccess(SUCCESS_DELETE_MESSAGE));
            dispatch(notificationActions.showNotification({
                message: SUCCESS_DELETE_MESSAGE,
                severity: SeverityEnum.success
            }));
        }
    })
    .catch((error) => {
        dispatch(locationsActions.locationDeleteFailure(FAILURE_DELETE_MESSAGE));
        dispatch(notificationActions.showNotification({
            message: FAILURE_DELETE_MESSAGE,
            severity: SeverityEnum.error
        }));
    })
}