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
