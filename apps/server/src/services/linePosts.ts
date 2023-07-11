import { format } from 'date-fns';
import { concatMap, delay, from, map, mergeMap } from 'rxjs';
import sanitizeHtml from 'sanitize-html';

import fetch from '../observable/fetch';
import range from '../observable/range';
import type { GetLinePostsResponse } from '../types/line';

const fetchLinePosts$ = range().pipe(
  concatMap((page) => {
    const url = new URL(
      `/page-data/ko/blog${page === 1 ? '' : `/page/${page}`}/page-data.json`,
      'https://engineering.linecorp.com',
    );
    const req = new Request(url);

    return fetch(req).pipe(
      map((text) => JSON.parse(text) as GetLinePostsResponse),
      delay(200),
    );
  }),
);

const linePosts$ = fetchLinePosts$.pipe(
  map((json) => json.result.data.allLandPressBlogPosts.edges.reverse()),
  mergeMap((posts) => from(posts)),
  map((post) => {
    return {
      author: post.node.authors.display_name,
      content: sanitizeHtml(post.node.content, { allowedTags: [] }),
      copyright: 'line',
      date: format(new Date(post.node.pubdate), 'yyyy-MM-dd'),
      href: new URL(post.node.slug, 'https://engineering.linecorp.com/ko/blog/')
        .href,
      title: post.node.title,
    };
  }),
);

export default linePosts$;
