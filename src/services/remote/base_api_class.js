// base_api_class.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peptide-backend.mazedigital.us',
  headers: {
    'Content-Type': 'application/json',

  },
});

// Optional: Inject token if needed
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('peptide_user_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
