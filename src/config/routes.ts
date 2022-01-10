export const LOGIN_URL = '/auth/login';

// Location routes
export const LOCATIONS_FETCH_BY_COORD_URL = '/location';
export const LOCATIONS_FETCH_BY_USER_URL = '/location';
export const LOCATIONS_CREATE_URL = '/location';

// User routes
export const USER_FETCH_URL = (id: number) => `/user/${id}`;

//Reservation routes
export const GET_ASKED_RESERVATIONS_URL = 'reservation/by-user'
export const GET_WAITING_RESERVATIONS_URL = 'reservation/for-user'
export const RESERVATION_URL = 'reservation'
