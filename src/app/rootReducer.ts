import { loginReducer } from '../slices/LoginSlice';
import { locationsReducer } from '../slices/LocationsSlice';
import { notificationReducer } from '../slices/NotificationSlice';
import { reservationReducer } from '../slices/ReservationSlice';

export const rootReducer = {
    loginReducer,
    locationsReducer,
    notificationReducer,
    reservationReducer
}