import { renderHook } from '@testing-library/react';

import useExperimentalScrollRestoration from './useExperimentalScrollRestoration';

const defaultScrollRestoration = global.history.scrollRestoration;
const defaultUserAgent = global.navigator.userAgent;

describe('useExperimentalScrollRestoration', () => {
  afterEach(() => {
    Object.defineProperty(global, 'history', {
      value: { scrollRestoration: defaultScrollRestoration },
    });
    Object.defineProperty(global, 'navigator', {
      value: { userAgent: defaultUserAgent },
    });
  });

  test.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1', // iPhone 14 Pro
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15', // iPad Pro (12.9-inch) (6th generation)
  ])(
    'window.history.scrollRestoration should be `auto` if is a safari browser',
    (userAgent) => {
      Object.defineProperty(global.history, 'scrollRestoration', {
        value: 'manual',
        writable: true,
      });
      Object.defineProperty(global.navigator, 'userAgent', {
        value: userAgent,
      });

      renderHook(() => useExperimentalScrollRestoration());

      expect(window.history.scrollRestoration).toBe('auto');
    },
  );

  test.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0', // Firefox
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', // Chrome
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.58', // Edge
  ])('should not be `auto` if it is not a safari browser', (userAgent) => {
    Object.defineProperty(global.history, 'scrollRestoration', {
      value: 'manual',
    });
    Object.defineProperty(global.navigator, 'userAgent', {
      value: userAgent,
    });

    renderHook(() => useExperimentalScrollRestoration());

    expect(window.history.scrollRestoration).not.toBe('auto');
  });
});
