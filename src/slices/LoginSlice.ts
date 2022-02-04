import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IDecodedToken } from "../interfaces/user.interface";
import { ILoginSuccessPayload, ILoginSuccessResponse } from "../thunks/LoginThunk";
import jwt_decode from "jwt-decode";


interface LoginState {
    isLoading: boolean,
    accessToken: string,
    decodedToken: IDecodedToken
    refreshToken: string,
    rememberUser: boolean,
    isAuth: boolean,
    isAdmin: boolean,
    isValid: boolean,
    error?: string
}

const initialState = {
    isLoading: false,
    isAuth: false,
    isAdmin: false,
    isValid: false,
    rememberUser: false,
} as LoginState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<ILoginSuccessPayload>) {
            state.isLoading = false;
            state.isAuth = true;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.isAdmin = action.payload.isAdmin;
            state.isValid = action.payload.isValid;
            state.rememberUser = action.payload.rememberUser;
            state.decodedToken = jwt_decode(action.payload.access_token);
        },
        loginError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        refreshTokenStart(state) {
            state.isLoading = true;
        },
        refreshTokenSuccess(state,  action: PayloadAction<ILoginSuccessResponse>) {
            state.isLoading = false;
            state.isAuth = true;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.isAdmin = action.payload.isAdmin;
            state.isValid = action.payload.isValid;
            state.decodedToken = jwt_decode(action.payload.access_token);

        },
        refreshTokenFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        validate(state) {
            state.isValid = true;
        },
        remember(state) {
            state.rememberUser = true;
        },
        reset() {
            return initialState;
        }
        
    },
});

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;