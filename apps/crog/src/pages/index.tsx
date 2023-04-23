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
    <main className="mx-auto max-w-3xl">
      {isError && <strong>🥲</strong>}
      <Stack
        className="gap-4 py-4"
        component="ul"
        divider={<Divider component="li" aria-hidden />}
      >
        {posts.map(({ description, href, title }) => (
          <Stack className="gap-4 p-6 md:p-8" component="article">
            <Link href={href}>
              <h2>{title}</h2>
            </Link>
            <Link href={href}>
              <p className="line-clamp-3">{description}</p>
            </Link>
          </Stack>
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
