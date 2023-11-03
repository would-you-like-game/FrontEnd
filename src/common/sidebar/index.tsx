import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button, SidebarItem } from '..';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigateTo } from '@/hooks/useNavigate';
import { useGetPathname } from '@/hooks/useGetPathname';
import { sidebarData } from '@/utils/sidebarData';
import { sidebarState } from '@/recoil/sidebarState';

export const Sidebar = () => {
  const pathname = useGetPathname();
  const navigateTo = useNavigateTo();
  const post = sidebarData(pathname);
  const setCategory = useSetRecoilState(sidebarState);
  const onClickCategoryHandler = useCallback(
    (category: string) => {
      setCategory(category);
      navigateTo(`/${category}?page=1`);
    },
    [setCategory]
  );
  const onClickEditButtonHanlder = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return navigateTo('/edit');
    }
    navigateTo('/login');
  }, [navigateTo]);
  return (
    <>
      <s.Sidebar>
        <s.CategoryBox>
          {post &&
            post.map((item, index) => (
              <SidebarItem
                key={`${item.title}${index}`}
                title={item.title}
                type={item.type}
                onClickHandler={() => onClickCategoryHandler(item.category)}
                checked={pathname === item.category}
              />
            ))}
        </s.CategoryBox>
        <s.ButtonBox>
          {!(pathname === 'chatting') && (
            <Button onClick={onClickEditButtonHanlder}>게시글 작성</Button>
          )}
        </s.ButtonBox>
      </s.Sidebar>
      <Outlet />
    </>
  );
};
