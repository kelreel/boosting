import {ApexRankOrdersAdminRequest} from 'types/Apex';
import {PaginationContent} from 'types/api';
import {apiClient} from 'core/apiClient';
import {OrderDocument} from "types/orders";

export async function fetchApexRankOrders({
    page,
    pageSize,
}: ApexRankOrdersAdminRequest): Promise<PaginationContent<OrderDocument<any>>> {
    const path = '/apex/rank/order/admin';
    const params = {page, pageSize};
    return (await apiClient.get(path, {params})).data as PaginationContent<OrderDocument<any>>;
}
