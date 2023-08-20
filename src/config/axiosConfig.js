// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create();

// Add an interceptor for requests
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve the API_KEY from ENV 
        const API_KEY = import.meta.env.APPSETTING_REACT_APP_API_KEY;
        // If a token exists, add it to the request headers
        if (API_KEY) {
            config.headers.Authorization = `Bearer ${API_KEY}`;
            config.headers.Accept = 'application/json';
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
