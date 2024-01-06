// axiosInstance.js

import axios from 'axios';
import AuthContext from '../context/AuthProvider'; // Adjust the path accordingly

const instance = axios.create({
    baseURL: 'https://apps-1.lampnets.com/distro',
});

instance.interceptors.request.use(
    (config) => {
        const { auth } = AuthContext._currentValue; // Access the authentication context
        const token = auth?.accessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
