import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button, SidebarItem } from '..';
import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigateTo } from '@/hooks/useNavigate';
import { useGetPathname } from '@/hooks/useGetPathname';
import { sidebarData } from '@/utils/sidebarData';
import { sidebarState } from '@/recoil/sidebarState';

export const Sidebar = () => {
  const pathname = useGetPathname();
  const navigateTo = useNavigateTo();
  const post = sidebarData(pathname);
  const [checked, setChecked] = useState(0);
  const setSidebarState = useSetRecoilState(sidebarState);
  const onClickCategoryHandler = useCallback(
    (index: number, category: string) => {
      setChecked(index);
      setSidebarState(category);
    },
    [setSidebarState]
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
                onClickHandler={() =>
                  onClickCategoryHandler(index, item.category)
                }
                checked={checked === index ? true : false}
              />
            ))}
        </s.CategoryBox>
        <s.ButtonBox>
          {!pathname && (
            <Button onClick={onClickEditButtonHanlder}>게시글 작성</Button>
          )}
        </s.ButtonBox>
      </s.Sidebar>
      <Outlet />
    </>
  );
};
