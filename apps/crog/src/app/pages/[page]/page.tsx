import { Divider, Stack } from '@pilot/ui';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as R from 'remeda';
import { twJoin } from 'tailwind-merge';

import { PostAPI } from '@/api';

export const generateStaticParams = () => {
  return [];
};

interface PageProps {
  params: { page: string };
}

const SIZE = 10;

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

  const minPage = Math.max(Math.floor((page - 1) / 5) * 5 + 1, 1);
  const maxPage = Math.min(Math.floor((page - 1) / 5) * 5 + 5, totalPages);

  return (
    <main className="px-4">
      <Stack
        className={twJoin(
          'prose prose-neutral dark:prose-invert lg:prose-lg',
          'mx-auto gap-6 child:m-0'
        )}
        component="ul"
        divider={
          <li className="not-prose" aria-hidden>
            <Divider />
          </li>
        }
      >
        {data.map(({ author, content, copyright, date, href, id, title }) => (
          <li key={id} className="p-2 lg:p-6">
            <article>
              <header>
                <h2 className="!m-0">
                  <a
                    className="no-underline"
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                  >
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
              <a
                className="text-inherit no-underline"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <p className="line-clamp-5">{content}</p>
              </a>
              <footer>
                <cite>{copyright}</cite>
              </footer>
            </article>
          </li>
        ))}
      </Stack>

      <nav className="space-y-6 pb-16 pt-12">
        <Stack className="justify-center gap-4" direction="row">
          {R.range(minPage, maxPage + 1).map((value) => (
            <Link
              key={value}
              className={twJoin(
                'inline-flex h-12 w-12 items-center justify-center rounded-sm border',
                value === page && 'bg-blue-100 dark:bg-blue-950'
              )}
              href={`/pages/${value}`}
            >
              {value}
            </Link>
          ))}
        </Stack>
        <Stack className="justify-center gap-6" direction="row">
          <Link
            className={twJoin(
              'inline-flex items-center justify-center rounded-sm border px-4 py-2',
              minPage === 1 &&
                'pointer-events-none border-neutral-200 text-neutral-200 dark:border-neutral-600 dark:text-neutral-600'
            )}
            href={minPage === 1 ? '/' : `/pages/${minPage - 1}`}
            prefetch={minPage !== 1}
          >
            이전
          </Link>
          <Link
            className={twJoin(
              'inline-flex items-center justify-center rounded-sm border px-4 py-2',
              maxPage === totalPages &&
                'pointer-events-none border-neutral-200 text-neutral-200 dark:border-neutral-600 dark:text-neutral-600'
            )}
            href={minPage === totalPages ? '/' : `/pages/${maxPage + 1}`}
            prefetch={maxPage !== totalPages}
          >
            다음
          </Link>
        </Stack>
      </nav>
    </main>
  );
};

export default Page;
