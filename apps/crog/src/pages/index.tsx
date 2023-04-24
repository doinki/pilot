import { Divider, Stack } from '@pilot/ui';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

import type { Post } from '@/types';
import { getKakaoBlogPosts, getLineBlogPosts } from '@/utils';

interface HomeProps {
  isError?: boolean;
  posts?: Post[];
}

const Home: NextPage<HomeProps> = ({ isError, posts = [] }) => {
  return (
    <main className="px-4">
      {isError && <strong>🥲</strong>}
      <Stack
        className={twJoin(
          'prose prose-neutral dark:prose-invert lg:prose-lg',
          'mx-auto gap-6 py-6 child:m-0'
        )}
        component="ul"
        divider={
          <li className="not-prose" aria-hidden>
            <Divider />
          </li>
        }
      >
        {posts.map(({ author, copyright, date, description, href, title }) => (
          <li key={href} className="p-2 lg:p-6">
            <article>
              <header>
                <h2 className="!m-0">
                  <span className="not-prose">
                    <Link href={href} target="_blank">
                      {title}
                    </Link>
                  </span>
                </h2>
                <section className="flex gap-2">
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {author}
                  </div>
                  <time
                    className="text-neutral-400 dark:text-neutral-500"
                    dateTime={date}
                  >
                    {new Date(date).toLocaleDateString('ko-KR')}
                  </time>
                </section>
              </header>
              <p className="line-clamp-4">
                <span className="not-prose">
                  <Link href={href} target="_blank">
                    {description}
                  </Link>
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
    const [lineBlogPosts, kakaoBlogPosts] = await Promise.all([
      getLineBlogPosts(),
      getKakaoBlogPosts(),
    ]);

    return {
      props: {
        posts: [...lineBlogPosts, ...kakaoBlogPosts].sort((a, b) =>
          a.date < b.date ? 1 : a.date > b.date ? -1 : 0
        ),
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error(error);
    return { props: { isError: true }, revalidate: 60 };
  }
};

export default Home;
