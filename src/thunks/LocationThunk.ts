import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { locationActions } from "../slices/LocationSlice";

export const locationFetchThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    // dispatch(locationActions.locationFetchStart());
}