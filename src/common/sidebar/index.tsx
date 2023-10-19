import { Outlet } from 'react-router-dom';
import * as s from './style';
import { SidebarItem } from '..';
import { useGetPathname } from '@/hooks/useGetPathname';
import { sidebarData } from '@/utils/sidebarData';
import { useState } from 'react';

export const Sidebar = () => {
  const pathname = useGetPathname();
  const [checked, setChecked] = useState(0);
  const post = sidebarData(pathname);
  const onClickHandler = (index: number) => {
    setChecked(index);
  };
  return (
    <>
      <s.Sidebar>
        {post &&
          post.map((item, index) => (
            <SidebarItem
              key={`${item.title}${index}`}
              index={index}
              title={item.title}
              iconColor={item.iconColor}
              iconType={item.iconType}
              onClickHandler={onClickHandler}
              checked={checked === index ? true : false}
            />
          ))}
      </s.Sidebar>
      <Outlet />
    </>
  );
};
// map 함수로 여러개 뿌릴 예정임
