import { selectOne } from 'css-select';
import { DomUtils, parseDocument } from 'htmlparser2';
import { concatMap, filter, from, map, retry, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const fetchLineBlogPosts$ = fromFetch(
  'https://engineering.linecorp.com/ko/blog'
).pipe(
  switchMap((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.text();
  })
);

const lineBlogPosts$ = fetchLineBlogPosts$.pipe(
  map((html) => parseDocument(html)),
  map((document) =>
    DomUtils.findAll(
      (element) =>
        element.tagName === 'li' &&
        element.attribs.class?.includes('post_list_item'),
      document.children
    )
  ),
  concatMap((elements) => from(elements)),
  map((element) => ({
    author: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.tagName === 'a' &&
          element.attribs.class?.includes('text_name'),
        [element]
      )
    ).trim(),
    content: DomUtils.textContent(
      selectOne('p.desc span.text', element)!
    ).trim(),
    date: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.tagName === 'span' &&
          element.attribs.class?.includes('text_date'),
        [element]
      )
    ).trim(),
    href: new URL(
      DomUtils.findAll((element) => element.tagName === 'a', [element])
        .map((element) => DomUtils.getAttributeValue(element, 'href'))
        .at(0)
        ?.trim() ?? '',
      'https://engineering.linecorp.com'
    ).href,
    title: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.tagName === 'h2' && element.attribs.class?.includes('title'),
        [element]
      )
    ).trim(),
  })),
  filter((post) => post.content !== ''),
  retry(1)
);

export default lineBlogPosts$;
