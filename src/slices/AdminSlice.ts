import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user.interface";

interface AdminState {
    isLoading: boolean;
    users?: IUser[];
    success: boolean;
    error?: string;
    usersBySpeciality?: PieChartData[],
    reservationsAfterDate?: IReservationForChart[]
}
export interface PieChartData {
    id: string;
    label: string;
    value: number;
}

export interface IReservationForChart{
    id: number;
    date: Date;
    speciality: string;
}

const initialState = {
    isLoading: false,
    success: false
} as AdminState;

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        usersFetchStart(state){
            state.isLoading = true;
        },
        usersFetchSuccess(state, action: PayloadAction<IUser[]>){
            state.isLoading = false;
            state.success = true;
            state.users = action.payload;
        },
        usersFetchFailed(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.success = false;
            state.error = action.payload;
        },
        usersBySpecialityStart(state){
            state.isLoading = true;
        },
        usersBySpecialitySuccess(state, action: PayloadAction<PieChartData[]>){
            state.isLoading = false;
            state.usersBySpeciality = action.payload;
            state.success = true;
        },
        usersBySpecialityFailed(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.success = false;
            state.error = action.payload;
        },
        reservationsByDateStart(state){
            state.isLoading = true;
        },
        reservationsByDateSuccess(state, action: PayloadAction<IReservationForChart[]>){
            state.isLoading = false;
            state.reservationsAfterDate = action.payload;
            state.success = true;
        },
        reservationsByDateFailed(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.success = false;
            state.error = action.payload;
        },
        makeAdminStart(state){
            state.isLoading = true;
        },
        makeAdminSuccess(state){
            state.isLoading = true;
            state.success = true;
        },
        makeAdminFailed(state, action: PayloadAction<string>){
            state.isLoading = true;
            state.success = false;
            state.error = action.payload;
        },
        addUserStart(state){
            state.isLoading = true;
        },
        addUserSuccess(state){
            state.isLoading = true;
            state.success = true;
        },
        addUserFailed(state, action: PayloadAction<string>){
            state.isLoading = true;
            state.success = false;
            state.error = action.payload;
        },
    }
})

export const adminReducer = adminSlice.reducer;
export const adminActions = adminSlice.actions;