import {apiClient} from 'core/apiClient';
import {
    CreateRankOrderRequest,
    ApexRankOrderDetails,
    CreateKillsOrderRequest,
    ApexKillsOrderDetails, CreateBadgesOrderRequest, ApexBadgesOrderDetails,
} from 'types/Apex';
import {OrderDocument} from 'types/orders';

export async function createRankOrder(
    body: CreateRankOrderRequest,
): Promise<OrderDocument<ApexRankOrderDetails>> {
    const path = '/landing/apex/rank';
    return (await apiClient.post(path, body)).data as OrderDocument<ApexRankOrderDetails>;
}

export async function createKillsOrder(
    body: CreateKillsOrderRequest,
): Promise<OrderDocument<ApexKillsOrderDetails>> {
    const path = '/landing/apex/kills';
    return (await apiClient.post(path, body)).data as OrderDocument<ApexKillsOrderDetails>;
}

export async function createBadgesOrder(
    body: CreateBadgesOrderRequest,
): Promise<OrderDocument<ApexBadgesOrderDetails>> {
    const path = '/landing/apex/badges';
    return (await apiClient.post(path, body)).data as OrderDocument<ApexBadgesOrderDetails>;
}
