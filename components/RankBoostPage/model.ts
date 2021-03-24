import {combine, createEvent, merge, restore, sample} from 'effector';
import {PlatformEnum} from './types';
import {calcPrice} from './utils';
import {createGate} from 'effector-react';

export const Gate = createGate('RankBoostGate');
export const fromRankChanged = createEvent<number>();
export const toRankChanged = createEvent<number>();
export const platformChanged = createEvent<PlatformEnum>();
export const priceChanged = createEvent<number>();

export const fromRank$ = restore(fromRankChanged, 200);
export const toRank$ = restore(toRankChanged, 1200);
export const platform$ = restore(platformChanged, PlatformEnum.PC);
export const price$ = restore(priceChanged, 0);

export const rankStore$ = combine({
    from: fromRank$,
    to: toRank$,
    platform: platform$,
    price: price$,
});

fromRankChanged.watch((val) => {
    if (val > rankStore$.getState().to) {
        toRankChanged(val);
    }
});

sample({
    clock: merge([fromRankChanged, toRankChanged, platformChanged, Gate.open]),
    source: combine({
        from: fromRank$,
        to: toRank$,
        platform: platform$,
    }),
    fn: ({from, to, platform}) => calcPrice(from, to, platform),
    target: priceChanged,
});

// price$.watch(console.log)
