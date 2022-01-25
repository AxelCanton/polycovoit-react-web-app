export const LOGIN_URL = '/auth/login';

// Location routes
export const LOCATIONS_FETCH_BY_COORD_URL = '/location';
export const LOCATIONS_CREATE_URL = '/location';
export const LOCATION_DELETE_URL = (id: number) => `/location/${id}`;

// User routes
export const USERS_FETCH_URL = '/user';
export const USER_FETCH_URL = (id: number) => `/user/${id}`;
export const USER_DELETE_URL = (id: number) => `/user/${id}`;
export const USER_VALIDATE_URL = (id: number) => `/user/validate/${id}`;
export const CREATE_USER_URL = `/user`;
export const MAKE_ADMIN_URL = (username: string) => `/user/make-admin/${username}`;

//Reservation routes
export const GET_ASKED_RESERVATIONS_URL = 'reservation/by-user'
export const GET_WAITING_RESERVATIONS_URL = 'reservation/for-user'
export const RESERVATION_URL = 'reservation'
export const RESERVATION_BY_DATE = (date: string) => `reservation/after/${date}`

//Speciality routes
export const GET_USERS_BY_SPECIALITY = '/speciality/users'
