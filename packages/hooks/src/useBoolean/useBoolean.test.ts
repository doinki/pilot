import { act, renderHook } from '@testing-library/react';

import useBoolean from './useBoolean';

describe('useBoolean', () => {
  test('base', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);
  });

  test('initialValue', () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current.value).toBe(true);
  });

  test('on', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);

    act(() => result.current.on());
    expect(result.current.value).toBe(true);

    act(() => result.current.on());
    expect(result.current.value).toBe(true);
  });

  test('off', () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current.value).toBe(true);

    act(() => result.current.off());
    expect(result.current.value).toBe(false);

    act(() => result.current.off());
    expect(result.current.value).toBe(false);
  });

  test('toggle', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});
