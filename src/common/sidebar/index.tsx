import { Outlet } from 'react-router-dom';
import * as s from './style';
import { SidebarItem } from '../sidebarItem';

export const Sidebar = () => {
  return (
    <>
      <s.Sidebar>
        <SidebarItem title="내가 쓴 게시물" />
        <SidebarItem title="내가 쓴 게시물2" />
      </s.Sidebar>
      <Outlet />
    </>
  );
};
// map 함수로 여러개 뿌릴 예정임
