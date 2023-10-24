import { Outlet } from 'react-router-dom';
import * as s from './style';
import { SidebarItem } from '..';
import { useGetPathname } from '@/hooks/useGetPathname';
import { useState } from 'react';
import { sidebarData } from '@/utils/sidebarData';

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
              type={item.type}
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
