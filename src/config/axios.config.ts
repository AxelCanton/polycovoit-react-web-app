import axiosStatic, { AxiosError, AxiosResponse } from 'axios';
import { store } from '../app/store';
import { loginActions } from '../slices/LoginSlice';
import { refreshThunk } from '../thunks/LoginThunk';

const EXPIRED_TOKEN_MESSAGE = 'Token expired';

const onRequestSuccess = (response: AxiosResponse): AxiosResponse => response

const onRequestError = async (error: AxiosError)  => {
    const getState = store.getState;
    const dispatch = store.dispatch;
    const response = error.response;
    const config = error.config;
    if(response && response.status === 401 && response.data.message === EXPIRED_TOKEN_MESSAGE) {
        const isSuccess = await dispatch(refreshThunk());
        if(isSuccess) {
            const accessToken = getState().loginReducer.accessToken;
            if(config.headers) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return await axiosInstance(config);
        } else {
            dispatch(loginActions.refreshTokenFailure('Error from server'))
        } 
    } else {
        return Promise.reject(error);
    }
}



const url = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
? 'http://localhost:5001/'
: 'http://162.38.114.223:5001/';


const axiosInstance = axiosStatic.create({
    baseURL: url,
});


axiosInstance.interceptors.response.use(onRequestSuccess, onRequestError);

export default axiosInstance;