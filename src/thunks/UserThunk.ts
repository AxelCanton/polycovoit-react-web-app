import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { USER_DELETE_URL, USER_FETCH_URL, USER_VALIDATE_URL } from "../config/routes";
import { IUser } from "../interfaces/user.interface";
import { loginActions } from "../slices/LoginSlice";
import { notificationActions } from "../slices/NotificationSlice";
import { userActions } from "../slices/UserSlice";
import { SeverityEnum } from "../utils/enum/severity.enum";

const SUCCESS_VALIDATE_MESSAGE = "Votre compte a bien été validé !"

export const fetchUserThunk = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(userActions.userFetchStart());

    axiosInstance.get(USER_FETCH_URL(id))
    .then((response: AxiosResponse<IUser>) => {
        dispatch(userActions.userFetchSuccess(response.data));
        dispatch(loginActions.validatedAccount(response.data.isValid))
    })
    .catch((error: AxiosError) => {
        dispatch(userActions.userFetchError('error'));
    });
};

export const deleteUserThunk = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(userActions.userDeleteStart());

    axiosInstance.delete(USER_DELETE_URL(id))
    .then((response: AxiosResponse) => {
        dispatch(userActions.userDeleteSuccess());
        dispatch(loginActions.reset());  
        dispatch(notificationActions.showNotification({
            message: 'Compte supprimé',
            severity: SeverityEnum.success
            }));
    })
    .catch((error: AxiosError) => {
        dispatch(userActions.userDeleteError('error'));
        dispatch(notificationActions.showNotification({
            message: 'Une erreur est survenue, veuillez réessayer ultérieurement.',
            severity: SeverityEnum.error
            }));
    });
};

export const validateUser = (id: number, gender: string):ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(userActions.userValidateStart());
    console.log(gender)
    const body = {
        gender: gender
    }

    axiosInstance.patch(USER_VALIDATE_URL(id), body)
    .then((response: AxiosResponse) =>{
        dispatch(userActions.userValidateSuccess(response.data));
        dispatch(notificationActions.showNotification({message: SUCCESS_VALIDATE_MESSAGE, severity: SeverityEnum.info}))
        dispatch(loginActions.validatedAccount(true))
    }).catch((error: AxiosError) => {
        dispatch(userActions.userValidateError('error'));
        dispatch(notificationActions.showNotification({
            message: 'Une erreur est survenue, veuillez réessayer ultérieurement.',
            severity: SeverityEnum.error
            }));
    })
}