import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SeverityEnum } from "../utils/enum/severity.enum";

interface INotification {
    message: string,
    severity: SeverityEnum
}

interface NotificationState {
    message: string | null,
    severity: SeverityEnum
}

const initialState = {
    message: null,
    severity: SeverityEnum.info
} as NotificationState

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action: PayloadAction<INotification>) {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        reset(state) {
            state.message = null;
        }
    }
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;