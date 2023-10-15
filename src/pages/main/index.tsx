import { Sidebar } from '@/common';
import * as s from './style';
import { Top } from './view/top';

export const Main = () => {
  return (
    <s.Main>
      <s.Top>
        <Top />
      </s.Top>
      <Sidebar />
      <s.Workspace></s.Workspace>
    </s.Main>
  );
};
