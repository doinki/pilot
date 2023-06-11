import type { GetPostsResponse } from '@/types';

export const getPosts = async (
  { page, size }: { page?: number | string; size?: number | string } = {
    page: 1,
    size: 10,
  }
) => {
  const url = new URL('/posts', process.env.API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('size', String(size));

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return (await res.json()) as GetPostsResponse;
};
