import {combine, createEvent, guard, restore} from 'effector';
import {PlatformEnum} from './types';

export const fromRankChanged = createEvent<number>();
export const toRankChanged = createEvent<number>();
export const platformChanged = createEvent<PlatformEnum>();

export const fromRank$ = restore(fromRankChanged, 200);
export const toRank$ = restore(toRankChanged, 1200);
export const platform$ = restore(platformChanged, PlatformEnum.PC);

export const rankStore$ = combine({
    from: fromRank$,
    to: toRank$,
    platform: platform$,
});

guard(fromRankChanged, {
    filter: (val) => val >= 0 && val <= 20000,
});

fromRankChanged.watch((val) => {
    if (val > rankStore$.getState().to) {
        toRankChanged(val);
    }
});

toRankChanged.watch((val) => {
    if (val < rankStore$.getState().from) {
        fromRankChanged(val);
    }
});
