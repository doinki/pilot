import { isLength } from '../isLength';
import { isNil } from '../isNil';

const isArrayLike = <T>(x: any): x is ArrayLike<T> => {
  return !isNil(x) && typeof x !== 'function' && isLength(x.length);
};

export default isArrayLike;
