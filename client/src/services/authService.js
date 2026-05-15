import { adminApi } from './apiAdmin';
import { removeToken } from '../utils/authCookie';

export const loginAdmin = async (data) => {

    const res = await adminApi.post(
        '/login',
        data
    );

    return res.data;
};

export const logoutAdmin = () => {
    removeToken();
};