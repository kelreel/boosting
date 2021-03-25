export enum PlatformEnum {
    PC = 'PC',
    PS = 'PlayStation',
    XBOX = 'XBOX',
}

export enum OrderStatusEnum {
    CREATED = 'CREATED',
    PAID = 'PAID',
    IN_PROGRESS = 'IN_PROGRESS',
    PAUSED = 'PAUSED',
    COMPLETED = 'COMPLETED',
    REFUNDED = 'REFUNDED',
}

export interface DivisionRate {
    name: string;
    from: number;
    to: number;
    prices: {
        [platform in PlatformEnum]?: number;
    };
}

export interface ApexRankOrdersAdminRequest {
    page: number;
    pageSize: number;
}

export interface ApexRankOrderRaw {
    _id: string;
    fromRank: number;
    toRank: number;
    price: number;
    platform: PlatformEnum;
    status: OrderStatusEnum;
    streaming: boolean;
    email: string;
    credentials:
        | {
        email: string;
        password: string;
    }
        | boolean;
    userNotes?: string;
    description?: string;
};
