import * as s from './style';
import { Button, SidebarItem } from '..';
import useSWR from 'swr';
import { useCallback, useState, useEffect } from 'react';
import { sidebarData } from '@/utils/sidebarData';
import { useGetPathname, useNavigateTo } from '@/hooks';
import { useSetRecoilState } from 'recoil';
import { sidebarState } from '@/recoil/sidebarState';
import { sweetAlert } from '@/utils/sweetAlert2';
import { ResponseChatRoomType } from '@/type/response';
export const Sidebar = () => {
  const { data: chatroom } = useSWR<ResponseChatRoomType>(
    '/chatroom?page=1&size=3'
  );
  const navigateTo = useNavigateTo();
  const pathname = useGetPathname();
  const post = sidebarData(pathname[0]);
  const setRecoilCategory = useSetRecoilState(sidebarState);
  const [category, setCategory] = useState<string>(post[0].category);
  useEffect(() => {
    setRecoilCategory(category);
  }, [category, setRecoilCategory]);
  const handleCategoryClick = useCallback(
    (category: string) => {
      console.log('category', category);
      setCategory(category);
      if (pathname[0] === 'chatting' || pathname[0] === 'mypage')
        return navigateTo(`/${pathname[0]}/${category}`);
      navigateTo(`/${category}`);
    },
    [setCategory, navigateTo, pathname]
  );
  const hanlderEditButtonClick = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return navigateTo('/edit');
    }
    sweetAlert('editPost').then((result) => {
      if (result.isConfirmed) {
        navigateTo('/login');
      }
    });
  }, [navigateTo]);
  return (
    <>
      <s.Sidebar>
        <s.CategoryBox>
          {pathname[0] === 'chatting' ? (
            <>
              {chatroom &&
                chatroom.result.map((item) => (
                  <SidebarItem
                    key={`${item.roomKey}`}
                    title={item.nickname}
                    onClick={() => handleCategoryClick(item.nickname)}
                    checked={category === item.nickname}
                  />
                ))}
            </>
          ) : (
            <>
              {post &&
                post.map((item) => (
                  <SidebarItem
                    key={`${item.title}`}
                    title={item.title}
                    type={item.type}
                    onClick={() => handleCategoryClick(item.category)}
                    checked={category === item.category}
                  />
                ))}
            </>
          )}
        </s.CategoryBox>
        <s.ButtonBox>
          {!(pathname[0] === 'chatting') && (
            <Button onClick={hanlderEditButtonClick}>게시글 작성</Button>
          )}
        </s.ButtonBox>
      </s.Sidebar>
    </>
  );
};
