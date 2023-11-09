import * as s from './style';
import { Sidebar } from '@/common';
import { ContentArea } from '@/styles/GlobalStyle';
import { useGetPathname } from '@/hooks';
import { Profile } from './view';
import { Outlet } from 'react-router-dom';

export const Mypage = () => {
  const pathname = useGetPathname();
  return (
    <s.Mypage>
      <Sidebar />
      <ContentArea>
        {pathname[1] === undefined ? <Profile /> : <Outlet />}
      </ContentArea>
    </s.Mypage>
  );
};
