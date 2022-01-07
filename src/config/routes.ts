export const LOGIN_URL = '/auth/login';
export const GET_ASKED_RESERVATIONS_URL = 'reservation/by-user'

// Location routes
export const LOCATIONS_FETCH_BY_COORD_URL = '/location';
export const LOCATIONS_FETCH_BY_USER_URL = '/location';
export const LOCATIONS_CREATE_URL = '/location';
export const LOCATION_DELETE_URL = (id: number) => `/location/${id}`;

// User routes
export const USER_FETCH_URL = (id: number) => `/user/${id}`;
export const USER_DELETE_URL = (id: number) => `/user/${id}`;
