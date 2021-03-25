import {ApexRankOrderRaw, ApexRankOrdersAdminRequest} from '../../../types/ApexRank';
import {PaginationContent} from '../../../types/api';
import {apiClient} from '../../../core/apiClient';

export async function fetchApexRankOrders({
    page,
    pageSize,
}: ApexRankOrdersAdminRequest): Promise<PaginationContent<ApexRankOrderRaw>> {
    const path = '/apex/rank/order/admin';
    const params = {page, pageSize};
    return (await apiClient.get(path, {params})).data as PaginationContent<ApexRankOrderRaw>;
}
