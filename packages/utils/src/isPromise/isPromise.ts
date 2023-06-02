const isPromise = <T, U>(value: Promise<T> | U): value is Promise<T> => {
  return value instanceof Promise;
};

export default isPromise;
