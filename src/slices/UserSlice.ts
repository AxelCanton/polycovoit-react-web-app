import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user.interface";

interface LoginState {
    isLoading: boolean,
    user: IUser
    error: string
}

const initialState = {
    isLoading: false,
} as LoginState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetchStart(state) {
            state.isLoading = true;
        },
        userFetchSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        userFetchError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        reset() {
            return initialState;
        }
        
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;