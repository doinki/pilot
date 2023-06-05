function noop(): void;
function noop<T>(value: T): T;
function noop<T>(value?: T) {
  return value;
}

export default noop;
