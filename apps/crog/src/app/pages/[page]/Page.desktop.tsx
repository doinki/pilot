import { Divider, Stack } from '@pilot/ui';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as R from 'remeda';
import { twJoin } from 'tailwind-merge';

import { PostAPI } from '@/api';

export interface PageProps {
  params: { page: string };
}

const SIZE = 10;
const PAGE_SIZE = 10;

const Page = async ({ params }: PageProps) => {
  const page = parseInt(params.page, 10);

  if (!R.isNumber(page)) {
    notFound();
  }

  const { count, data } = await PostAPI.getPosts({ page, size: SIZE });
  const totalPages = Math.ceil(count / SIZE);

  if (page < 1 || page > totalPages) {
    notFound();
  }

  const minPage = Math.max(
    Math.floor((page - 1) / PAGE_SIZE) * PAGE_SIZE + 1,
    1,
  );
  const maxPage = Math.min(
    Math.floor((page - 1) / PAGE_SIZE) * PAGE_SIZE + PAGE_SIZE,
    totalPages,
  );

  return (
    <main className="mx-auto w-[960px] px-12">
      <Stack
        className="prose-lg prose-neutral dark:prose-invert"
        component="ul"
        divider={
          <li className="not-prose" aria-hidden>
            <Divider />
          </li>
        }
      >
        {data.map(({ author, content, copyright, date, href, id, title }) => (
          <li key={id}>
            <article>
              <header>
                <h2>
                  <a href={href} rel="noreferrer" target="_blank">
                    {title}
                  </a>
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
              <a href={href} rel="noreferrer" tabIndex={-1} target="_blank">
                <p className="line-clamp-6">{content.substring(0, 640)}</p>
              </a>
              <footer>
                <cite>{copyright}</cite>
              </footer>
            </article>
          </li>
        ))}
      </Stack>

      <Stack
        className="my-32 justify-center gap-4"
        component="nav"
        direction="row"
      >
        <Link
          className={twJoin(
            'inline-flex items-center justify-center rounded-sm border px-4 py-2',
            minPage === 1 &&
              'pointer-events-none border-neutral-200 text-neutral-200 dark:border-neutral-600 dark:text-neutral-600',
          )}
          href={minPage === 1 ? '/' : `/pages/${minPage - 1}`}
          prefetch={minPage !== 1}
          tabIndex={minPage === 1 ? -1 : 0}
        >
          이전
        </Link>
        {R.range(minPage, maxPage + 1).map((value) => (
          <Link
            key={value}
            className={twJoin(
              'inline-flex h-12 w-12 items-center justify-center rounded-sm border',
              value === page && 'bg-blue-100 dark:bg-blue-950',
            )}
            href={`/pages/${value}`}
          >
            {value}
          </Link>
        ))}
        <Link
          className={twJoin(
            'inline-flex items-center justify-center rounded-sm border px-4 py-2',
            maxPage === totalPages &&
              'pointer-events-none border-neutral-200 text-neutral-200 dark:border-neutral-600 dark:text-neutral-600',
          )}
          href={maxPage === totalPages ? '/' : `/pages/${maxPage + 1}`}
          prefetch={maxPage !== totalPages}
          tabIndex={maxPage === totalPages ? -1 : 0}
        >
          다음
        </Link>
      </Stack>
    </main>
  );
};

export default Page;
