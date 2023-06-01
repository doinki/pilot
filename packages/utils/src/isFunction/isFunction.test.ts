import isFunction from './isFunction';

describe('isFunction', () => {
  test.each([
    () => {},
    async () => {},
    function foo() {},
    function* foo() {
      yield;
    },
    class {},
  ])('should return `true`', (value) => {
    expect(isFunction(value)).toBe(true);
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
    {},
    /function/,
  ])('should return `false`', (value) => {
    expect(isFunction(value)).toBe(false);
  });
});
