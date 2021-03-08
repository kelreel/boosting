import {calcPrice} from "./utils";
import {PlatformEnum} from "./types";

describe('Calc rank price function', () => {
    test('return 0 if from rank equals to rank', () => {
        expect(calcPrice(10, 10, PlatformEnum.PC)).toBe(0);
    })
})