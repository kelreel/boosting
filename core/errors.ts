import {toast} from 'react-toastify';

export interface RestError extends Error {
    status?: number;
    error?: string;
}

export function showRestError(error: RestError) {
    console.error(error);
    toast.error(`${error.error}`, {autoClose: false});
}
