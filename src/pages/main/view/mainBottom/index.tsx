import { Sidebar } from '@/common';
import * as s from './style';
import { MainContent } from '..';
import { ContentArea } from '@/styles/GlobalStyle';

export const MainBottom = () => {
  return (
    <s.MainBottom>
      <Sidebar />
      <ContentArea>
        <s.Right>
          <MainContent />
        </s.Right>
      </ContentArea>
    </s.MainBottom>
  );
};
