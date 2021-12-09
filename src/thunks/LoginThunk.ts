import axios, { AxiosResponse } from "axios";
import { RootState } from "../app/store";
import { loginActions } from "../slices/LoginSlice";
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'

export const USER = 'user';
export const INVALID_CRED_ERROR_MESSAGE: string = 'Email ou mot de passe incorrect'

interface ILoginBody {
 email: string,
 password: string
};

interface ILoginSuccessResponse {
    access_token: string,
    refresh_token: string
};

interface ILoginFailureResponse {
    statusCode: number,
    message: string
}

type LoginResponse = ILoginFailureResponse | ILoginSuccessResponse;

export const loginThunk = (data: ILoginBody): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(loginActions.loginStart());

    const response: AxiosResponse<LoginResponse> = await axios.post('/auth/login', data);
    if(response.status === 200) {
        console.log(response.data)
        const token = (response as AxiosResponse<ILoginSuccessResponse>).data.access_token;
        dispatch(loginActions.loginSuccess(token));
    }
    if(response.status === 401) {
        dispatch(loginActions.loginError(INVALID_CRED_ERROR_MESSAGE));
    }
}