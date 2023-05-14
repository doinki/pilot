import 'server-only';

import { format, parse } from 'date-fns';
import { DomUtils, parseDocument } from 'htmlparser2';

import type { Post } from '@/types';

const BLOG_URL = 'https://fe-developers.kakaoent.com';

// Couldn't parse properly when using JSDOM
const getKakaoBlogPosts = async () => {
  const res = await fetch(BLOG_URL, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${BLOG_URL}`);
  }

  return DomUtils.findAll((element) => {
    return (
      element.tagName === 'a' &&
      element.attribs.class?.includes('ThumbnailItem-module--wrapper--')
    );
  }, parseDocument(await res.text()).children).map<Post>((element) => {
    const { href } = new URL(
      DomUtils.getAttributeValue(element, 'href') ?? '',
      BLOG_URL
    );
    const [title = ''] = DomUtils.findAll(
      (element) => element.tagName === 'h3',
      [element]
    ).map((element) => DomUtils.textContent(element));
    const [author = ''] = DomUtils.findAll(
      (element) => element.tagName === 'h6',
      [element]
    ).map((element) => DomUtils.textContent(element));
    const [date = ''] = DomUtils.findAll(
      (element) =>
        element.tagName === 'span' &&
        element.attribs.class?.includes('PostDate-module--date--'),
      [element]
    )
      .map((element) => DomUtils.textContent(element))
      .map((dateString) => {
        return format(
          parse(dateString.trim(), 'yyyy.MM.dd', new Date()),
          'yyyy-MM-dd'
        );
      });
    const [description = ''] = DomUtils.findAll(
      (element) => element.tagName === 'p',
      [element]
    ).map((element) => DomUtils.textContent(element));
    const tags = DomUtils.findAll(
      (element) =>
        element.tagName === 'span' &&
        element.attribs.class?.includes('Pill-module--pill--'),
      [element]
    ).map((element) => DomUtils.textContent(element));

    return {
      author,
      copyright: 'kakao',
      date,
      description,
      href,
      tags,
      title,
    };
  });
};

export default getKakaoBlogPosts;
