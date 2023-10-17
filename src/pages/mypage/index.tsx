import * as s from './style';
import { Sidebar } from '@/common';
import { Content } from './view';

export const Mypage = () => {
  return (
    <s.Mypage>
      <Sidebar />
      <Content />
    </s.Mypage>
  );
};
