import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const api_provinces = axios.create({
    baseURL: "https://provinces.open-api.vn/api",
});