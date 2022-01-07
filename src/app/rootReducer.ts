import { loginReducer } from '../slices/LoginSlice';
import { locationsReducer } from '../slices/LocationsSlice';
import { notificationReducer } from '../slices/NotificationSlice';
import { askedReservationReducer } from '../slices/AskedReservationSlice';
import { userReducer } from '../slices/UserSlice';

export const rootReducer = {
    loginReducer,
    locationsReducer,
    notificationReducer,
    askedReservationReducer,
    userReducer,
}