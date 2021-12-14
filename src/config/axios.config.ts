import axios from 'axios';
import axiosStatic, { AxiosError, AxiosResponse } from 'axios';
import { useAppDispatch } from '../app/hooks';
import { store } from '../app/store';
import { loginActions } from '../slices/LoginSlice';
import { ILoginSuccessResponse, LoginResponse, loginThunk } from '../thunks/LoginThunk';

const EXPIRED_TOKEN_MESSAGE = 'Token expired';

const onRequestSuccess = (response: AxiosResponse): AxiosResponse => response

const onRequestError = async (error: AxiosError)  => {
    const getState = store.getState;
    const dispatch = store.dispatch;
    const response = error.response;
    const config = error.config;
    console.log(config)
    if(response && response.status === 401 && response.data.message === EXPIRED_TOKEN_MESSAGE) {
        dispatch(loginActions.refreshTokenStart());
        const refreshToken = getState().loginReducer.refreshToken;
        const isRefreshSuccess: boolean = await axiosInstance.post('/auth/refresh', {
            refresh_token: refreshToken
        }).then((response: AxiosResponse<ILoginSuccessResponse>) => {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
            if(config.headers) {
                config.headers['Authorization'] = `Bearer ${response.data.access_token}`;
            }
            dispatch(loginActions.refreshTokenSuccess(response.data));
            return true;
        }).catch((error: AxiosError<number> | Error) => {
            dispatch(loginActions.reset());
            return false;
        });

        if(isRefreshSuccess) {
            console.debug(config)
            return await axiosInstance(config);
        } else {
            dispatch(loginActions.refreshTokenFailure('Error from server'))
        }
        
    }
}

const axiosInstance = axiosStatic.create({
    baseURL: 'http://localhost:5001/',
});

axiosInstance.interceptors.response.use(onRequestSuccess, onRequestError);

export default axiosInstance;