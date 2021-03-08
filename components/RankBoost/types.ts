export enum PlatformEnum {
    PC = 'PC',
    PS = 'PlayStation',
    XBOX = "XBox"
}

export interface DivisionRate {
    name: string;
    from: number;
    to: number;
    prices: {
        [platform in PlatformEnum]?: number
    }
}