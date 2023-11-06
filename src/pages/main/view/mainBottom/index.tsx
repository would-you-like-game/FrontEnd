import * as s from './style';
import { MainPostList } from '..';
import { Sidebar } from '@/common';
import { ContentArea } from '@/styles/GlobalStyle';

export const MainBottom = () => {
  return (
    <s.MainBottom>
      <Sidebar />
      <ContentArea>
        <MainPostList />
      </ContentArea>
    </s.MainBottom>
  );
};
