import { format, parse } from 'date-fns';
import { DomUtils, parseDocument } from 'htmlparser2';
import { concatMap, filter, from, map, retry, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const fetchKakaoFrontendBlogPosts$ = fromFetch(
  'https://fe-developers.kakaoent.com'
).pipe(
  switchMap((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.text();
  })
);

const kakaoFrontendBlogPosts$ = fetchKakaoFrontendBlogPosts$.pipe(
  map((html) => parseDocument(html)),
  map((document) =>
    DomUtils.findAll(
      (element) =>
        element.tagName === 'a' &&
        element.attribs.class?.includes('ThumbnailItem-module--wrapper--'),
      document.children
    )
  ),
  concatMap((elements) => from(elements)),
  map((element) => ({
    author: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.attribs.class?.includes('ThumbnailItem-module--author--'),
        [element]
      )
    ).trim(),
    content: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.attribs.class?.includes(
            'ThumbnailItem-module--description--'
          ),
        [element]
      )
    ).trim(),
    date:
      DomUtils.findAll(
        (element) => element.attribs.class?.includes('PostDate-module--date--'),
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
    href: new URL(
      DomUtils.findAll((element) => element.tagName === 'a', [element])
        .map((element) => DomUtils.getAttributeValue(element, 'href'))
        .at(0)
        ?.trim() ?? '',
      'https://fe-developers.kakaoent.com'
    ).href,
    title: DomUtils.textContent(
      DomUtils.findAll(
        (element) =>
          element.attribs.class?.includes('ThumbnailItem-module--title--'),
        [element]
      )
    ).trim(),
  })),
  filter((post) => post.content !== ''),
  retry(1)
);

export default kakaoFrontendBlogPosts$;
