import { adminApi } from './apiAdmin';

export const loginAdmin = async (data) => {

    const res = await adminApi.post(
        '/login',
        data
    );

    return res.data;
};

export const logoutAdmin = () => {

    localStorage.removeItem('token');
};