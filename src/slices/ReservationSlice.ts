import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReservation } from "../components/Reservation/reservation.type";

interface reservationState {
    isLoading: boolean,
    askedReservations: IReservation[],
    waitingReservations: IReservation[],
    resultMessage: string,
    error: string
}

const initialState = {
    isLoading: false,
    askedReservations: [] as IReservation[],
    waitingReservations: [] as IReservation[]
} as reservationState

const reservationSlice = createSlice({
    name: "askedReservation",
    initialState,
    reducers: {
        askedReservationFetchStart(state){
            state.isLoading = true;
        },
        askedReservationFetchSuccess(state, action: PayloadAction<IReservation[]>){
            state.isLoading = false;
            state.askedReservations = action.payload;
        },
        askedReservationFetchFailure(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        waitingReservationFetchStart(state){
            state.isLoading = true;
        },
        waitingReservationFetchSuccess(state, action: PayloadAction<IReservation[]>){
            state.isLoading = false;
            state.waitingReservations = action.payload;
        },
        waitingReservationFetchFailure(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        createReservationStart(state){
            state.resultMessage = ""
            state.isLoading = true;
        },
        createReservationSuccess(state, action: PayloadAction<string>){
            state.resultMessage = action.payload;
            state.isLoading = false;
        },
        createReservationFailure(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.resultMessage = action.payload;
        },
        answerReservationStart(state){
            state.resultMessage = ""
        },
        answerReservationSuccess(state, action: PayloadAction<string>){
            state.resultMessage = action.payload;
        },
        answerReservationFailure(state, action: PayloadAction<string>){
            state.resultMessage = action.payload;
        }
    }
})

export const reservationReducer = reservationSlice.reducer;
export const reservationActions = reservationSlice.actions;