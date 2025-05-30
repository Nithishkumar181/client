const API_URL = 'http://localhost:5000/api';

export const api = {
  testConnection: async () => {
    try {
      const response = await fetch(`${API_URL}/test`);
      return await response.json();
    } catch (error) {
      console.error('Test connection failed:', error);
      throw new Error('Cannot connect to server');
    }
  },

  login: async (email, password) => {
    try {
      // First test the connection
      await api.testConnection();

      const response = await fetch(`${API_URL}/admin-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      // Log the raw response for debugging
      console.log('Login response status:', response.status);
      const data = await response.json();
      console.log('Login response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};