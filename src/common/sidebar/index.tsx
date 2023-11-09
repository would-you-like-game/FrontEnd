import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button, SidebarItem } from '..';
import { useCallback, useState, useEffect } from 'react';
import { sidebarData } from '@/utils/sidebarData';
import { useGetPathname, useNavigateTo } from '@/hooks';
import { useSetRecoilState } from 'recoil';
import { sidebarState } from '@/recoil/sidebarState';
export const Sidebar = () => {
  const navigateTo = useNavigateTo();
  const pathname = useGetPathname();
  const post = sidebarData(pathname[0]);
  const setRecoilCategory = useSetRecoilState(sidebarState);
  const [category, setCategory] = useState<string>(post[0].category);
  useEffect(() => {
    setRecoilCategory(category);
  }, [category, setRecoilCategory]);

  const onClickCategoryHandler = useCallback(
    (category: string) => {
      setCategory(category);
      if (pathname[0] === 'chatting' || pathname[0] === 'mypage')
        return navigateTo(`/${pathname[0]}${category}`);
      navigateTo(`/${category}`);
    },
    [setCategory, navigateTo, pathname]
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
                checked={category === item.category}
              />
            ))}
        </s.CategoryBox>
        <s.ButtonBox>
          {!(pathname[1] === 'chatting') && (
            <Button onClick={onClickEditButtonHanlder}>게시글 작성</Button>
          )}
        </s.ButtonBox>
      </s.Sidebar>
    </>
  );
};
