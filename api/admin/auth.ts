import {apiClient} from 'core/apiClient';
import {TokenStorage} from 'core/tokenStorage';
import {AuthData, AuthRequest, AuthResponse} from 'types/auth';
import jwt_decode from 'jwt-decode';

export async function fetchAuthInfo({login, password}: AuthRequest): Promise<AuthData> {
    const path = '/users/login';
    const params = {login, password};
    const response = (await apiClient.post(path, params)).data as AuthResponse;
    const data = jwt_decode(response.token) as AuthData;
    TokenStorage.token = response.token;

    return data;
}

export async function registerUser(params: {login: string, password: string; email: string;}): Promise<AuthData> {
    const path = '/users';
    const response = (await apiClient.post(path, params)).data as AuthResponse;
    const data = jwt_decode(response.token) as AuthData;
    TokenStorage.token = response.token;

    return data;
}
