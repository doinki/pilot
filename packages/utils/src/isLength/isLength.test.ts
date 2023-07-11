import isLength from './isLength';

describe('isLength', () => {
  test.each([0, Number.MAX_SAFE_INTEGER])('should return `true`', (value) => {
    expect(isLength(value)).toBe(true);
  });

  test.each([-1, Number.MAX_SAFE_INTEGER + 1, 1.1, 0n])(
    'should return `false`',
    (value) => {
      expect(isLength(value)).toBe(false);
    },
  );
});
