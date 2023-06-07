import isArray from './isArray';

describe('isArray', () => {
  test('isArray([]) should return `true`', () => {
    expect(isArray([])).toBe(true);
  });

  test.each([{ length: -1 }, () => {}])(
    'isArray(%s) should return `false`',
    (value) => {
      expect(isArray(value)).toBe(false);
    }
  );
});
