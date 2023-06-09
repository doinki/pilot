import { isNil } from '../isNil';

function isDefined<T>(value: T): value is NonNullable<T> {
  return !isNil(value);
}

export default isDefined;
