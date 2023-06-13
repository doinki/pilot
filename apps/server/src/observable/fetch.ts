import { switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

function fetch(url: string, init?: RequestInit) {
  return fromFetch(url, init).pipe(
    switchMap((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.text();
    })
  );
}

export default fetch;
