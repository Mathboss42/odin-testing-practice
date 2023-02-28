import * as script from './script';

test('capitalize', () => {
    expect(script.capitalize('hello')).toBe('Hello');
});

test('reverseString', () => {
    expect(script.reverseString('hello')).toBe('olleh');
});

test('calculator', () => {
    expect(script.calculator.add(1, 2)).toEqual(3);
    expect(script.calculator.subtract(1, 2)).toEqual(-1);
    expect(script.calculator.multiply(1, 2)).toEqual(2);
    expect(script.calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test('ceasarCipher', () => {
    expect(script.ceasarCipher('hello', 0)).toBe('hello');
    expect(() => script.ceasarCipher('zebra', 28)).toThrow('Invalid shift');
    expect(script.ceasarCipher('hello', 4)).toBe('lipps');
    expect(script.ceasarCipher('hello!', 4)).toBe('lipps!');
    expect(script.ceasarCipher('zebra', 10)).toBe('jolbk');
});

test('analyzeArray', () => {
    expect(script.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});