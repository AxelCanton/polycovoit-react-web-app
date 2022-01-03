import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { askedReservationActions } from "../slices/AskedReservationSlice";
import axiosInstance from "../config/axios.config";
import { GET_ASKED_RESERVATIONS_URL } from "../config/routes";
import axios from "axios";



export const askedReservationFetch = () : ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch,getState) => {
    dispatch(askedReservationActions.askedReservationFetchStart);
    axiosInstance.get(GET_ASKED_RESERVATIONS_URL).then((response) => {
        if (response.status === 200) {
            console.log(response.data)
            dispatch(askedReservationActions.askedReservationFetchSuccess(response.data))
        }
    }
        )
}

