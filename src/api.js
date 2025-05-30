const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
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
    const token = localStorage.getItem(TOKEN_KEY);
    const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
    
    if (!token || !expiry) {
        return null;
    }

    // Check if token is expired
    if (Date.now() > parseInt(expiry, 10)) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
        return null;
    }

    return token;
};

const setToken = (token) => {
    if (!token) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
        return;
    }

    // Set token expiry to 23 hours (1 hour before actual expiry)
    const expiry = Date.now() + (23 * 60 * 60 * 1000);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_EXPIRY_KEY, expiry.toString());
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

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                data = { message: 'Non-JSON response received' };
            }

            if (!response.ok) {
                console.error('API Error:', {
                    status: response.status,
                    endpoint: endpoint,
                    data: data
                });

                // Handle token expiration
                if (response.status === 401 && data.message === 'Token expired') {
                    setToken(null);
                }
                throw new ApiError(
                    data.message || `Request failed: ${response.status} ${response.statusText}`,
                    response.status
                );
            }

            return data;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            if (!navigator.onLine) {
                throw new ApiError('No internet connection', 0);
            }
            console.error('Network Error:', {
                error: error,
                endpoint: endpoint
            });
            throw new ApiError(`Network error: ${error.message}`, 500);
        }
    },

    async login(email, password, role = 'user') {
        try {
            const endpoint = role === 'admin' ? '/admin-login' : '/login';
            const data = await this.request(endpoint, {
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

    async register(userData) {
        return await this.request('/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    },

    async verifyEmail(token) {
        return await this.request(`/verify/${token}`);
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