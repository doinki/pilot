const isFunction = (value: unknown): value is (...args: any[]) => any =>
  typeof value === 'function';

export default isFunction;
