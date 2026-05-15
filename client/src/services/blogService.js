import { api } from './api';
import { adminApi } from './apiAdmin';

export const getPosts = () => {
    return api.get('/posts');
};

export const getPostById = (id) => {
    return api.get(`/posts/${id}`);
};

export const createPost = (data) => {
    return adminApi.post('/posts', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updatePost = (id, data) => {
    return adminApi.put(`/posts/${id}`, data);
};

export const deletePost = (id) => {
    return adminApi.delete(`/posts/${id}`);
};