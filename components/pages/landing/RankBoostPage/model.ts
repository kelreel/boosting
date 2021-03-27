import {combine, createEffect, createEvent, merge, restore, sample} from 'effector';
import {calcPrice} from './utils';
import {createGate} from 'effector-react';
import {ApexRankOrderRaw, CreateRankOrderRequest, ApexPlatformEnum, ApexRegionEnum} from "types/Apex";
import {createRankOrder} from "api/landing/Apex";

export const Gate = createGate('RankBoostGate');
export const fromRankChanged = createEvent<number>();
export const toRankChanged = createEvent<number>();
export const platformChanged = createEvent<ApexPlatformEnum>();
export const priceChanged = createEvent<number>();
export const regionChanged = createEvent<ApexRegionEnum>();
export const emailChanged = createEvent<string>();
export const streamingChanged = createEvent<boolean>();
export const createOrder = createEvent();

export const createOrderFx = createEffect<CreateRankOrderRequest, ApexRankOrderRaw>();
createOrderFx.use(createRankOrder);

export const fromRank$ = restore(fromRankChanged, 200);
export const toRank$ = restore(toRankChanged, 1200);
export const platform$ = restore(platformChanged, ApexPlatformEnum.PC);
export const price$ = restore(priceChanged, 0);
export const region$ = restore(regionChanged, ApexRegionEnum.Americas)
export const email$ = restore(emailChanged, '');
export const streaming$ = restore(streamingChanged, false);

export const rankStore$ = combine({
    from: fromRank$,
    to: toRank$,
    platform: platform$,
    region: region$,
    price: price$,
    email: email$,
    streaming: streaming$,
    pending: createOrderFx.pending
});

fromRankChanged.watch((val) => {
    if (val > rankStore$.getState().to) {
        toRankChanged(val);
    }
    if (rankStore$.getState().to - val < 100) {
        toRankChanged(val + 100);
    }
});

sample({
    clock: merge([fromRankChanged, toRankChanged, platformChanged, streamingChanged, Gate.open]),
    source: combine({
        from: fromRank$,
        to: toRank$,
        platform: platform$,
        streaming: streaming$
    }),
    fn: ({from, to, platform, streaming}) => calcPrice(from, to, platform, streaming),
    target: priceChanged,
});

sample({
    clock: createOrder,
    source: combine({
        fromRank: fromRank$,
        toRank: toRank$,
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
    document.location.pathname = `order/${order._id}`;
})

// price$.watch(console.log)
// rankStore$.watch(console.log)
