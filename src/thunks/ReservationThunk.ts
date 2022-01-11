import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { reservationActions } from "../slices/ReservationSlice";
import axiosInstance from "../config/axios.config";
import { GET_ASKED_RESERVATIONS_URL, GET_WAITING_RESERVATIONS_URL, RESERVATION_URL } from "../config/routes";
import axios, { AxiosError, AxiosResponse } from "axios";
import { SeverityEnum } from "../utils/enum/severity.enum";
import { notificationActions } from "../slices/NotificationSlice";


const SUCCESS_CREATE_MESSAGE = 'Création réussie !';
const FAILURE_CREATE_MESSAGE = 'Création échouée, veuillez réessayer plus tard.'
const SUCCESS_ACCEPT_MESSAGE = 'Vous avez accepté la demande !'
const SUCCESS_REFUSE_MESSAGE = 'Vous avez refusé la demande !'
const FAILURE_ANSWER_MESSAGE = 'Réponse échouée, veuillez réessayer plus tard.'

export const askedReservationFetch = () : ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch,getState) => {
    dispatch(reservationActions.askedReservationFetchStart());
    console.log("func")
    axiosInstance.get(GET_ASKED_RESERVATIONS_URL)
    .then((response) => {
        console.log(response)
        if (response.status === 200) {
            dispatch(reservationActions.askedReservationFetchSuccess(response.data))
        } else {
            dispatch(reservationActions.askedReservationFetchFailure(response.data))
        }
    }).catch((error: AxiosError) => {
        dispatch(reservationActions.askedReservationFetchFailure(error.message))
    })
}

export const waitingReservationFetch = () : ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch,getState) => {
    dispatch(reservationActions.waitingReservationFetchStart());
    axiosInstance.get(GET_WAITING_RESERVATIONS_URL)
    .then((response) => {
        if (response.status === 200) {
            dispatch(reservationActions.waitingReservationFetchSuccess(response.data))
        } else {
            dispatch(reservationActions.waitingReservationFetchFailure(response.data))
        }
    }).catch((error: AxiosError) => {
        dispatch(reservationActions.waitingReservationFetchFailure(error.message))
    })
}

export const createReservationThunk = (locationId: number, message: string, date: Date) : ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch,getState) => {
    dispatch(reservationActions.createReservationStart());

    const body = {
        locationId: locationId,
        message: message,
        date: date
    }

    axiosInstance.post(RESERVATION_URL, body)
    .then((response: AxiosResponse) => {
        if (response.status === 201) {
            dispatch(reservationActions.createReservationSuccess(SUCCESS_CREATE_MESSAGE))
            dispatch(notificationActions.showNotification({message: SUCCESS_CREATE_MESSAGE, severity: SeverityEnum.success}))
        } else {
            dispatch(reservationActions.createReservationFailure(FAILURE_CREATE_MESSAGE))
            dispatch(notificationActions.showNotification({message: FAILURE_CREATE_MESSAGE, severity: SeverityEnum.error}))
        }
    }).catch((error: AxiosError) => {
        dispatch(reservationActions.createReservationFailure(FAILURE_CREATE_MESSAGE))
        dispatch(notificationActions.showNotification({message: FAILURE_CREATE_MESSAGE, severity: SeverityEnum.error}))
    })
        
}

export const answerReservationThunk = (reservationId: number, answer: boolean): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch,getState) => {
    dispatch(reservationActions.answerReservationStart());

    const body = {
        accepted: answer? 1:-1
    }

    axiosInstance.patch(RESERVATION_URL+"/"+reservationId, body)
    .then((response: AxiosResponse) => {
        if(response.status === 200){
            dispatch(reservationActions.answerReservationSuccess(answer? SUCCESS_ACCEPT_MESSAGE:SUCCESS_REFUSE_MESSAGE))
            dispatch(notificationActions.showNotification({message: answer? SUCCESS_ACCEPT_MESSAGE:SUCCESS_REFUSE_MESSAGE, severity: SeverityEnum.info}))
            dispatch(waitingReservationFetch())
        } else {
            dispatch(reservationActions.answerReservationFailure(FAILURE_ANSWER_MESSAGE))
            dispatch(notificationActions.showNotification({message: FAILURE_ANSWER_MESSAGE, severity: SeverityEnum.error}))
        }
    }).catch((error: AxiosError) => {
        dispatch(reservationActions.answerReservationFailure(FAILURE_ANSWER_MESSAGE))
            dispatch(notificationActions.showNotification({message: FAILURE_ANSWER_MESSAGE, severity: SeverityEnum.error}))
    })
}

