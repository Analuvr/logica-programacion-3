const { getFactorial } = require('./factorial');

test('factorial of 5 is 120', () => {
    expect(getFactorial(5)).toBe(120);
});

test('factorial of 0 is 1', () => {
    expect(getFactorial(0)).toBe(1);
});

test('factorial of 1 is 1', () => {
    expect(getFactorial(1)).toBe(1);
});

test('factorial of 3 is 6', () => {
    expect(getFactorial(3)).toBe(6);
});