import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { CREATE_USER_URL, GET_USERS_BY_SPECIALITY, MAKE_ADMIN_URL, RESERVATION_BY_DATE, USERS_FETCH_URL } from "../config/routes";
import { IUser } from "../interfaces/user.interface";
import { ICreateUser } from "../pages/SettingsPage/AddUser/addUser.types";
import { adminActions, IReservationForChart, PieChartData } from "../slices/AdminSlice";
import { notificationActions } from "../slices/NotificationSlice";
import { SeverityEnum } from "../utils/enum/severity.enum";

export const fetchUsersThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.usersFetchStart)

    axiosInstance.get(USERS_FETCH_URL).then((response:AxiosResponse<IUser[]>) => {
        dispatch(adminActions.usersFetchSuccess(response.data))
    }).catch((error:AxiosError) =>{
        dispatch(adminActions.usersFetchFailed(error.message))
    })
}

export const usersBySpecialityThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.usersBySpecialityStart)

    axiosInstance.get(GET_USERS_BY_SPECIALITY).then((response:AxiosResponse<PieChartData[]>) =>{
        dispatch(adminActions.usersBySpecialitySuccess(response.data))
    }).catch((error: AxiosError) => {
        dispatch(adminActions.usersBySpecialityFailed(error.message))
    })
}

export const reservationsByDateThunk = (date: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.reservationsByDateStart)

    axiosInstance.get(RESERVATION_BY_DATE(date)).then((response:AxiosResponse<IReservationForChart[]>) =>{
        dispatch(adminActions.reservationsByDateSuccess(response.data))
    }).catch((error: AxiosError) => {
        dispatch(adminActions.reservationsByDateFailed(error.message))
    })
}

export const makeAdminThunk = (username:string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.makeAdminStart)

    axiosInstance.patch(MAKE_ADMIN_URL(username)).then(() =>{
        dispatch(adminActions.makeAdminSuccess)
    }).catch((error: AxiosError) => {
        dispatch(adminActions.makeAdminFailed(error.message))
    })
}

export const addUserThunk = (user:ICreateUser): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.addUserStart)

    const body = user
    console.log(body)
    axiosInstance.post(CREATE_USER_URL,body).then((response) =>{
        console.log(response)
        dispatch(adminActions.addUserSuccess)
    }).catch((error: AxiosError) => {
        dispatch(notificationActions.showNotification({message: error.message, severity: SeverityEnum.error}))
        dispatch(adminActions.addUserFailed(error.message))
    })
}