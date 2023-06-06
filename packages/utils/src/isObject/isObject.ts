import { isObjectLike } from '../isObjectLike';

function isObject(value: unknown): value is object {
  return isObjectLike(value) && !Array.isArray(value);
}

export default isObject;
