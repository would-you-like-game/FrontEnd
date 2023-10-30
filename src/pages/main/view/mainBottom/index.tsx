import * as s from './style';
import { MainPostList } from '..';
import { Pagination, Sidebar } from '@/common';
import { ContentArea } from '@/styles/GlobalStyle';

export const MainBottom = () => {
  return (
    <s.MainBottom>
      <Sidebar />
      <ContentArea>
        <s.Top>
          <MainPostList />
        </s.Top>
        <s.Bottom>
          <Pagination />
        </s.Bottom>
      </ContentArea>
    </s.MainBottom>
  );
};
