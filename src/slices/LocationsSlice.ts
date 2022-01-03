import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocation } from "../interfaces/location.interface";

interface LocationState {
    isLoading: boolean,
    locations: ILocation[],
    message: string,
    error: string
}

const initialState = {
    isLoading: false,
    locations: [] as ILocation[]
} as LocationState

const locationsSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        locationFetchStart(state) {
            state.isLoading = true;
        },
        locationFetchSuccess(state, action: PayloadAction<ILocation[]>) {
            state.isLoading = false;
            state.locations = action.payload;
        },
        locationFetchFailure(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        locationCreateStart(state) {
            state.isLoading = true;
        },
        locationCreateSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.message = action.payload;
        },
        locationCreateFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        reset(state) {
            state = initialState;
        }
        
    },
});

export const locationsReducer = locationsSlice.reducer;
export const locationsActions = locationsSlice.actions;