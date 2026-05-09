import {api} from './api';

export const getPosts = () => {
    return api.get('/posts');
};

export const getPostById = (id) => {
    return api.get(`/posts/${id}`);
};

export const createPost = (data) => {
    return api.post('/posts', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updatePost = (id, data) => {
    return api.put(`/posts/${id}`, data);
};

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
};