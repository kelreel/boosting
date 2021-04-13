export interface DivisionRate {
    name: string;
    from: number;
    to: number;
    prices: {
        [platform in ApexPlatformEnum]?: number;
    };
}

export interface FetchOrdersAdminRequest {
    page: number;
    pageSize: number;
}

export interface CreateRankOrderRequest {
    fromRank: number;
    toRank: number;
    platform: ApexPlatformEnum;
    region: ApexRegionEnum;
    email: string;
    streaming: boolean;
}

export interface CreateKillsOrderRequest {
    killsCount: number;
    platform: ApexPlatformEnum;
    region: ApexRegionEnum;
    email: string;
    streaming: boolean;
}

export enum OrderStatusEnum {
    CREATED = 'CREATED',
    PAID = 'PAID',
    IN_PROGRESS = 'IN_PROGRESS',
    PAUSED = 'PAUSED',
    COMPLETED = 'COMPLETED',
    REFUNDED = 'REFUNDED',
    REJECTED = 'REJECTED',
}

export enum GameEnum {
    APEX = 'Apex Legends',
}

export enum ApexOrderTypeEnum {
    RANK_BOOST = 'Rank Boost',
    KILLS_BOOST = 'Kills Boost',
    ACHIEVEMENTS = 'Achievements',
}

export enum ApexPlatformEnum {
    PC = 'PC',
    PS = 'PlayStation',
    XBOX = 'XBOX',
}

export enum ApexRegionEnum {
    Americas = 'Americas',
    Europe = 'Europe',
    Asia = 'Asia',
    Oceania = 'Oceania',
}

export type ApexRankOrderDetails = {
    fromRank: number;
    toRank: number;
    platform: ApexPlatformEnum;
    region: ApexRegionEnum;
    streaming: boolean;
    credentials:
        | {
        email: string;
        password: string;
    }
        | boolean;
};

export type ApexKillsOrderDetails = {
    killsCount: number;
    platform: ApexPlatformEnum;
    region: ApexRegionEnum;
    streaming: boolean;
    credentials:
        | {
        email: string;
        password: string;
    }
        | boolean;
};
