import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../config';

const axiosConfig: AxiosRequestConfig = {
    baseURL: API_URL,
    timeout: 240 * 1000,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

const client: AxiosInstance = axios.create(axiosConfig);
export default client;
