import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAskedReservation } from "../components/AskedReservation/askedReservation.type";

interface AskedReservationState {
    isLoading: boolean,
    reservations: IAskedReservation[],
    error: string
}

const initialState = {
    isLoading: false,
    reservations: [] as IAskedReservation[],
} as AskedReservationState

const askedReservationSlice = createSlice({
    name: "askedReservation",
    initialState,
    reducers: {
        askedReservationFetchStart(state){
            state.isLoading = true;
        },
        askedReservationFetchSuccess(state, action: PayloadAction<IAskedReservation[]>){
            state.isLoading = false;
            state.reservations = action.payload;
        }
    }
})

export const askedReservationReducer = askedReservationSlice.reducer;
export const askedReservationActions = askedReservationSlice.actions;