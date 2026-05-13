import { api } from './api';

export const getCategoriesPost = () => {
    return api.get('/category_post');
};

export const getCategoryPostById = (id) => {
    return api.get(`/category_post/${id}`);
};

export const createCategoryPost = (data) => {
    console.log(data);

    return api.post('/category_post', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCategoryPost = (id, data) => {
    return api.put(`/category_post/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteCategoryPost = (id) => {
    return api.delete(`/category_post/${id}`);
};






export const getCategoriesProduct = () => {
    return api.get('/category_product');
};

export const getCategoryProductById = (id) => {
    return api.get(`/category_product/${id}`);
};

export const createCategoryProduct = (data) => {
    console.log(data);

    return api.post('/category_product', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCategoryProduct = (id, data) => {
    return api.put(`/category_product/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteCategoryProduct = (id) => {
    return api.delete(`/category_product/${id}`);
};