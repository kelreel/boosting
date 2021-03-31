import {FetchOrdersAdminRequest, OrderStatusEnum} from 'types/Apex';
import {PaginationContent} from 'types/api';
import {apiClient} from 'core/apiClient';
import {ChatMessage, OrderDocument} from 'types/orders';

export async function fetchAdminOrders({
    page,
    pageSize,
}: FetchOrdersAdminRequest): Promise<PaginationContent<OrderDocument<any>>> {
    const path = '/admin/orders';
    const params = {page, pageSize};
    return (await apiClient.get(path, {params})).data as PaginationContent<OrderDocument<any>>;
}

export async function fetchAdminOrder(params: {id: string}): Promise<OrderDocument<any>> {
    const path = `/admin/orders/${params.id}`;
    return (await apiClient.get(path)).data as OrderDocument<any>;
}

export async function fetchChatAdminMessages(params: {id: string}): Promise<ChatMessage[]> {
    const path = `/admin/orders/${params.id}/chat`;
    return (await apiClient.get(path)).data;
}

export async function sendChatAdminMessage(params: {
    id: string;
    message: string;
}): Promise<ChatMessage[]> {
    const path = `/admin/orders/${params.id}/chat`;
    return (await apiClient.post(path, {message: params.message})).data;
}

export async function setOrderStatus(params: {
    id: string;
    status: OrderStatusEnum;
}): Promise<OrderDocument<any>> {
    const path = `/admin/orders/${params.id}/status`;
    return (await apiClient.post(path, {status: params.status})).data;
}

export async function setOrderProgress(params: {
    id: string;
    progress: number;
}): Promise<OrderDocument<any>> {
    const path = `/admin/orders/${params.id}/progress`;
    return (await apiClient.post(path, {progress: params.progress})).data;
}
