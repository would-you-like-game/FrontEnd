import * as s from './style';
import { Sidebar } from '@/common';
import { PostList } from './view';

export const Mypage = () => {
  return (
    <s.Mypage>
      <Sidebar />
      <s.Workspace>
        <PostList />
      </s.Workspace>
    </s.Mypage>
  );
};
