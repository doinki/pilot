import isObjectLike from './isObjectLike';

describe('isObjectLike', () => {
  test.each([[], {}, /./])('should return `true`', (value) => {
    expect(isObjectLike(value)).toBe(true);
  });

  test.each([null, () => {}])('should return `false`', (value) => {
    expect(isObjectLike(value)).toBe(false);
  });
});
