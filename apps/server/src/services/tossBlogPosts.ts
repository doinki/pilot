import { selectAll, selectOne } from 'css-select';
import { format, parse } from 'date-fns';
import type { Element } from 'domhandler';
import { DomUtils, parseDocument } from 'htmlparser2';
import { concatMap, from, map, mergeMap, retry } from 'rxjs';

import fetch from '../observable/fetch';

const fetchTossBlogPosts$ = fetch('https://toss.tech/tech');

const tossBlogPosts$ = fetchTossBlogPosts$.pipe(
  map((html) => parseDocument(html)),
  map((document) => selectAll('ul > a', document as unknown as Element)),
  mergeMap((elements) => from(elements)),
  map((element) => {
    const { href } = new URL(element.attribs.href ?? '/', 'https://toss.tech');
    const content = DomUtils.textContent(
      selectOne('span.typography--h7', element)!
    ).trim();
    const date = format(
      parse(
        DomUtils.textContent(selectOne('span.typography--p', element)!).trim(),
        'yyyy. MM. dd',
        new Date()
      ),
      'yyyy-MM-dd'
    );
    const title = DomUtils.textContent(
      selectOne('span.typography--h3', element)!
    ).trim();

    return {
      content,
      copyright: 'toss',
      date,
      href,
      title,
    };
  }),
  concatMap((post) =>
    fetch(post.href).pipe(
      map((html) => parseDocument(html)),
      map((document) => selectOne('h3', document as unknown as Element)),
      map((element) => DomUtils.textContent(element!).trim()),
      map((author) => ({ ...post, author }))
    )
  ),
  retry(1)
);

export default tossBlogPosts$;
