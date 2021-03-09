export enum PlatformEnum {
    PC = 'PC',
    PS = 'PlayStation',
    XBOX = "XBOX"
}

export interface DivisionRate {
    name: string;
    from: number;
    to: number;
    prices: {
        [platform in PlatformEnum]?: number
    }
}