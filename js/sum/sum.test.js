const sum = require('./sum');

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('adds 13 + 8 to equal 21', () => {
    expect(sum(13, 8)).toBe(21);
});

test('strings is not allowed', () => {
    expect(sum('a', 8)).toBeFalsy();
});

test('strings is not allowed', () => {
    expect(sum('8', NaN)).toBeFalsy();
});

test('strings is not allowed', () => {
    expect(sum(NaN, 8)).toBeFalsy();
});

test('strings is not allowed', () => {
    expect(sum('a', NaN)).toBeFalsy();
});