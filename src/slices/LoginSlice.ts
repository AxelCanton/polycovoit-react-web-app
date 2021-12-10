import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILoginSuccessResponse } from "../thunks/LoginThunk";

interface LoginState {
    isLoading: boolean,
    accessToken: string,
    refreshToken: string,
    isAuth: boolean,
    error: string
}

const initialState = {
    isLoading: false,
    isAuth: false
} as LoginState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<ILoginSuccessResponse>) {
            state.isLoading = false;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.isAuth = true;
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
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
        },
        refreshTokenFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        reset(state) {
            state = initialState;
        }
        
    },
});

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;