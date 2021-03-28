import {apiClient} from 'core/apiClient';
import {OrderDocument} from 'types/orders';

export async function fetchOrder(params: {id: string}): Promise<OrderDocument<any>> {
    const path = `/orders/${params.id}`;
    return (await apiClient.get(path)).data as OrderDocument<any>;
}

export async function setCredentials({
    _id,
    email,
    password,
}): Promise<any> {
    const path = `/orders/${_id}/credentials`;
    const params = {email, password};
    return (await apiClient.post(path, params))
        .data;
}

export async function sendMessage(params: {
    _id: string;
    message: string;
}): Promise<any> {
    const path = `/orders/${params._id}/message`;
    return (await apiClient.post(path, {message: params.message}))
        .data;
}
