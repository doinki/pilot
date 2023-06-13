import { format } from 'date-fns';
import { from, map, mergeMap } from 'rxjs';

import fetch from '../observable/fetch';
import type { GetWoowahanPostsResponse } from '../types/woowahan';

const fetchWoowahanBlogPosts$ = fetch(
  'https://techblog.woowahan.com/wp-admin/admin-ajax.php',
  {
    body: new URLSearchParams({
      action: 'get_posts_data',
      'data[meta]': 'main',
      'data[post][paged]': '1',
      'data[post][post_type]': 'post',
    }),
    method: 'POST',
  }
).pipe(map((text) => JSON.parse(text) as GetWoowahanPostsResponse));

const woowahanBlogPosts$ = fetchWoowahanBlogPosts$.pipe(
  map((json) => json.data.posts),
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

export default woowahanBlogPosts$;
