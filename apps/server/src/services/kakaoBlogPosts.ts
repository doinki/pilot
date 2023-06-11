import { format, parse } from 'date-fns';
import { DomUtils, parseDocument } from 'htmlparser2';
import { concatMap, filter, from, map, retry } from 'rxjs';

import fetch from '../observable/fetch';

const fetchKakaoBlogPosts$ = fetch('https://tech.kakao.com/blog/');

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
        (element) => element.attribs.class?.includes('elementor-post__excerpt'),
        [element]
      )
    ).trim(),
    copyright: 'kakao',
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
