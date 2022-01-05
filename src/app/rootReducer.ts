import { loginReducer } from '../slices/LoginSlice';
import { locationsReducer } from '../slices/LocationsSlice';
import { notificationReducer } from '../slices/NotificationSlice';
import { askedReservationReducer } from '../slices/AskedReservationSlice';

export const rootReducer = {
    loginReducer,
    locationsReducer,
    notificationReducer,
    askedReservationReducer
}