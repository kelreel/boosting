import {DivisionRate, PlatformEnum} from './types';

export const getDevisionString = (val: number): string => {
    switch (true) {
        case val < 300:
            return `Bronze IV`;
        case val >= 300 && val < 600:
            return `Bronze III`;
        case val >= 600 && val < 900:
            return `Bronze II`;
        case val >= 900 && val < 1200:
            return `Bronze I`;
        case val >= 1200 && val < 1600:
            return `Silver IV`;
        case val >= 1600 && val < 2000:
            return `Silver III`;
        case val >= 2000 && val < 2400:
            return `Silver II`;
        case val >= 2400 && val < 2800:
            return `Silver I`;
        case val >= 2800 && val < 3300:
            return `Gold IV`;
        case val >= 3300 && val < 3800:
            return `Gold III`;
        case val >= 3800 && val < 4300:
            return `Gold II`;
        case val >= 4300 && val < 4800:
            return `Gold I`;
        case val >= 4800 && val < 5400:
            return `Platinum IV`;
        case val >= 5400 && val < 6000:
            return `Platinum III`;
        case val >= 6000 && val < 6600:
            return `Platinum II`;
        case val >= 6600 && val < 7200:
            return `Platinum I`;
        case val >= 7200 && val < 7900:
            return `Diamond IV`;
        case val >= 7900 && val < 8600:
            return `Diamond III`;
        case val >= 8600 && val < 9300:
            return `Diamond II`;
        case val >= 9300 && val < 1000:
            return `Diamond I`;
        default:
            return `Master`;
    }
};

export const rates: DivisionRate[] = [
    {
        name: 'Silver',
        from: 0,
        to: 1200,
        prices: {
            [PlatformEnum.PC]: 15,
            [PlatformEnum.PS]: 15,
            [PlatformEnum.XBOX]: 15
        },
    },
    {
        name: 'Gold',
        from: 1200,
        to: 2800,
        prices: {
            [PlatformEnum.PC]: 25,
            [PlatformEnum.PS]: 28,
            [PlatformEnum.XBOX]: 28
        },
    },
    {
        name: 'Platinum',
        from: 2800,
        to: 4800,
        prices: {
            [PlatformEnum.PC]: 35,
            [PlatformEnum.PS]: 40,
            [PlatformEnum.XBOX]: 40
        },
    },
    {
        name: 'Diamond',
        from: 4800,
        to: 7200,
        prices: {
            [PlatformEnum.PC]: 50,
            [PlatformEnum.PS]: 60,
            [PlatformEnum.XBOX]: 60
        },
    },
    {
        name: 'Master',
        from: 7200,
        to: 10000,
        prices: {
            [PlatformEnum.PC]: 110,
            [PlatformEnum.PS]: 130,
            [PlatformEnum.XBOX]: 130
        },
    },
    {
        name: 'Master +',
        from: 10000,
        to: 15000,
        prices: {
            [PlatformEnum.PC]: 300,
            [PlatformEnum.PS]: 350,
            [PlatformEnum.XBOX]: 350
        },
    },
    {
        name: 'Master ++',
        from: 15000,
        to: 20000,
        prices: {
            [PlatformEnum.PC]: 600,
            [PlatformEnum.PS]: 700,
            [PlatformEnum.XBOX]: 700
        },
    },
];

export const calcPrice = (from: number, to: number, platform: PlatformEnum): number => {
    let price = 0;
    let cur_rate = from;

    if (from === to) return 0;

    rates.forEach(rate => {
        const step_price = rate.prices[platform] / (rate.to - rate.from); // Цена за единицу ранга
        // console.log(`step price`, step_price)
        if (from > rate.to) return;
        if (cur_rate >= rate.from && to <= rate.to) {
            price += step_price * (to - cur_rate);
        }
        if (cur_rate >= rate.from && to > rate.to) {
            // console.log('***', step_price * (rate.to - cur_rate))
            price += step_price * (rate.to - cur_rate);
            cur_rate = rate.to;
        }0
        // console.log(price)
    })
    if (price < 0) return 0;
    return Math.round(price * 100) / 100
};
