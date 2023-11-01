export type userProps = {
  nickname: string;
  profileImg: string;
  temperature: number;
  userId?: number;
};

export type postProps = {
  title: string;
  category: string;
  content: string;
  totalNumber: number | '';
};
