import { format } from 'date-fns';
import { concatMap, delay, from, map, mergeMap } from 'rxjs';

import fetch from '../observable/fetch';
import range from '../observable/range';
import type { GetWoowahanPostsResponse } from '../types/woowahan';

const fetchWoowahanPosts$ = range().pipe(
  concatMap((page) => {
    const searchParams = new URLSearchParams();
    searchParams.set('action', 'get_posts_data');
    searchParams.set('data[meta]', 'main');
    searchParams.set('data[post][paged]', String(page));
    searchParams.set('data[post][post_type]', 'post');

    const req = new Request(
      'https://techblog.woowahan.com/wp-admin/admin-ajax.php',
      { body: searchParams, method: 'POST' }
    );

    return fetch(req).pipe(
      map((text) => JSON.parse(text) as GetWoowahanPostsResponse),
      delay(200)
    );
  })
);

const woowahanPosts$ = fetchWoowahanPosts$.pipe(
  map((json) => json.data.posts.reverse()),
  mergeMap((posts) => from(posts)),
  map((post) => {
    return {
      author: post.author.name,
      content: post.excerpt,
      copyright: 'woowahan',
      date: format(new Date(post.post.post_date), 'yyyy-MM-dd'),
      href: post.permalink,
      title: post.post.post_title,
    };
  })
);

export default woowahanPosts$;
