import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLng } from "leaflet";

interface LocationState {
    isLoading: boolean,
    locations: LatLng[],
    error: string
}

const initialState = {
    isLoading: false,
} as LocationState

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        locationFetchStart(state) {
            state.isLoading = true;
        },
        locationFetchSuccess(state, action: PayloadAction<LatLng[]>) {
            state.isLoading = false;
            state.locations = action.payload;
        },
        locationFetchFailure(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        reset(state) {
            state = initialState;
        }
        
    },
});

export const locationReducer = locationSlice.reducer;
export const locationActions = locationSlice.actions;