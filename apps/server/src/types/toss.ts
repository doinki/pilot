export interface GetTossPostsResponse {
  success: {
    results: {
      createdTime: string;
      editor: { name: string };
      key: string;
      subtitle: string;
      title: string;
    }[];
  };
}
