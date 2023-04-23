import isSafari from './isSafari';

const defaultUserAgent = global.navigator.userAgent;

describe('isSafari', () => {
  afterEach(() => {
    Object.defineProperty(global, 'navigator', {
      value: { userAgent: defaultUserAgent },
    });
  });

  test.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1', // iPhone 14 Pro
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15', // iPad Pro (12.9-inch) (6th generation)
  ])('should return `true` if it is a safari browser', (userAgent) => {
    Object.defineProperty(global.navigator, 'userAgent', { value: userAgent });

    expect(isSafari()).toBe(true);
  });

  test.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0', // Firefox
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', // Chrome
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.58', // Edge
  ])('should return `false` if it is not a safari browser', (userAgent) => {
    Object.defineProperty(global.navigator, 'userAgent', { value: userAgent });

    expect(isSafari()).toBe(false);
  });
});
