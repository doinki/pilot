import { format, parse } from 'date-fns';
import { DomUtils, parseDocument } from 'htmlparser2';
import { concatMap, filter, from, map, retry, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const fetchKakaoBlogPosts$ = fromFetch('https://tech.kakao.com/blog/').pipe(
  switchMap((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.text();
  })
);

const kakaoBlogPosts$ = fetchKakaoBlogPosts$.pipe(
  map((html) => parseDocument(html)),
  map((document) =>
    DomUtils.findAll(
      (element) =>
        element.tagName === 'article' &&
        element.attribs.class?.includes('post'),
      document.children
    )
  ),
  concatMap((elements) => from(elements)),
  map((element) => ({
    author: DomUtils.textContent(
      DomUtils.findAll(
        (element) => element.attribs.class?.includes('elementor-post-author'),
        [element]
      )
    ).trim(),
    content: DomUtils.textContent(
      DomUtils.findAll(
        (element) => {
          if (element.tagName === 'div' && element.attribs.class) {
            if (element.attribs.class.includes('elementor-post__excerpt')) {
              // console.log(DomUtils.textContent(element));
            }
          }
          return element.attribs.class?.includes('elementor-post__excerpt');
        },
        [element]
      )
    ).trim(),
    date:
      DomUtils.findAll(
        (element) => element.attribs.class?.includes('elementor-post-date'),
        [element]
      )
        .map((element) => DomUtils.textContent(element).trim())
        .map((dateString) => {
          return format(
            parse(dateString.trim(), 'yyyy.MM.dd', new Date()),
            'yyyy-MM-dd'
          );
        })
        .at(0)
        ?.trim() ?? '',
    href:
      DomUtils.findAll((element) => element.tagName === 'a', [element])
        .map((element) => DomUtils.getAttributeValue(element, 'href'))
        .at(0)
        ?.trim() ?? '',
    title: DomUtils.textContent(
      DomUtils.findAll((element) => element.tagName === 'h3', [element])
    ).trim(),
  })),
  filter((post) => post.content !== ''),
  retry(1)
);

export default kakaoBlogPosts$;
