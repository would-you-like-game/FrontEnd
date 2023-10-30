// import useSWR from 'swr';
// import { useRecoilValue } from 'recoil';
// import { sidebarState } from '../../../../recoil/sidebarState';
import { PostItem } from '@/common';
import * as s from './style';

export const MainPostList = () => {
  // const page = 1;
  // const category = useRecoilValue(sidebarState);
  // const { data } = useSWR(
  //   category ? `/post?page=${page}&category=${category}` : null
  // );

  return (
    <s.MainPostList>
      <PostItem
        currnetNubmer={1}
        totalNubmer={8}
        temperature={20}
        nickname="Test1"
        title="test content "
        postId={1}
      />

      <PostItem
        currnetNubmer={1}
        totalNubmer={8}
        temperature={20}
        nickname="Test1"
        title="test content "
        postId={2}
      />

      <PostItem
        currnetNubmer={1}
        totalNubmer={8}
        temperature={20}
        nickname="Test1"
        title="test content "
        postId={3}
      />
    </s.MainPostList>
  );
};
