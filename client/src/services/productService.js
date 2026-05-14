import { api } from './api';
import { adminApi } from './apiAdmin';

export const getProducts = () => {
    return api.get('/products');
};

export const getProductById = (id) => {
    return api.get(`/products/${id}`);
};

export const createProduct = (data) => {
    return adminApi.post('/products', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updateProduct = (id, data) => {
    return adminApi.put(`/products/${id}`, data);
};

export const deleteProduct = (id) => {
    return adminApi.delete(`/products/${id}`);
};

export const deleteProductImage = (id) => {
    adminApi.delete(`/product-images/${id}`);
};