import {combine, createEffect, createEvent, merge, restore, sample} from 'effector';
import {createGate} from 'effector-react';
import {ApexKillsOrderDetails, ApexPlatformEnum, ApexRegionEnum, CreateKillsOrderRequest} from 'types/Apex';
import {OrderDocument} from "types/orders";
import {createKillsOrder} from "api/landing/Apex";

export const Gate = createGate('KillsBoostGate');
export const killsCountChanged = createEvent<number>();

export const platformChanged = createEvent<ApexPlatformEnum>();
export const priceChanged = createEvent<number>();
export const regionChanged = createEvent<ApexRegionEnum>();
export const emailChanged = createEvent<string>();
export const streamingChanged = createEvent<boolean>();
export const createOrder = createEvent();

export const createOrderFx = createEffect<CreateKillsOrderRequest, OrderDocument<ApexKillsOrderDetails>>();
createOrderFx.use(createKillsOrder);

export const killsCount$ = restore(killsCountChanged, 50);
export const platform$ = restore(platformChanged, ApexPlatformEnum.PC);
export const price$ = restore(priceChanged, 0);
export const region$ = restore(regionChanged, ApexRegionEnum.Americas);
export const email$ = restore(emailChanged, '');
export const streaming$ = restore(streamingChanged, false);

export const killsStore$ = combine({
    killsCount: killsCount$,
    platform: platform$,
    region: region$,
    price: price$,
    email: email$,
    streaming: streaming$,
    pending: createOrderFx.pending
});

sample({
    clock: merge([killsCountChanged, platformChanged, streamingChanged, Gate.open]),
    source: combine({
        kills: killsCount$,
        streaming: streaming$,
    }),
    fn: ({kills, streaming}) => {
        let price = kills * 0.49;
        if (streaming) price *= 1.12;
        return Math.round(price * 100) / 100;
    },
    target: priceChanged,
});

sample({
    clock: createOrder,
    source: combine({
        killsCount: killsCount$,
        platform: platform$,
        region: region$,
        price: price$,
        email: email$,
        streaming: streaming$,
    }),
    fn: (state) => state,
    target: createOrderFx
})

createOrderFx.doneData.watch((order) => {
    document.location.pathname = `orders/${order._id}`;
})
