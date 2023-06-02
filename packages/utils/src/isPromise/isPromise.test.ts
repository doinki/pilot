import isPromise from './isPromise';

describe('isPromise', () => {
  test.each([
    Promise.resolve(0),
    new Promise((resolve) => {
      resolve(null);
    }),
  ])('should return `true`', (value) => {
    expect(isPromise(value)).toBe(true);
  });

  test.each([null, undefined])('should return `false`', (value) => {
    expect(isPromise(value)).toBe(false);
  });
});
