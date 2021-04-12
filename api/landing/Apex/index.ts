import {apiClient} from "core/apiClient";
import {CreateRankOrderRequest, ApexRankOrderDetails} from "types/Apex";
import { OrderDocument } from "types/orders";

export async function createRankOrder(body: CreateRankOrderRequest): Promise<OrderDocument<ApexRankOrderDetails>> {
    const path = '/landing/apex/rank';
    return (await apiClient.post(path, body)).data as OrderDocument<ApexRankOrderDetails>;
}
