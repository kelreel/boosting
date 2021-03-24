import {toast} from 'react-toastify';
import {AxiosError} from 'axios';

export function showRestError(error: AxiosError) {
    let msg = error.response?.data?.message || error.response?.statusText || 'Unknown API error';
    console.error(error);
    toast.error(`${msg}`, {autoClose: 3000, hideProgressBar: false});
}
