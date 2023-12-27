import { Sidebar } from '@/common';
import * as s from './style';
import { Outlet } from 'react-router-dom';

export const Chatting = () => {
  return (
    <s.Chatting>
      <Sidebar />
      <Outlet />
    </s.Chatting>
  );
};
