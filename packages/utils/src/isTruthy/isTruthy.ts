const isTruthy = <T>(
  value: T
): value is Exclude<T, null | undefined | false | '' | 0 | 0n> => {
  return Boolean(value);
};

export default isTruthy;
