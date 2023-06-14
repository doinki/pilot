import { range as _range } from 'rxjs';

function range(start = 1, count = 1) {
  return _range(start, count);
}

export default range;
