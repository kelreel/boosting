import {ApexOrderTypeEnum, GameEnum, OrderStatusEnum} from './Apex';

export type OrderDocument<D> = {
    _id: string;
    booster_id?: string | null;
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
