import axios, { AxiosResponse } from "axios";
import { RootState } from "../app/store";
import { loginActions } from "../slices/LoginSlice";
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import axiosInstance from "../config/axios.config";
import { LOGIN_URL } from "../config/routes";

export const USER = 'user';
export const INVALID_CRED_ERROR_MESSAGE: string = 'Email ou mot de passe incorrect'

interface ILoginBody {
 email: string,
 password: string
};

export interface ILoginSuccessResponse {
    access_token: string,
    refresh_token: string
};

interface ILoginFailureResponse {
    statusCode: number,
    message: string
}

export type LoginResponse = ILoginFailureResponse | ILoginSuccessResponse;

export const loginThunk = (data: ILoginBody): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(loginActions.loginStart());

    axiosInstance.post(LOGIN_URL, data).then(
        (response: AxiosResponse<ILoginSuccessResponse>) => {
        if(response.status === 200) {
            const tokens = response.data;
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${tokens.access_token}`
            dispatch(loginActions.loginSuccess(tokens));
        }
    });
}