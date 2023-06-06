function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export default isError;
