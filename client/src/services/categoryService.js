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