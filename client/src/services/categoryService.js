import { api } from './api';
import { adminApi } from './apiAdmin';

export const getCategoriesPost = () => {
    return api.get('/category_post');
};

export const getCategoryPostById = (id) => {
    return api.get(`/category_post/${id}`);
};

export const createCategoryPost = (data) => {
    console.log(data);

    return adminApi.post('/category_post', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCategoryPost = (id, data) => {
    return adminApi.put(`/category_post/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteCategoryPost = (id) => {
    return adminApi.delete(`/category_post/${id}`);
};






export const getCategoriesProduct = () => {
    return adminApi.get('/category_product');
};

export const getCategoryProductById = (id) => {
    return adminApi.get(`/category_product/${id}`);
};

export const createCategoryProduct = (data) => {
    console.log(data);

    return adminApi.post('/category_product', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCategoryProduct = (id, data) => {
    return adminApi.put(`/category_product/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteCategoryProduct = (id) => {
    return adminApi.delete(`/category_product/${id}`);
};