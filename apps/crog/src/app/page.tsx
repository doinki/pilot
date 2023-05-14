import { Divider, Stack } from '@pilot/ui';
import { twJoin } from 'tailwind-merge';

import { getKakaoBlogPosts } from '@/utils';

const Home = async () => {
  const posts = await getKakaoBlogPosts();

  return (
    <main className="px-4">
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
                    <a href={href} rel="noreferrer" target="_blank">
                      {title}
                    </a>
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
                  <a href={href} rel="noreferrer" target="_blank">
                    {description}
                  </a>
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

export default Home;
