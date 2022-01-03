import { loginReducer } from '../slices/LoginSlice';
import { locationsReducer } from '../slices/LocationsSlice';
import { askedReservationReducer } from '../slices/AskedReservationSlice';

export const rootReducer = {
    loginReducer,
    locationsReducer,
    askedReservationReducer
}