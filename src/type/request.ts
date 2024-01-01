export type RequestPostType = {
  post: Post;
  photos: File[];
};

interface Post {
  title: string;
  content: string;
  totalNumber: number;
  category: string;
}
