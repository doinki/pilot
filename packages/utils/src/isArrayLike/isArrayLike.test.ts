import isArrayLike from './isArrayLike';

describe('isArrayLike', () => {
  test.each([[], { length: 0 }, ''])('should return `true`', (value) => {
    expect(isArrayLike(value)).toBe(true);
  });

  test.each([{ length: -1 }, () => {}])('should return `false`', (value) => {
    expect(isArrayLike(value)).toBe(false);
  });
});
