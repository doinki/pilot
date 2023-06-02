import { isNil } from '../isNil';

const isDefined = <T>(value: T): value is NonNullable<T> => {
  return !isNil(value);
};

export default isDefined;
