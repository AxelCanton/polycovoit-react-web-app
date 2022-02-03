import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { CREATE_USER_URL, GET_USERS_BY_SPECIALITY, MAKE_ADMIN_URL, RESERVATION_BY_DATE, USERS_FETCH_URL, VERIFY_ADMIN } from "../config/routes";
import { IUser } from "../interfaces/user.interface";
import { ICreateUser } from "../pages/SettingsPage/AddUser/addUser.types";
import { adminActions, IReservationForChart, PieChartData } from "../slices/AdminSlice";
import { notificationActions } from "../slices/NotificationSlice";
import { SeverityEnum } from "../utils/enum/severity.enum";
import { errorHandler } from "../utils/errorHandling";

const ADMIN_CREATED_MESSAGE = "Le nouvel admin à bien été ajouté !"
const USER_CREATED_MESSAGE = "Le nouel utilisateur à été créé !"

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
        dispatch(notificationActions.showNotification({message: ADMIN_CREATED_MESSAGE, severity: SeverityEnum.success}))
    }).catch((error: AxiosError) => {
        dispatch(adminActions.makeAdminFailed(error.message))
        errorHandler(error, dispatch)
    })
}

export const addUserThunk = (user:ICreateUser): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) =>{
    dispatch(adminActions.addUserStart)

    const body = user
    axiosInstance.post(CREATE_USER_URL,body).then((response) =>{
        dispatch(adminActions.addUserSuccess)
        dispatch(notificationActions.showNotification({message: USER_CREATED_MESSAGE, severity: SeverityEnum.success}))
    }).catch((error: AxiosError) => {
        errorHandler(error, dispatch)
        dispatch(adminActions.addUserFailed(error.message))
    })
}

export const verifyAdminThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    axiosInstance.get(VERIFY_ADMIN).then((response) => {
        dispatch(adminActions.verifyAdmin(response.data))
    }).catch(() => {
    })
}