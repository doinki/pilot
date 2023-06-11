export interface Post {
  author: string;
  content: string;
  copyright: string;
  date: string;
  href: string;
  id: number;
  title: string;
}

export interface GetPostsResponse {
  count: number;
  data: Post[];
  next: string;
  previous: string;
}
