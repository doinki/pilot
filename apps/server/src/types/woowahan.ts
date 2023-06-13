export interface GetWoowahanPostsResponse {
  data: {
    posts: {
      author: { name: string };
      excerpt: string;
      permalink: string;
      post: { post_date: string; post_title: string };
    }[];
  };
}
