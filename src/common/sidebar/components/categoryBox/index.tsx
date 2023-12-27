import { useCallback, useState, useEffect } from 'react';
import * as s from './style';
import { SidebarItem } from '@/common';
import { useGetPathname, useNavigateTo } from '@/hooks';
import { sidebarData } from '@/utils/sidebarData';
import { useSetRecoilState } from 'recoil';
import useSWR from 'swr';
import { ResponseChatRoomType } from '@/type/response';
import { sidebarState } from '@/recoil/sidebarState';

export const CategoryBox = () => {
  const navigateTo = useNavigateTo();
  const pathname = useGetPathname();
  console.log(pathname);
  const setRecoilCategory = useSetRecoilState(sidebarState);
  const post = sidebarData(pathname[0]);
  const [category, setCategory] = useState<string>(post[0].category);
  const { data: chatroom } = useSWR<ResponseChatRoomType>(
    '/chatroom?page=1&size=3'
  );

  useEffect(() => {
    setRecoilCategory(category);
  }, [category, setRecoilCategory]);

  const handleCategoryClick = useCallback(
    (category: string) => {
      setCategory(category);
      if (pathname[0] === 'chatting' || pathname[0] === 'mypage')
        return navigateTo(`/${pathname[0]}/${category}`);
      navigateTo(`/${category}`);
    },
    [setCategory, navigateTo, pathname]
  );

  return (
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
  );
};
