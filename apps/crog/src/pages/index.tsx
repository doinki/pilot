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
        className="prose prose-neutral mx-auto dark:prose-invert md:prose-lg"
        component="ul"
        divider={
          <li className="not-prose" aria-hidden>
            <Divider />
          </li>
        }
      >
        {posts.map(({ author, copyright, date, description, href, title }) => (
          <li key={href} className="md:px-2 lg:px-4">
            <article>
              <header>
                <h2 className="!mb-[0.25em]">
                  <span className="not-prose">
                    <Link href={href}>{title}</Link>
                  </span>
                </h2>
                <section className="flex gap-2">
                  <div className="text-neutral-600">{author}</div>
                  <time className="text-neutral-500" dateTime={date}>
                    {new Date(date).toLocaleDateString('ko-KR')}
                  </time>
                </section>
              </header>
              <p className="line-clamp-3">
                <span className="not-prose">
                  <Link href={href}>{description}</Link>
                </span>
              </p>
              <footer>
                <cite>{copyright}</cite>
              </footer>
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

    return { props: { posts }, revalidate: 60 * 60 };
  } catch (error) {
    console.error(error);
    return { props: { isError: true }, revalidate: 60 };
  }
};

export default Home;
