import isTruthy from './isTruthy';

describe('isTruthy', () => {
  test.each([1, 1n, Symbol(''), {}, []])('should return `true`', (value) => {
    expect(isTruthy(value)).toBe(true);
  });

  test.each([null, undefined, false, '', 0, 0n])(
    'should return `false`',
    (value) => {
      expect(isTruthy(value)).toBe(false);
    },
  );
});
