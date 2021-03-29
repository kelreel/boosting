import {apiClient} from 'core/apiClient';
import {ChatMessage, OrderDocument} from 'types/orders';

export async function fetchOrder(params: {id: string}): Promise<OrderDocument<any>> {
    const path = `/orders/${params.id}`;
    return (await apiClient.get(path)).data as OrderDocument<any>;
}

export async function fetchMessages(params: {id: string}): Promise<ChatMessage[]> {
    const path = `/orders/${params.id}/chat`;
    return (await apiClient.get(path)).data;
}

export async function setCredentials({id, email, password}): Promise<any> {
    const path = `/orders/${id}/credentials`;
    const params = {email, password};
    return (await apiClient.post(path, params)).data;
}

export async function sendMessage(params: {id: string; message: string}): Promise<ChatMessage[]> {
    const path = `/orders/${params.id}/chat`;
    return (await apiClient.post(path, {message: params.message})).data;
}
