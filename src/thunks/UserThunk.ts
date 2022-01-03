import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { RootState } from "../app/store";
import axiosInstance from "../config/axios.config";
import { USER_FETCH_URL } from "../config/routes";
import { IUser } from "../interfaces/user.interface";
import { userActions } from "../slices/UserSlice";

export const fetchUserThunk = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(userActions.userFetchStart());

    axiosInstance.get(USER_FETCH_URL(id))
    .then((response: AxiosResponse<IUser>) => {
        dispatch(userActions.userFetchSuccess(response.data));
    })
    .catch((error: AxiosError) => {
        dispatch(userActions.userFetchError('error'));
    });
};