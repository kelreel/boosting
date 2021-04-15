import {combine, createEffect, createEvent, merge, restore, sample} from 'effector';
import {createGate} from 'effector-react';
import {ApexBadgesOrderDetails, ApexPlatformEnum, ApexRegionEnum, CreateBadgesOrderRequest} from 'types/Apex';
import {OrderDocument} from "types/orders";
import {createBadgesOrder} from "api/landing/Apex";
import {Badge} from "types/Apex/badges";

export const Gate = createGate('AchievementsGate');
export const badgesChanged = createEvent<Badge[]>();

export const platformChanged = createEvent<ApexPlatformEnum>();
export const priceChanged = createEvent<number>();
export const regionChanged = createEvent<ApexRegionEnum>();
export const emailChanged = createEvent<string>();
export const streamingChanged = createEvent<boolean>();
export const createOrder = createEvent();

export const createOrderFx = createEffect<CreateBadgesOrderRequest, OrderDocument<ApexBadgesOrderDetails>>();
createOrderFx.use(createBadgesOrder);

export const badges$ = restore(badgesChanged, []);
export const platform$ = restore(platformChanged, ApexPlatformEnum.PC);
export const price$ = restore(priceChanged, 0);
export const region$ = restore(regionChanged, ApexRegionEnum.Americas);
export const email$ = restore(emailChanged, '');
export const streaming$ = restore(streamingChanged, false);

export const badgesStore$ = combine({
    badges: badges$,
    platform: platform$,
    region: region$,
    price: price$,
    email: email$,
    streaming: streaming$,
    pending: createOrderFx.pending
});

sample({
    clock: merge([badgesChanged, platformChanged, streamingChanged, Gate.open]),
    source: combine({
        badges: badges$,
        streaming: streaming$,
    }),
    fn: ({badges, streaming}) => {
        let price = 0;
        badges.forEach((badge) => {
            price += badge.price;
        })
        if (streaming) price *= 1.12;
        return Math.round(price * 100) / 100;
    },
    target: priceChanged,
});

sample({
    clock: createOrder,
    source: combine({
        badges: badges$,
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

email$.watch(console.log)
