import { api } from './api';
import { adminApi } from './apiAdmin';

export const getBannersFormTag = (tag) => {
    return api.get(`/banners/${tag}`);
};

export const getBannersFormTagById = (tag, id) => {
    return api.get(`/banners/${tag}/${id}`);
};

export const createBannersFormTag = (data) => {
    return adminApi.post(`/banners`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updateBannersFormTag = (tag, id, data) => {
    return adminApi.put(`/banners/${tag}/${id}`, data);
};

export const deleteBannersFormTag = (tag, id) => {
    return adminApi.delete(`/banners/${tag}/${id}`);
};
