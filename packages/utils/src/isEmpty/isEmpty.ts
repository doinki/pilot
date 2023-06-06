import { isArray } from '../isArray';
import { isObjectLike } from '../isObjectLike';
import { isString } from '../isString';

function isEmpty(value: unknown): boolean {
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  if (isObjectLike(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}

export default isEmpty;
