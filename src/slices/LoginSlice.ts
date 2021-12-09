import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LoginState {
    isLoading: boolean,
    token: string,
    error: string
}

const initialState = {
    isLoading: false,
} as LoginState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.token = action.payload;
        },
        loginError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;