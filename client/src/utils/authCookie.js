import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export const setToken = (token) => {

    Cookies.set(TOKEN_KEY, token, {
        expires: 0.5, // 1 ngày
        secure: false, // true nếu dùng https
        sameSite: 'Strict'
    });
};

export const getToken = () => {
    return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
};