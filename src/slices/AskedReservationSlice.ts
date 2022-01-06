import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReservation } from "../components/Reservation/reservation.type";

interface AskedReservationState {
    isLoading: boolean,
    reservations: IReservation[],
    error: string
}

const initialState = {
    isLoading: false,
    reservations: [] as IReservation[],
} as AskedReservationState

const askedReservationSlice = createSlice({
    name: "askedReservation",
    initialState,
    reducers: {
        askedReservationFetchStart(state){
            state.isLoading = true;
        },
        askedReservationFetchSuccess(state, action: PayloadAction<IReservation[]>){
            state.isLoading = false;
            state.reservations = action.payload;
        }
    }
})

export const askedReservationReducer = askedReservationSlice.reducer;
export const askedReservationActions = askedReservationSlice.actions;