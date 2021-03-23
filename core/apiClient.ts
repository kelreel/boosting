import axios, {AxiosError, AxiosResponse} from "axios";
import {showRestError} from "./errors";

const baseURL = 'http://localhost:3010/api'

export const apiClient = axios.create({baseURL});

async function onErrorInterceptor(e: AxiosError): Promise<AxiosResponse> {
    showRestError(e)
    throw e;
}

apiClient.interceptors.response.use(undefined, onErrorInterceptor);
