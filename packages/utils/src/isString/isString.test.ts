import isString from './isString';

describe('isString', () => {
  test.each([''])('should return `true`', (value) => {
    expect(isString(value)).toBe(true);
  });

  test.each([null, undefined, false, 0, 0n])(
    'should return `false`',
    (value) => {
      expect(isString(value)).toBe(false);
    },
  );
});
