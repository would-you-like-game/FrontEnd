import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../../../recoil/sidebarState';
import { Pagination, PostItem } from '@/common';
import * as s from './style';
import { ResponseTotalPostType } from '@/type/response';
import { pageState } from '@/recoil/postState';

export const MainPostList = () => {
  const page = useRecoilValue(pageState);
  const category = useRecoilValue(sidebarState);
  const { data: posts, isLoading } = useSWR<ResponseTotalPostType>(
    category ? `/post/category?page=${page}&category=${category}&size=3` : null
  );
  if (isLoading) {
    return <div>자는중임</div>;
  }

  return (
    <s.MainPostList>
      <s.ItemBox>
        {posts.postList &&
          posts.postList.map((post) => (
            <PostItem
              key={post.postId}
              currnetNubmer={1}
              totalNubmer={post.totalNumber}
              temperature={20}
              nickname={post.nickname}
              title={post.title}
              postId={post.postId}
            />
          ))}
      </s.ItemBox>
      <Pagination totalPages={posts.totalPages} category={category} />
    </s.MainPostList>
  );
};

// postList 비어있는 건 error 가 나는데 params요소에서 뭔가 에러가 나는 것 같음
