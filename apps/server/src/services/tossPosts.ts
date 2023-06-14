import { format } from 'date-fns';
import { concatMap, delay, from, map, mergeMap } from 'rxjs';

import fetch from '../observable/fetch';
import range from '../observable/range';
import type { GetTossPostsResponse } from '../types/toss';

const fetchTossPosts$ = range().pipe(
  concatMap((page) => {
    const url = new URL(
      'https://api-public.toss.im/api-public/v3/ipd-thor/api/v1/workspaces/15/posts'
    );
    // url.searchParams.set('categoriesSlug', 'tech');
    url.searchParams.set('page', String(page));
    url.searchParams.set('size', '10');
    const req = new Request(url);

    return fetch(req).pipe(
      map((text) => JSON.parse(text) as GetTossPostsResponse),
      delay(200)
    );
  })
);

const tossPosts$ = fetchTossPosts$.pipe(
  map((json) => json.success.results.reverse()),
  mergeMap((posts) => from(posts)),
  map((post) => {
    return {
      author: post.editor.name,
      content: post.subtitle,
      copyright: 'toss',
      date: format(new Date(post.createdTime), 'yyyy-MM-dd'),
      href: new URL(post.key, 'https://toss.tech/article/').href,
      title: post.title,
    };
  })
);

export default tossPosts$;
