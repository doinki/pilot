import { isObjectLike } from '../isObjectLike';

const isObject = (value: unknown): value is object => {
  return isObjectLike(value) && !Array.isArray(value);
};

export default isObject;
