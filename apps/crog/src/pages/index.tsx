import { Divider, Stack } from '@pilot/ui';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import type { Post } from '@/types';
import { getLineBlogPosts } from '@/utils';

interface HomeProps {
  isError?: boolean;
  posts?: Post[];
}

const Home: NextPage<HomeProps> = ({ isError, posts = [] }) => {
  return (
    <main className="px-4">
      {isError && <strong>🥲</strong>}
      <Stack
        className="prose mx-auto dark:prose-invert md:prose-lg"
        component="ul"
        divider={<Divider component="li" aria-hidden />}
      >
        {posts.map(({ description, href, title }) => (
          <li key={href} className="md:px-2 lg:px-4">
            <article>
              <h2>
                <span className="not-prose">
                  <Link href={href}>{title}</Link>
                </span>
              </h2>
              <p className="line-clamp-3">
                <span className="not-prose">
                  <Link href={href}>{description}</Link>
                </span>
              </p>
            </article>
          </li>
        ))}
      </Stack>
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const posts = await getLineBlogPosts();

    return { props: { posts } };
  } catch (error) {
    console.error(error);
    return { props: { isError: true } };
  }
};

export default Home;
