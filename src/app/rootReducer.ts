import { loginReducer } from '../slices/LoginSlice';
import { locationsReducer } from '../slices/LocationsSlice';
import { notificationReducer } from '../slices/NotificationSlice';
import { userReducer } from '../slices/UserSlice';
import { reservationReducer } from '../slices/ReservationSlice';
import { adminReducer } from '../slices/AdminSlice';

export const rootReducer = {
    loginReducer,
    locationsReducer,
    notificationReducer,
    userReducer,
    reservationReducer,
    adminReducer
}