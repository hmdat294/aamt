import {api_provinces} from './api';

export const getProvinces = () => {
    return api_provinces.get('/p/');
};

export const getProvincesById = (id) => {
    return api_provinces.get(`/p/${id}`);
};