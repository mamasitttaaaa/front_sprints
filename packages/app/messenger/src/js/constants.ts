// server URL
export const API_BASE_URL = 'http://127.0.0.1:8080';

// extended server URL with exact routs
export const LOGIN_API_URL = `${API_BASE_URL}/api/auth/login`;
export const LOGOUT_API_URL = `${API_BASE_URL}/api/auth/logout`;
export const CHECK_TOKEN_API_URL = `${API_BASE_URL}/api/auth/check-token`;