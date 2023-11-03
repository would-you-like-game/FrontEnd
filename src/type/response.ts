export type TestPost = {
  postId: number;
  title: string;
  category: string;
  content: string;
  totalNumber: number;
  createdAt: string;
  nickname: string;
  id: number;
  view: number;
  owner: boolean;
};

export type ResponseTotalPostType = {
  postList: TestPost[];
  totalPages: number;
};
