import axios, { AxiosRequestConfig } from 'axios';
import { endpoints } from 'endpoints';
import { getAccessToken } from 'utils/authentication';

export const apiClient = axios.create({
    baseURL: endpoints.PORTAL_API
});

export const adapterPortalApi = {
    get: <T>(path: string, params?: AxiosRequestConfig) => 
        apiClient.get<T>(path, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            },
            ...params,
        }),
    post: <T>(path: string, data: T) => 
        apiClient.post<T>(path, data, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            },
        }),
    patch: <T>(path: string, data: T) => 
        apiClient.patch<T>(path, data, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            },
        }),
    delete: <T>(path: string) => 
        apiClient.delete<T>(path, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            },
        }),
}