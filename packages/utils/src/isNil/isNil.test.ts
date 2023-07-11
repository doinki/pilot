import isNil from './isNil';

describe('isNil', () => {
  test.each([null, undefined])(
    'should return `true` if it is null or undefined',
    (value) => {
      expect(isNil(value)).toBe(true);
    },
  );

  test.each([0, 0n, '', false, Symbol(''), {}])(
    'should return `false` if it is not null or undefined',
    (value) => {
      expect(isNil(value)).toBe(false);
    },
  );
});
