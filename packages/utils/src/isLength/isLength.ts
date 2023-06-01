const isLength = (value: unknown): value is number => {
  return (
    typeof value === 'number' &&
    value > -1 &&
    Number.isInteger(value) &&
    value <= Number.MAX_SAFE_INTEGER
  );
};

export default isLength;
