import isValidDate from './isValidDate';

describe('isValidDate', () => {
  test('should return `true`', () => {
    expect(isValidDate(new Date())).toBe(true);
  });

  test('should return `false`', () => {
    expect(isValidDate(new Date(''))).toBe(false);
  });
});
