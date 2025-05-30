const API_URL = process.env.REACT_APP_API_URL || 'https://lastbackends.onrender.com/api';
const TOKEN_KEY = 'authToken';
const TOKEN_EXPIRY_KEY = 'tokenExpiry';

class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ApiError';
    }
}

const getToken = () => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const expiry = sessionStorage.getItem(TOKEN_EXPIRY_KEY);
    
    if (!token || !expiry) {
        return null;
    }

    // Check if token is expired
    if (Date.now() > parseInt(expiry, 10)) {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
        return null;
    }

    return token;
};

const setToken = (token) => {
    if (!token) {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
        return;
    }

    // Set token expiry to 23 hours (1 hour before actual expiry)
    const expiry = Date.now() + (23 * 60 * 60 * 1000);
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(TOKEN_EXPIRY_KEY, expiry.toString());
};

const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new ApiError('Request timeout', 408);
        }
        throw error;
    }
};

export const api = {
    async testConnection() {
        try {
            const response = await this.request('/test');
            return response;
        } catch (error) {
            throw new ApiError('Server connection test failed', error.statusCode || 500);
        }
    },

    async request(endpoint, options = {}) {
        const token = getToken();
        const headers = {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers
        };

        try {
            const response = await fetchWithTimeout(`${API_URL}${endpoint}`, {
                ...options,
                headers
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle token expiration
                if (response.status === 401 && data.message === 'Token expired') {
                    setToken(null);
                }
                throw new ApiError(data.message || 'Request failed', response.status);
            }

            return data;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            if (!navigator.onLine) {
                throw new ApiError('No internet connection', 0);
            }
            throw new ApiError('Network error', 500);
        }
    },

    async login(email, password) {
        try {
            const data = await this.request('/admin-login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });

            if (data.token) {
                setToken(data.token);
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    async logout() {
        setToken(null);
    },

    async isAuthenticated() {
        return getToken() !== null;
    },

    // Booking endpoints
    async getBookings() {
        return await this.request('/bookings');
    },

    async addBooking(bookingData) {
        return await this.request('/add-booking', {
            method: 'POST',
            body: JSON.stringify(bookingData)
        });
    },

    async updateBooking(roomId, bookingData) {
        return await this.request(`/update-booking/${roomId}`, {
            method: 'PUT',
            body: JSON.stringify(bookingData)
        });
    },

    async deleteBooking(roomId) {
        return await this.request(`/delete-booking/${roomId}`, {
            method: 'DELETE'
        });
    }
};