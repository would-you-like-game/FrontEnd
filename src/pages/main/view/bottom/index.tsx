import { Sidebar } from '@/common';
import * as s from './style';
import { Content } from '..';

export const Bottom = () => {
  return (
    <s.Bottom>
      <Sidebar />
      <Content />
    </s.Bottom>
  );
};
