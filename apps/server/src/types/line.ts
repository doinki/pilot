export interface GetLinePostsResponse {
  result: {
    data: {
      allLandPressBlogPosts: {
        edges: {
          node: {
            authors: { display_name: string };
            content: string;
            pubdate: string;
            slug: string;
            title: string;
          };
        }[];
      };
    };
  };
}
