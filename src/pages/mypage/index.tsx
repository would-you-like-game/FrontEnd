import { PostList } from './view';
import * as s from './style';
import { Sidebar } from '@/common';

export const Mypage = () => {
  return (
    <s.Mypage>
      <Sidebar />
      <PostList />
    </s.Mypage>
  );
};
