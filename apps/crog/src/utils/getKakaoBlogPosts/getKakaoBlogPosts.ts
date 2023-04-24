import axios from 'axios';
import { format, parse } from 'date-fns';
import { DomUtils, parseDocument } from 'htmlparser2';

import type { Post } from '@/types';

const BLOG_URL = 'https://fe-developers.kakaoent.com';

const getKakaoBlogPosts = () =>
  axios
    .get<string>(BLOG_URL)
    .then((res) => res.data)
    .then((htmlString) => {
      return DomUtils.findAll((element) => {
        return (
          element.tagName === 'a' &&
          element.attribs.class?.includes('ThumbnailItem-module--wrapper--')
        );
      }, parseDocument(htmlString).childNodes);
    })
    .then((elements) => {
      return elements.map<Post>((element) => {
        const { href } = new URL(
          DomUtils.getAttributeValue(element, 'href') ?? '',
          BLOG_URL
        );
        const [title] = DomUtils.findAll(
          (element) => element.tagName === 'h3',
          [element]
        ).map((element) => DomUtils.textContent(element));
        const [author] = DomUtils.findAll(
          (element) => element.tagName === 'h6',
          [element]
        ).map((element) => DomUtils.textContent(element));
        const [date] = DomUtils.findAll(
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
        const [description] = DomUtils.findAll(
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
          author: author ?? '',
          copyright: 'kakao',
          date: date ?? '',
          description: description ?? '',
          href,
          tags,
          title: title ?? '',
        };
      });
    });

export default getKakaoBlogPosts;
