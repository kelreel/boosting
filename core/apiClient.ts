import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {showRestError} from "./errors";
import {TokenStorage} from "./tokenStorage";

const baseURL = 'http://localhost:3010/api'

export const apiClient = axios.create({baseURL});

async function onErrorInterceptor(e: AxiosError): Promise<AxiosResponse> {
    showRestError(e)
    throw e;
}

async function onRequestInterceptor(clientConfig: AxiosRequestConfig) {
    const {url} = clientConfig;
    // console.log(url)
    const token = TokenStorage.token;

    if (token) {
        clientConfig.headers['Authorization'] = `Bearer ${token}`;
    }

    return clientConfig;
}

apiClient.interceptors.response.use(undefined, onErrorInterceptor);
apiClient.interceptors.request.use(onRequestInterceptor);
