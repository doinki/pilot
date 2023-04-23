import axios from 'axios';
import { JSDOM } from 'jsdom';

import type { Post } from '@/types';

const BLOG_URL = 'https://engineering.linecorp.com/ko/blog';

const getLineBlogPosts = () =>
  axios
    .get<string>(BLOG_URL)
    .then((res) => res.data)
    .then((htmlString) => {
      const {
        window: { document },
      } = new JSDOM(htmlString);

      return Array.from(document.querySelectorAll('.post_list_item'));
    })
    .then((elements) => {
      return elements.map<Post>((element) => {
        const { href } = new URL(
          element.querySelector('.title a')?.getAttribute('href') ?? '',
          BLOG_URL
        );
        const author =
          element.querySelector('.text_name')?.textContent?.trim() ?? '';
        const title =
          element.querySelector('.title')?.textContent?.trim() ?? '';
        const description =
          element.querySelector('.text')?.textContent?.trim() ?? '';
        const date =
          element.querySelector('.text_date')?.textContent?.trim() ?? '';
        const tags = Array.from(element.querySelectorAll('.text_hashtag'))
          .map((element) => element.textContent ?? '')
          .map((textContent) => textContent.trim());

        return { author, date, description, href, tags, title };
      });
    });

export default getLineBlogPosts;
