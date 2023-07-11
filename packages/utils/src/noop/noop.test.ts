import noop from './noop';

describe('noop', () => {
  test.each([0, 0n, '', false, Symbol(''), null, undefined, {}])(
    'should return the value passed to it',
    (value) => {
      expect(noop(value)).toBe(value);
    },
  );
});
