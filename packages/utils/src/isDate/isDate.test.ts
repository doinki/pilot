import isDate from './isDate';

describe('isDate', () => {
  test('should return `true`', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test.each([
    true,
    false,
    0n,
    1n,
    0,
    1,
    '',
    Symbol(''),
    null,
    undefined,
    Date,
    Date(),
    Date.now(),
  ])('should return `false`', (value) => {
    expect(isDate(value)).toBe(false);
  });
});
