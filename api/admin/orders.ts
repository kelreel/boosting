import {FetchOrdersAdminRequest} from 'types/Apex';
import {PaginationContent} from 'types/api';
import {apiClient} from 'core/apiClient';
import {OrderDocument} from "types/orders";

export async function fetchOrders({
    page,
    pageSize,
}: FetchOrdersAdminRequest): Promise<PaginationContent<OrderDocument<any>>> {
    const path = '/admin/orders';
    const params = {page, pageSize};
    return (await apiClient.get(path, {params})).data as PaginationContent<OrderDocument<any>>;
}
