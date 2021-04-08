import {ApexOrderTypeEnum, GameEnum, OrderStatusEnum} from './Apex';

export type OrderDocument<D> = {
    _id: string;
    booster?: string | any;
    user: {
        email: string; // !!
        _id?: string | null;
        ip?: string;
        fingerprint?: string | null;
        browser?: string | null;
    };
    progress: number;
    status: OrderStatusEnum;
    game: GameEnum; // !!
    orderType: ApexOrderTypeEnum; //!!
    price: number; //!!
    adminDescription?: string | null;
    details: D; //!!
    createdAt: Date;
    updatedAt: Date;
};

export type ChatMessage = {
    from: String,
    message: String,
    date: Date;
}

export type BoosterItem = {
    _id: string;
    login: string;
}


export const OrderStatusColor = new Map<OrderStatusEnum, 'gray' | 'blue' | 'green' | 'orange' | 'red'>()
    .set(OrderStatusEnum.CREATED, 'gray')
    .set(OrderStatusEnum.PAID, 'orange')
    .set(OrderStatusEnum.IN_PROGRESS, 'blue')
    .set(OrderStatusEnum.PAUSED, 'red')
    .set(OrderStatusEnum.COMPLETED, 'green')
    .set(OrderStatusEnum.REFUNDED, 'gray')
    .set(OrderStatusEnum.REJECTED, 'gray')
