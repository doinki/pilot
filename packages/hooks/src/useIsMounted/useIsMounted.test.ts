import { renderHook } from '@testing-library/react';

import useIsMounted from './useIsMounted';

describe('useIsMounted', () => {
  test('should return `true` when mounted', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current).toBe(true);
  });

  test('should return `true` when rerendered', () => {
    const { rerender, result } = renderHook(() => useIsMounted());

    rerender();

    expect(result.current).toBe(true);
  });
});
