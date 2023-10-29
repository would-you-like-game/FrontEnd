import * as s from './style';
import { Sidebar } from '@/common';
import { ContentArea } from '@/styles/GlobalStyle';
import { PostList } from './components';

export const Mypage = () => {
  return (
    <s.Mypage>
      <Sidebar />
      <ContentArea>
        <s.Right>
          <PostList />
        </s.Right>
      </ContentArea>
    </s.Mypage>
  );
};
