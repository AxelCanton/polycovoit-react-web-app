import { AxiosError, AxiosResponse } from "axios";
import { RootState } from "../app/store";
import { loginActions } from "../slices/LoginSlice";
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import axiosInstance from "../config/axios.config";
import { LOGIN_URL } from "../config/routes";
import { notificationActions } from "../slices/NotificationSlice";
import { SeverityEnum } from "../utils/enum/severity.enum";
import { REFRESH_TOKEN } from "../App";
import { locationsActions } from "../slices/LocationsSlice";
import { errorHandler } from "../utils/errorHandling";

export const USER = 'user';
export const INVALID_CRED_ERROR_MESSAGE: string = 'Email ou mot de passe incorrect'

interface ILoginBody {
 email: string,
 password: string
};

export interface ILoginSuccessResponse {
    access_token: string,
    refresh_token: string,
    isAdmin: boolean,
    isValid: boolean
};

interface ILoginFailureResponse {
    statusCode: number,
    message: string
}

export type LoginResponse = ILoginFailureResponse | ILoginSuccessResponse;

export const loginThunk = (data: ILoginBody): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(loginActions.loginStart());
    axiosInstance.post(LOGIN_URL, data).then(
        (response: AxiosResponse<LoginResponse>) => {
        if(response.status === 200) {
            const tokens = response.data as ILoginSuccessResponse;
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${tokens.access_token}`;
            localStorage.setItem('refresh_token', tokens.refresh_token);
            dispatch(loginActions.loginSuccess(tokens));
        }
    })
    .catch((error: AxiosError) => {
        if(error.response && error.response.status === 401) {
            dispatch(notificationActions.showNotification({
                message: "Identifiants incorrects",
                severity: SeverityEnum.error
            }))
        } else {
            errorHandler(error,dispatch)
        }
        dispatch(loginActions.loginError("Failed"));
    });
};

export const refreshThunk = (): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(loginActions.refreshTokenStart());
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    return await axiosInstance.post('/auth/refresh', {
        refresh_token: refreshToken
    }).then((response: AxiosResponse<ILoginSuccessResponse>) => {
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        dispatch(loginActions.refreshTokenSuccess(response.data));
        return true;
    }).catch((error: AxiosError<number> | Error) => {
        dispatch(loginActions.reset());
        return false;
    });
};

export const disconnectThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(locationsActions.reset());
    dispatch(loginActions.reset());
    localStorage.removeItem(REFRESH_TOKEN);
    dispatch(notificationActions.showNotification({
      message: 'Déconnection réussie !',
      severity: SeverityEnum.success
    }));
};