import axios from 'axios';

import {
    getToken,
    removeToken
} from '../utils/authCookie';

export const adminApi = axios.create({
    baseURL: 'http://localhost:5000/api'
});

adminApi.interceptors.request.use(

    (config) => {

        const token = getToken();

        if (token) {
            config.headers.Authorization =`Bearer ${token}`;
        }

        return config;
    },

    (error) => Promise.reject(error)
);

adminApi.interceptors.response.use(

    (response) => response,

    (error) => {

        // token lỗi hoặc hết hạn
        if (
            error.response?.status === 401 ||
            error.response?.status === 403
        ) {

            removeToken();

            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);