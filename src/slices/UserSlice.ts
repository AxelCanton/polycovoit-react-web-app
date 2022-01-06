import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user.interface";

interface LoginState {
    isLoading: boolean
    user: IUser
    success: boolean
    error: string
}

const initialState = {
    isLoading: false,
    success: false
} as LoginState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetchStart(state) {
            state.isLoading = true;
            state.success = false;
        },
        userFetchSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.user = action.payload;
            state.success = true;
        },
        userFetchError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        userDeleteStart(state) {
            state.isLoading = true;
            state.success = false;
        },
        userDeleteSuccess(state) {
            state.isLoading = false;
            state.success = true;
        },
        userDeleteError(state, action: PayloadAction<string>) {
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